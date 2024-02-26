<template>
  <div class="loginpage">
    <!-- Include the HomeNav component -->
    <HomeNav />
  </div>
      <div class="login__frame">
        <div class="login__frame-2">
          <div class="login__welcomeback">
            <div class="login__text-wrapper">Welcome back! <br>
              <p class="login__p">Enter your email and password to login our dashboard.</p>
            </div>
          </div>
          <form @submit.prevent="login" class="form" method="post">
          <div class="login__frame-3">
            <div class="login__text-wrapper-2">Email</div>
            <div class="login__textbox">
              <input
                    class="login__overlap-group"
                    type="text"
                    id="text"
                    v-model="email"
                    placeholder="Enter your email"
                  />
            </div>
          </div>
          <div class="login__frame-4">
            <div class="login__text-wrapper-2">Password</div>
            <div class="login__textbox">
                  <input
                    class="login__overlap-group"
                    type="password"
                    id="password"
                    v-model="password"
                    placeholder="Enter your password"
                  />
            </div>
          </div>
          <p class="login__don-t-have-account">
            <span class="login__span"></span>
            <router-link to="/forgotpassword" class="login__text-wrapper-5">Forgot password?</router-link>
          </p>
          <button class="login_button" type="submit">
            <div class="login__text-wrapper-4">Log in</div>
          </button>
          <p class="login__don-t-have-account">
            <span class="login__span"> Don't have an account?</span>
            <router-link to="/signup" class="login__text-wrapper-5"> Signup?</router-link>
          </p>
        </form>
        </div>
        <img class="login__bookmundi" alt="Bookmundi" src="@/assets/bmlogo.webp" />
      </div>
</template>

<script>
import HomeNav from '@/components/HomeNav.vue';
import router from '@/router';
import axios from 'axios';
import 'boxicons/css/boxicons.min.css';

export default {
  name: "LoginForm",
  components: {
    HomeNav,
  },
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:8000/api/login', {
        email: this.email,
        password: this.password,
      })
      .then(response => {
        console.log(response.data);
        if (response.data.message === 'Login successful') {
          router.push('/dashboard');
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        window.alert('Error! Check your information!');
        // Handle the error, display a message, etc.
      });
    },
  },
};
</script>

<style>
.loginpage{
  position: relative;
}

.login__frame {
  height: 600px;
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
  .loginpage {
    width: 100%; /* Adjust as needed */
    max-height: 600px; /* Adjust the max-height value as needed */
  }
}

.form{
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
}

.login__frame-2 {
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

.login__welcomeback {
  height: 75px;
  position: relative;
  width: 314px;
}

.login__text-wrapper {
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

.login__p {
  color: #696f79;
  font-family: "Inter-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  height: 15px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 48px;
}

.login__frame-3 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 135px;
}

.login__text-wrapper-2 {
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

.login__textbox {
  height: 36px;
  margin-right: -2px;
  position: relative;
  width: 352px;
}

.login__overlap-group {
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

.login__overlap-group::placeholder{
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

.login__text-wrapper-3 {
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

.login__frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.login__icons-bx-low-vision {
  height: 16px;
  left: 321px;
  position: absolute;
  top: 41px;
  width: 16px;
}

.login_button {
  display: flex;
  padding: 8px 156px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #3EB368;
  box-shadow: 0px 4px 4px 0px rgba(62, 179, 104, 0.40);
  border: none;
}

.login__text-wrapper-4 {
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

.login__don-t-have-account {
  color: transparent;
  font-family: "Inter-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.login__span {
  color: #696f79;
}

.login__text-wrapper-5 {
  color: #3eb368;
}

.login__bookmundi {
  height: 36px;
  left: 230px;
  object-fit: cover;
  position: absolute;
  top: 80px;
  width: 178px;
}

</style>
