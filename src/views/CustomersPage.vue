<template>
  <div class="customers">
    <div class="title">
      <div class="overlap-group">
        <div class="customers-wrapper">Customers</div>
      </div>
    </div>
    <div class="customer-overview">
      <div class="create">
        <router-link to="/customerform" class="create-wrapper">+Create</router-link>
      </div>
      <!-- Search Bar -->
      <div class="search-bar">
        <input v-model="searchQuery" type="text" placeholder="Customer ID/ Name">
        <button @click="searchCustomers">Search</button>
      </div>
      <table class="customer-table">
        <thead>
          <tr>
            <th style="width: 20px">ID</th>
            <th style="width: 120px">Customer Name</th>
            <th style="width: 100px">Email</th>
            <th style="width: 100px">Phone No.</th>
            <th style="width: 120px">Address</th>
            <th style="width: 40px">Booking</th>
            <th style="width: 40px">Created at</th>
            <th style="width: 30px">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in searchResults.length ? searchResults : customers" :key="customer.cus_id">
            <td>{{ customer.cus_id }}</td>
            <td>{{ customer.customer_name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone_no }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.booking }}</td>
            <td>{{ formatCreatedAt(customer.created_at) }}</td>
            <td>
              <router-link :to="{ name: 'CustomerInformation', params: { customerId: customer.cus_id } }" title="View">
                <i class="bx bx-show"></i>
              </router-link>
              <span title="Edit" @click="openEditDialog(customer)">
                <i class='bx bxs-edit-alt'></i>
              </span>
              <span @click="showDeleteConfirmation(customer)" title="Delete">
                <i class='bx bx-trash-alt'></i>
              </span>
            </td>
          </tr>
        </tbody>
        <!-- Edit dialog component -->
        <EditDialog
        v-if="isEditDialogVisible"
        :customerData="selectedCustomer"
        @changes-saved="handleChangesSaved"
        @cancel="cancelEdit"
        />
        <confirmation-dialog
          v-if="isDeleteConfirmationVisible"
          :message="deleteConfirmationMessage"
          @onConfirm="deleteCustomer"
          @onCancel="cancelDelete"
        />
      </table>
      <div class="pagination-container">
        <pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>
  
<script>
import ConfirmationDialog from '@/components/ConfirmationDialog.vue';
import EditDialog from '@/components/EditDialog.vue';
import Pagination from '@/components/PaginationComponent.vue';
import axios from 'axios';
import 'boxicons/css/boxicons.min.css';
    
  export default {
    name: 'CustomerPage',
    components: {
    ConfirmationDialog,
    Pagination,
    EditDialog,
    },
    data() {
      return {
        customers: [],

        //Search customers
        searchResults: [],         // Store search results separately
        searchQuery: '',

        // Deletion items
        isDeleteConfirmationVisible: false,
        deleteConfirmationMessage: '',
        customerToDeleteId: '',

        // Pagination Items
        currentPage: 1,
        totalPages: 0,
        perPage: 10, // Number of customers per page

        //Edit Items
        isEditDialogVisible: false,
        selectedCustomer: null,
      };
    },
    mounted() {
    this.fetchCustomers();
    
  },
  methods: {
    // Fetching customers
    fetchCustomers() {
      axios.get(`http://localhost:8000/api/get-customers?page=${this.currentPage}`)
      .then(response => {
        this.customers = response.data.customers.data;
        this.totalPages = response.data.customers.last_page;
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
      });
    },
    formatCreatedAt(timestamp) {
      const date = new Date(timestamp);
      return date.toISOString().slice(0, 19).replace("T", " ");
    },
    handlePageChange(page) {
      this.currentPage = page;
      this.fetchCustomers();
    },

    //Search customers
    async searchCustomers() {
    try {
      const response = await axios.get(`http://localhost:8000/api/customers?search=${this.searchQuery}`);
      this.searchResults = response.data.customers;
      } catch (error) {
        console.error('Error fetching filtered customers:', error);
      }
    },

    // Viewing Customer info
    async viewItem() {
  
    },

    // Deleting Customer
    showDeleteConfirmation(customer) {
      this.customerToDelete = customer.cus_id;
      this.customerToDelete = customer;
      this.deleteConfirmationMessage  = `Do you want to delete ${customer.customer_name}?`;
      this.isDeleteConfirmationVisible  = true;
    },
    async deleteCustomer() {
        try {
              // Call API to delete customer
              await axios.delete(`http://localhost:8000/api/customers/${this.customerToDelete.id}`);
              window.alert('Customer deleted successfully');
            } catch (error) {
                console.error('Error deleting customer:', error);
                if (error.response) {
                    console.error('Response status:', error.response.status);
                    console.error('Response data:', error.response.data);
                  }
            } finally {
                this.isDeleteConfirmationVisible = false;
          }
        },
    cancelDelete() {
      this.isDeleteConfirmationVisible  = false;
    },
    openEditDialog(customer) {
      // Set the selected customer data and show the edit dialog
      this.selectedCustomer = customer;
      this.isEditDialogVisible = true;
    },
    cancelEdit() {
      // Reset the selected customer and hide the edit dialog
      this.selectedCustomer = null;
      this.isEditDialogVisible = false;
      // Optionally, fetch updated customer data after changes are saved
      this.fetchCustomers();
    },
    handleChangesSaved(editedCustomer) {
        // Find the index of the edited customer in the customers array
        const index = this.customers.findIndex(customer => customer.id === editedCustomer.id);
        if (index !== -1) {
            // Update the customer data in the customers array
            this.customers.splice(index, 1, editedCustomer);
        }
        this.isEditDialogVisible = false; // Close the edit dialog
    },
  },
  };
  </script>
  
  <style scoped>
  .customers .title{
    height: 60px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .customers .overlap-group{
    background-color: #f7f7f7;
    border-bottom-style: solid;
    border-color: #dbdbdb;
    border-bottom-width:1px ;
    height: 60px;
    position: relative;
  }

  .customers .customers-wrapper{
    color: #8e8e8e;
    font-family: "Inter-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    height: 29px;
    left: 31px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 15px;
  }

  .create{
    background-color: #3eb368;
    border-radius: 4px;
    height: 32px;
    margin-left: 31px;
    margin-top: 20px;
    position: relative;
    width: 100px;
  }
.create-wrapper{
  color: #ffffff;
  height: 21px;
  left: 16px;
  position: absolute;
  text-align: center;
  top: 5px;
  width:67px;
}
.search-bar {
  display: flex;
  margin-bottom: 20px;
  margin-top: 10px;
  outline: none;
  margin-left: 31px;
  width: 500px;
  left: 0px;
}

.search-bar input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;
}

.search-bar button {
  padding: 8px 12px;
  font-size: 14px;
  background-color: #3eb368;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #3eb368;
}
  .customer-overview {
    position: absolute;
    top: 61px;
    width: 100%;
  }
  
  .customer-table {
    width: 95%; /* Adjust width as needed */
    margin-top: 20px;
    margin-left: 31px;
    border-collapse: collapse;
  }
  
  th, td {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 4px; /* Adjust padding as needed */
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2; /* Lighter background color */
    color: #6d6d6d; /* Darker text color */
    font-weight: bold; /* Make header text bold */
  }
  
  /* Alternate row background color */
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  /* Hover effect */
  tr:hover {
    background-color: #f5f5f5;
  }

  span {
    cursor: pointer;
  }
  </style>
  
  