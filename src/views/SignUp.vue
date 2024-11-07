<template>
  <div class="signupage">
    <!-- Include the HomeNav component -->
    <HomeNav />
    <router-view></router-view>
  </div>
      <div class="signup__frame">
        <div class="signup__frame-2">
          <div class="signup__welcomeback">
            <div class="signup__text-wrapper">Sign Up! <br>
              <p class="signup__p">Enter your information to create your account.</p>
            </div>
          </div>
          <form @submit.prevent="signupform" class="form" method="post">
            <div class="signup__frame-3">
              <div class="signup__text-wrapper-2">Full Name</div>
              <div class="signup__textbox">
                <input
                  class="signup__overlap-group"
                  type="text"
                  id="usernameInput"
                  v-model="name"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div class="signup__frame-3">
              <div class="signup__text-wrapper-2">Email</div>
              <div class="signup__textbox">
                <input
                  class="signup__overlap-group"
                  type="text"
                  id="emailInput"
                  v-model="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div class="signup__frame-3">
              <div class="signup__text-wrapper-2">Password</div>
              <div class="signup__textbox">
                <input
                  class="signup__overlap-group"
                  type="password"
                  id="passwordInput"
                  v-model="password"
                  placeholder="Enter your password"
                />
              </div>
              
            </div>
            <div class="signup__frame-4">
              <div class="signup__text-wrapper-2">Re-password</div>
              <div class="signup__textbox">
                <input
                  class="signup__overlap-group"
                  type="password"
                  id="repasswordInput"
                  v-model="repassword"
                  placeholder="Enter your re-password"
                />
              </div>
            </div>
            <button class="signup_button" type="submit">
              <div class="signup__text-wrapper-4">Sign Up</div>
            </button>
          </form>
          <div v-if="accountCreated !== null" class="message">
            {{ accountCreated ? 'Account created successfully!' : 'Account creation failed. Please check your information.' }}
          </div>
          <p class="signup__don-t-have-account">
            <span class="signup__span">Already have an account? </span>
            <router-link to="/login" class="signup__text-wrapper-5">Log in</router-link>
          </p>
        </div>
    <img class="signup__bookmundi" alt="Bookmundi" src="@/assets/bmlogo.webp" />
  </div>
</template>

<script>
import HomeNav from '@/components/HomeNav.vue';
import axios from 'axios';
import 'boxicons/css/boxicons.min.css';
export default {
  name: "SignUp",
  components: {
    HomeNav,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repassword:'',
      accountCreated: null,
      imageUrl: require(`@/assets/images/ice.jpg`),
    };
  },
  methods: {
    async signupform() {
    // Check if all fields are filled
    if (this.name && this.email && this.password && this.repassword) {
      // Check if the password meets certain criteria
      if (this.password.length >= 6) {
        // Check if the passwords match
        if (this.password === this.repassword) {
          // Check if the email is valid
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(this.email)) {
            // All conditions met, account can be created successfully
            this.accountCreated = true;
          } else {
            // Invalid email
            this.accountCreated = false;
          }
        } else {
          // Passwords don't match
          this.accountCreated = false;
        }
      } else {
        // Password is too short
        this.accountCreated = false;
      }
    } else {
      // Not all fields filled
      this.accountCreated = false;
    }

    // Now, you can perform additional actions based on the result
    if (this.accountCreated) {
      // Perform actions for successful account creation
      console.log('Account created successfully!');
    } else {
      // Perform actions for failed account creation
      console.log('Account creation failed. Please check your information.');
    }
    axios.post('http://localhost:8000/api/register', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
            .then(() => {
          // Handle success, e.g., set accountCreated to true
          this.accountCreated = true;
        })
        .catch((error) => {
          // Handle error, e.g., set accountCreated to false
          this.accountCreated = false;

          // Log the error details
          console.error('API Request Error:', error.response?.data || error.message);
        });
  },
},
};
</script>

<style>
.signupage{
  position: relative;
}

.signup__frame {
  height: 800px;
  position: absolute;
  width: 600px;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -300px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 600px) {
  .signupage {
    width: 100%; /* Adjust as needed */
    max-height: 600px; /* Adjust the max-height value as needed */
  }
}

.signup__frame-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  left: 140px;
  position: absolute;
  top: 160px;
  width: 350px;
  stroke: none;
}

.signup__welcomeback {
  height: 75px;
  position: relative;
  width: 314px;
}

.signup__text-wrapper {
  color: #000000;
  font-family: "Inter-Bold", Helvetica;
  font-size: 30px;
  font-weight: 700;
  height: 36px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.signup__p {
  color: #696f79;
  font-family: "Inter-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  height: 15px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
}

.form{
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
}
.signup__frame-3 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 135px;
}

.signup__text-wrapper-2 {
  color: #696f79;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.signup__textbox {
  height: 36px;
  margin-right: -2px;
  position: relative;
  width: 352px;
}

.signup__overlap-group {
  background-color: #ffffff;
  margin-top: -1px;
  border: 1px solid;
  border-color: #696f79;
  border-radius: 4px;
  height: 36px;
  position: relative;
  width: 350px;
  outline: none;
}

.signup__overlap-group::placeholder{
  color: #d2d2d2;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 19px;
  left: 11px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 8px;
  white-space: nowrap;
}

.signup__text-wrapper-3 {
  color: #d2d2d2;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 19px;
  left: 11px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 8px;
  white-space: nowrap;
}

.signup__frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.signup__icons-bx-low-vision {
  height: 16px;
  left: 321px;
  position: absolute;
  top: 41px;
  width: 16px;
}

.signup_button {
  display: flex;
padding: 8px 148px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 4px;
background: #3EB368;
box-shadow: 0px 4px 4px 0px rgba(62, 179, 104, 0.40);
border: none;
}

.signup__text-wrapper-4 {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.signup__don-t-have-account {
  color: transparent;
  font-family: "Inter-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.signup__span {
  color: #696f79;
}

.signup__text-wrapper-5 {
  color: #3eb368;
}

.signup__bookmundi {
  height: 36px;
  left: 230px;
  object-fit: cover;
  position: absolute;
  top: 80px;
  width: 178px;
}

.signup__rectangle {
  height: 1024px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 720px;

  .message {
    margin-top: 10px;
    color: #333;
    font-weight: bold;
  }

  .signup__textbox {
    position: relative;
  }
  
  .bx {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
