<template>
    <div class="side-bar">
      <div class="frame-wrapper">
        <div class="frame">
            <router-link to="/dashboard" :class="{ 'div-wrapper': true, 'active': activeItem === 'dashboard' }">
              <div class="dashboard">
                <i class='bx bxs-dashboard'></i>
                <router-link to="/dashboard" class="text-wrapper" @click="activateSidebarItem('dashboard')">Dashboard</router-link>
              </div>
            </router-link>
            <router-link to="/customers" :class="{ 'div-wrapper': true, 'active': activeItem === 'customers' }">
              <div class="customers">
                <i class='bx bxs-user'></i>
                <router-link to="/customers" class="text-wrapper" @click="activateSidebarItem('customers')">Customers</router-link>
              </div>
            </router-link>
            <router-link to="/bookings" :class="{ 'div-wrapper': true, 'active': activeItem === 'bookings' }">
              <div class="bookings">
                <i class='bx bxs-book-alt'></i>
                <router-link to="/bookings" class="text-wrapper" @click="activateSidebarItem('bookings')">Bookings</router-link>
              </div>
            </router-link>
            <router-link to="/tours" :class="{ 'div-wrapper': true, 'active': activeItem === 'tours' }">
              <div class="bookings">
                <i class='bx bxs-plane-alt'></i>
                <router-link to="/tours" class="text-wrapper" @click="activateSidebarItem('tours')">Tours</router-link>
              </div>
            </router-link>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "SideBar",
    components: {
    },
    data() {
    return {
      activeItem: null,
    };
  },
  created() {
  // Retrieve the last active item from local storage
  const lastActiveItem = localStorage.getItem('lastActiveItem');
  
  // If a last active item is found, set it as the default active item
  if (lastActiveItem) {
    this.activateSidebarItem(lastActiveItem);
  } else {
    // Otherwise, set 'dashboard' as the default active item
    this.activateSidebarItem('dashboard');
  }
  },
  methods: {
      activateSidebarItem(item) {
      // Set the provided item as the active item
      this.activeItem = item;
      
      // Store the active item in local storage
      localStorage.setItem('lastActiveItem', item);
    }
  },
  };
  </script>
  
  <style>
  .side-bar {
    background-color: #ffffff;
    width: 220px;
    height: 100vh;
    top: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    position: fixed;
  }
  
  .side-bar .frame-wrapper {
    background-color: #ffffff;
    border-color: #3eb368;
    border-right-style: solid;
    border-right-width: 1px;
    width: 100%;
    flex-grow: 1;
  }
  
  .side-bar .frame {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    top: 19px;
  }
  
  .side-bar .div-wrapper {
    background-color: #ffffff;
    border-radius: 4px;
    display: block;
    gap: 10px;
    padding: 8px 8px 8px 9px;
    width: 179px;
  }
  
  .side-bar .dashboard {
    height: 24px;
    width: 121px;
    color: #3eb368;
    position: relative;
  }

  .side-bar .active {
    background-color: #3eb368;
  }

  .side-bar .dashboard i {
    position: absolute;
    top: 4px;
    left: 0;
  }
  
  .side-bar .text-wrapper {
    color: #8e8e8e;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    padding-top: 1px;
    position: absolute;
    left: 32px;
  }

  .side-bar .bookings {
    height: 24px;
    width: 121px;
    color: #3eb368;
    position: relative;
  }

  .side-bar .bookings i {
    position: absolute;
    top: 4px;
    left: 0;
  }

  .side-bar .customers {
    height: 24px;
    width: 121px;
    color: #3eb368;
    position: relative;
  }

  .side-bar .customers i {
    position: absolute;
    top: 4px;
    left: 0;
  }

  .side-bar .tours {
    height: 24px;
    width: 121px;
    color: #3eb368;
    position: relative;
  }

  .side-bar .tours i {
    position: absolute;
    top: 4px;
    left: 0;
  }


  .side-bar .div-wrapper:hover,
  .side-bar .div-wrapper.active {
    background-color: #3eb368;
  }
  
  .side-bar .div-wrapper:hover .dashboard i,
  .side-bar .div-wrapper.active .dashboard i {
    color: #ffffff;
  }
  
  .side-bar .div-wrapper:hover .dashboard .text-wrapper,
  .side-bar .div-wrapper.active .dashboard .text-wrapper {
    color: #ffffff;
  }

  .side-bar .div-wrapper:hover .bookings i,
  .side-bar .div-wrapper.active .bookings i {
    color: #ffffff;
  }
  
  .side-bar .div-wrapper:hover .bookings .text-wrapper,
  .side-bar .div-wrapper.active .bookings .text-wrapper {
    color: #ffffff;
  }

  .side-bar .div-wrapper:hover .customers i,
  .side-bar .div-wrapper.active .customers i {
    color: #ffffff;
  }
  
  .side-bar .div-wrapper:hover .customers .text-wrapper,
  .side-bar .div-wrapper.active .customers .text-wrapper {
    color: #ffffff;
  }

  .side-bar .div-wrapper:hover .tours i,
  .side-bar .div-wrapper.active .tours i {
    color: #ffffff;
  }
  
  .side-bar .div-wrapper:hover .tours .text-wrapper,
  .side-bar .div-wrapper.active .tours .text-wrapper {
    color: #ffffff;
  }

  </style>
  