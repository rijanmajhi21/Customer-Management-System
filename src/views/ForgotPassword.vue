<template>
    <div class="forgot-password">
      <div class="forgot-password__div">
        <div class="forgot-password__frame">
          <div class="forgot-password__frame-2">
            <div class="forgot-password__welcomeback">
              <div class="forgot-password__text-wrapper">Forgot Password? <br>
                <p class="forgot-password__p">Enter your email to recover your password.</p>
              </div>
            </div>
            <form @submit.prevent="forgotpw" class="form" method="post">
            <div class="forgot-password__frame-3">
              <div class="forgot-password__text-wrapper-2">Email</div>
              <div class="forgot-password__textbox">
                <input
                      class="forgot-password__overlap-group"
                      type="text"
                      id="text"
                      v-model="email"
                      placeholder="Enter your email"
                    />
              </div>
            </div>
            <button class="forgot-password_button" type="submit">
              <div class="forgot-password__text-wrapper-4">Verify</div>
            </button>
          </form>
          </div>
          <img class="forgot-password__bookmundi" alt="Bookmundi" src="@/assets/bmlogo.webp" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import 'boxicons/css/boxicons.min.css';
  
  export default {
    name: "ForgotPassword",
    data() {
      return {
        email: '',
        password: '',
        message: '',
      };
    },
    methods: {
        forgotpw() {
            
      },
    },
  };
  </script>
  
  <style>
  .forgot-password {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @media (max-width: 800px) {
    .forgot-password {
      max-width: 1440px;
      padding: 10px;
    }
  }
  
  .forgot-password__div {
    background-color: #ffffff;
    height: 1024px;
    position: relative;
    width: 1440px;
  }
  
  .forgot-password__frame {
    background-color: #ffffff;
    height: 1024px;
    left: 360px;
    position: absolute;
    top: 0;
    width: 720px;
  }
  
  .form{
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
  }
  
  .forgot-password__frame-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 24px;
    left: 185px;
    position: absolute;
    top: 335px;
    width: 350px;
    stroke: none;
  }
  
  .forgot-password__welcomeback {
    height: 75px;
    position: relative;
    width: 314px;
    align-items: center;
  }
  
  .forgot-password__text-wrapper {
    color: #000000;
    font-family: "Inter-Bold", Helvetica;
    font-size: 30px;
    font-weight: 700;
    height: 36px;
    line-height: normal;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }
  
  .forgot-password__p {
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
  
  .forgot-password__frame-3 {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
    width: 135px;
  }
  
  .forgot-password__text-wrapper-2 {
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
  
  .forgot-password__textbox {
    height: 36px;
    margin-right: -2px;
    position: relative;
    width: 352px;
  }
  
  .forgot-password__overlap-group {
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
  
  .forgot-password__overlap-group::placeholder{
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
  
  .forgot-password__text-wrapper-3 {
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
  
  .forgot-password__frame-4 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }
  
  .forgot-password__icons-bx-low-vision {
    height: 16px;
    left: 321px;
    position: absolute;
    top: 41px;
    width: 16px;
  }
  
  .forgot-password_button {
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
  
  .forgot-password__text-wrapper-4 {
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
  
  .forgot-password__don-t-have-account {
    color: transparent;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
  }
  
  .forgot-password__span {
    color: #696f79;
  }
  
  .forgot-password__text-wrapper-5 {
    color: #3eb368;
  }
  
  .forgot-password__bookmundi {
    height: 36px;
    left: 271px;
    object-fit: cover;
    position: absolute;
    top: 269px;
    width: 178px;
  }
  
  </style>
  