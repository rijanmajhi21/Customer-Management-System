    <template>
        <nav class="navbar">
        <div class="container">
            <img class="logo" alt="Bookmundi Logo" src="@/assets/bmlogo.webp" />
            <ul class="nav-links">
            <li><a href="/homepage">Home</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            </ul>
            <div class="user" @click="toggleDropdown">
                <i class='bx bx-menu'></i>
                <div v-if="showDropdown" class="login_dropdown">
                <!-- Add your dropdown menu items here -->
                <router-link to="/login" @click="login">Login</router-link>
                <router-link to="/signup" @click="signup">Signup</router-link>
            </div>
            </div>
        </div>
        </nav>
    </template>
    
<script>
import 'boxicons/css/boxicons.min.css';

export default {
    data() {
    return {
        showDropdown: false
    };
},
    methods: {
        toggleDropdown() {
        this.showDropdown = !this.showDropdown;
    },
    login() {
    this.$router.push('/login');
    },
    signup() {
    this.$router.push('/signup');
    }
}
}
</script>
    
<style scoped>
.navbar {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    width: 100%;
}
    
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
}
    
.logo {
    height: 23px;
    width: 112px;
    object-fit: cover;
}

@media (max-width: 768px) {
    .logo {
        width: 80px;
    }
}

.nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
}
    
.nav-links li {
    display: inline-block;
    margin-left: 1.5rem;
}
    
.nav-links li a {
    text-decoration: none;
    color: #333;
}
    
.nav-links li a:hover {
    color: #3eb368;
}
    
.user {
    cursor: pointer;
}

.user .bx-menu:hover{
    color: #3eb368;
}

    
.login_dropdown {
    position: absolute;
    top: 55px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px; /* Add border-radius for rounded corners */
    min-width: 102px; /* Set a minimum width */
    z-index: 9999;
    right: 11%;
    text-align: right;
    
}

.user:hover .login_dropdown {
    display: block;
    }
    
.login_dropdown a {
    display: block;
    text-decoration: none;
    color: #8e8e8e;
    transition: background-color 0.3s ease;
    padding-right: 8px;
}

.login_dropdown a:hover {
    background-color: #3eb368;
    color: #ffffff;
}
</style>
    