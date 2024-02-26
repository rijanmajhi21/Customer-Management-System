<template>
  <div class="tours">
    <div class="title">
      <div class="overlap-group">
        <div class="tours-wrapper">Tours</div>
      </div>
    </div>
    <div class="tours-overview">
        <div class="add">
          <router-link to="/add_tours" class="add-wrapper">+Add</router-link>
        </div>
        <!-- Search Bar -->
        <div class="search-bar">
          <input v-model="searchQuery" type="text" placeholder="Search by tour ID">
          <button @click="search">Search</button>
        </div>
        <table class="tours-table">
          <thead>
            <tr>
              <th style="width:20px ">Tour id</th>
              <th style="width:150px ">Tour Title</th>
              <th style="width:20px ">Day/ Days</th>
              <th style="width: 100px">Operator</th>
              <th style="width: 100px">Tour Type</th>
              <th style="width:30px ">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tour in searchResults.length ? searchResults : tours" :key="tour.id">
              <td>{{ tour.tour_id }}</td>
              <td>{{ tour.tour_title }}</td>
              <td>{{ tour.duration }}</td>
              <td>{{ tour.operator }}</td>
              <td>{{ tour.tour_type }}</td>
              <td>US$ {{ tour.price }}</td>
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
    name: 'ToursPage',
    data() {
      return {
        tours: [],
        // Search tour
        searchResults: [],
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
    this.fetchTours();
    },

    computed: {
    filteredTours() {
      return this.tours.filter(tour => {
        // Filter based on tour ID or other criteria
        return tour.tour_id.includes(this.searchQuery) || tour.tour_title.includes(this.searchQuery);
      });
    },
    // Slice tours based on current page
    slicedTours() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredTours.slice(startIndex, endIndex);
    },
  },
  methods: {
    fetchTours() {
      axios.get(`http://localhost:8000/api/get-tours?page=${this.currentPage}`)
        .then(response => {
          this.tours = response.data.tours.data;
          this.totalPages = response.data.tours.last_page;
        })
        .catch(error => {
          console.error('Error fetching tours:', error);
        });
    },
    handlePageChange(page) {
      this.currentPage = page;
      this.fetchTours();
    },
    // Search method
    async search() {
    try {
      const response = await axios.get(`http://localhost:8000/api/tours?search=${this.searchQuery}`);
      this.tours = response.data.tours; // Assuming your response structure has a 'tours' property
    } catch (error) {
      console.error('Error fetching filtered tours:', error);
    }
  },
  },
  };
  </script>
  
  <style scoped>
  .tours .title{
    height: 60px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .tours .overlap-group{
    background-color: #f7f7f7;
    border-bottom-style: solid;
    border-color: #dbdbdb;
    border-bottom-width:1px ;
    height: 60px;
    position: relative;
  }

  .tours .tours-wrapper{
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

  .add{
    background-color: #3eb368;
    border-radius: 4px;
    height: 32px;
    margin-left: 31px;
    margin-top: 20px;
    position: relative;
    width: 100px;
  }
.add-wrapper{
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
  .tours-overview {
    position: absolute;
    top: 61px;
    width: 100%;
  }
  
  .tours-table {
    width: 90%; /* Adjust width as needed */
    margin-top: 20px;
    margin-left: 31px;
    border-collapse: collapse;
  }
  
  .tours-table th, td {
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
  
  