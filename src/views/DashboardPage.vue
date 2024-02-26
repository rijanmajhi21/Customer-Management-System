<template>
    <div class="dashboard">
      <div class="title">
        <div class="overlap-group">
          <div class="dashboard-wrapper">Dashboard</div>
        </div>
      </div>
      <div class="overview">
        <div class="dashboard-content">
          <div class="container1">
            <div class="total-users">
              <span class="total-customers">Total Customers</span>
              <span class="empty">{{ totalCustomers }}</span>
            </div>
          </div>
          <div class="container2">
            <div class="total-users">
              <span class="total-customers">Total Bookings</span>
              <span class="empty">{{ totalBookings }}</span>
            </div>
          </div>
          <div class="container3">
            <div class="total-users">
              <span class="total-customers">Total Tours</span>
              <span class="empty">{{ totalTours }}</span>
            </div>
          </div>
        </div>
        <div class="chart">
          <a class="analysis">Weekly Analysis of Customers</a>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios';
import 'boxicons/css/boxicons.min.css';
import Chart from 'chart.js/auto';

  export default {
    name: 'DashboardPage',
    data() {
      return {
        totalCustomers: '',
        totalBookings: '',
        totalTours: '',

        bookings: [],
      };
    },
    mounted() {
        this.fetchTotalCustomers();
        this.fetchTotalBookings();
        this.fetchTotalTours();
        this.createChart();
    },
    methods: {
      // Fetch total customers
        async fetchTotalCustomers() {
            try {
                const response = await axios.get('http://localhost:8000/api/get-total-customers');
                this.totalCustomers = response.data.totalCustomers;
            } catch (error) {
                console.error('Error fetching total customers:', error);
            }
        },

        // Fetch total bookings
        async fetchTotalBookings() {
            try {
                const response = await axios.get('http://localhost:8000/api/get-total-bookings');
                this.totalBookings = response.data.totalBookings;
            } catch (error) {
                console.error('Error fetching total bookings:', error);
            }
        },

        // Fetch total tours
        async fetchTotalTours() {
            try {
                const response = await axios.get('http://localhost:8000/api/get-total-tours');
                this.totalTours = response.data.totalTours;
            } catch (error) {
                console.error('Error fetching total tours:', error);
            }
        },
        createChart() {
          const ctx = document.getElementById('myChart').getContext('2d');
          this.chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              datasets: [{
                label: 'Customers',
                data: [12, 2, 5, 26,32, 15, 22],
                borderColor: 'rgb(62 , 179 , 104 )',
                tension: 0.1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
    },
  };
  </script>
  
  <style scoped>
  .dashboard{
    background-color: #ffffff;
  }
  .dashboard .title{
    height: 60px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .dashboard .overlap-group{
    background-color: #f7f7f7;
    border-bottom-style: solid;
    border-color: #dbdbdb;
    border-bottom-width:1px ;
    height: 60px;
    position: relative;
  }

  .dashboard .dashboard-wrapper{
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
.a{
  padding-top: 20px;
  padding-bottom: 20px;
}
  .analysis{
    color: #8e8e8e;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    height: 29px;
    left: 31px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
  }

  .overview {
    position: absolute;
    top: 61px;
    width: 100%;
  }

  .dashboard-content{
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 32px;
    height: 160px;
    width:80%;
  }
  
  .container1 {
    width: 300px;
    height: 120px;
    margin: 0 auto;
    border-radius: 8px;
    background: #3eb368;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 31px;
  }

  .total-users {
    position: relative;
    width: 192px;
    height: 73px;
    margin: 34px 0 0 26px;
    font-size: 0px;
    z-index: 1;
    overflow: visible auto;
  }
  .total-customers {
    display: block;
    position: relative;
    height: 29px;
    color: #ffffff;
    font-family: Inter, var(--default-font-family);
    font-size: 20px;
    font-weight: 600;
    line-height: 16px;
    text-align: left;
    white-space: nowrap;
    z-index: 3;
  }
  .empty {
    display: block;
    position: relative;
    height: 24px;
    margin: 20px 0 0 0;
    color: #ffffff;
    font-family: Inter, var(--default-font-family);
    font-size: 24px;
    font-weight: 600;
    line-height: 0px;
    text-align: left;
    white-space: nowrap;
    z-index: 2;
  }

  .container2 {
    width: 300px;
    height: 120px;
    margin: 0 auto;
    border-radius: 8px;
    background: #72AAFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .container3 {

    width: 300px;
    height: 120px;
    margin: 0 auto;
    border-radius: 8px;
    background: #6E4BD2;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .chart {
    width: 80%;
    height: 500px;
    padding-left: 31px;
  }
  #myChart{
    padding-top: 32px;
  }
  </style>
  