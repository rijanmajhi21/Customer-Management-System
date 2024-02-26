<template>
  <div class="bookings">
    <div class="title">
      <div class="overlap-group">
        <div class="bookings-wrapper">Bookings</div>
      </div>
    </div>
    <div class="booking-overview">
        <div class="create">
          <router-link to="/booking_form" class="create-wrapper">+Create</router-link>
        </div>
        <!-- Search Bar -->
        <div class="search-bar">
          <input v-model="searchQuery" type="text" placeholder="Search by Customer ID">
          <button @click="searchBookings">Search</button>
        </div>
        <table class="booking-table">
          <thead>
            <tr>
              <th style="width: 60px">Tour id</th>
              <th style="width: 80px">Duration</th>
              <th style="width: 150px">Booking by</th>
              <th style="width: 30px">Customer Id</th>
              <th style="width: 150px">Booking Date</th>
              <th style="width: 80px">Price</th>
              <th style="width: 80px">Discount Percentage</th>
              <th style="width: 80px">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="booking in searchResults.length ? searchResults : bookings" :key="booking.id">
              <td>{{ booking.tour_id }}</td>
              <td>{{ booking.duration }}</td>
              <td>{{ booking.booking_by }}</td>
              <td>{{ booking.cus_id }}</td>
              <td>{{ formatCreatedAt(booking.created_at) }}</td>
              <td>$US {{ booking.amount }} </td>
              <td>{{ booking.dis_amount }}%</td>
              <td>$US {{ booking.total }}</td>
            </tr>
          </tbody>
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
  import Pagination from "@/components/PaginationComponent.vue";
import axios from 'axios';
import 'boxicons/css/boxicons.min.css';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Bookings',
    data() {
      return {
        bookings: [],

        // Search
        searchResults: [],         // Store search results separately
        searchQuery: '',

        // Pagination Items
        currentPage: 1,
        totalPages: 0,
        perPage: 10, // Number of customers per page
      };
    },
    components: {
      Pagination,
    },
    mounted() {
    this.fetchBookings();
  },
  methods: {
    fetchBookings() {
      // Make a GET request to the Laravel endpoint to retrieve bookings
      axios.get(`http://localhost:8000/api/get-bookings?page=${this.currentPage}`)
        .then(response => {
          this.bookings = response.data.bookings.data;
          this.totalPages = response.data.bookings.last_page;
          this.sortBookingsByDate();
        })
        .catch(error => {
          console.error('Error fetching bookings:', error);
        });
    },
    formatCreatedAt(timestamp) {
      const date = new Date(timestamp);
      return date.toISOString().slice(0, 19).replace("T", " ");
    },
    handlePageChange(page) {
      this.currentPage = page;
      this.fetchBookings();
    },

    //Search bookings
    async searchBookings() {
    try {
      const response = await axios.get(`http://localhost:8000/api/bookings?search=${this.searchQuery}`);
      this.searchResults = response.data.bookings;
      } catch (error) {
        console.error('Error fetching filtered bookings:', error);
      }
    },
    sortBookingsByDate() {
      this.bookings.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    },
  },
  };
  </script>
  
  <style scoped>
  .bookings .title{
    height: 60px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .bookings .overlap-group{
    background-color: #f7f7f7;
    border-bottom-style: solid;
    border-color: #dbdbdb;
    border-bottom-width:1px ;
    height: 60px;
    position: relative;
  }

  .bookings .bookings-wrapper{
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
  background-color: #45a049;
}
  .booking-overview {
    position: absolute;
    top: 61px;
    width: 100%;
  }
  
  .booking-table {
    width: 95%; /* Adjust width as needed */
    margin-top: 20px;
    margin-left: 31px;
    border-collapse: collapse;
  }
  
  .booking-table th, td {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 10px; /* Adjust padding as needed */
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

  </style>
  
  