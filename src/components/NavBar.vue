<template>
  <div class="box">
    <div class="nav-bar">
      <img class="bmlogo" alt="Bmlogo" src="@/assets/bmlogo.webp" />
      <div class="user" @click="toggleDropdown">
        <i class='bx bxs-user-circle'></i>
        <i class='bx bx-chevron-down' ></i>
        <div v-if="showDropdown" class="dropdown">
          <!-- Add your dropdown menu items here -->
          <router-link to="/login" @click="logout">Logout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'boxicons/css/boxicons.min.css';

export default {
  name: "NavBar",
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      // Add your logout logic here, e.g., clearing session and redirecting
      // to the login page.
      this.$router.push('/homepage');
      // Additional logout logic...
    },
  },
};
</script>

<style>
.box {
  height: 60px;
  position: relative;
  width: 100%;
  z-index: 2;
  position: fixed;
}

.box .nav-bar {
  background-color: #ffffff;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #3eb368;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  position: fixed;
}

.box .bmlogo {
  height: 23px;
  width: 112px;
  object-fit: cover;
  position: relative;
  left: 30px;
}

.box .user {
  height: 24px;
  width: 121px;
  color: #3eb368;
  position: relative;
  left: 20px;
  display: inline-block;
  cursor: pointer;
}

.box .username i{
  position: absolute;
  height: 24px;
  width: 24px;
  top: 4px;
  left: 80px;
  color: #3eb368;
}

.dropdown {
  margin-right: 100%;
  position: absolute;
  top: 41px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px; /* Add border-radius for rounded corners */
  min-width: 102px; /* Set a minimum width */
  z-index: 9999;
}

.user:hover .dropdown {
  display: block;
}

.dropdown a {
  display: block;
  text-decoration: none;
  color: #8e8e8e;
  transition: background-color 0.3s ease;
}

.dropdown a:hover {
  background-color: #3eb368;
  color: #ffffff;
}

@media (max-width: 768px) {
  .box .bmlogo {
    width: 80px;
  }
}
</style>
