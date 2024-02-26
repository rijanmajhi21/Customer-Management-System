<template>
    <div class="customer-form">
        <div class="title">
            <div class="overlap-group">
              <div class="customers-wrapper">Customers</div>
            </div>
        </div>
      <div class="form-overview">
        <div class="buttons">
          <div class="back">
            <router-link to="/customers" class="back-wrapper">Back</router-link>
          </div>
        </div>
        <div  class="overlap">
          <form @submit.prevent="customerform" class="frame" method="post">
            <div class="div-2">
              <div class="text-wrapper-4">Enter Customer name</div>
              <input
                  class="textfield"
                  type="text"
                  id="customer"
                  v-model="customer"
                  placeholder="Enter customer name"
                />
            </div>
            <div class="div-2">
              <div class="text-wrapper-4">Enter email</div>
              <input
                  class="textfield"
                  type="text"
                  id="email"
                  v-model="email"
                  placeholder="customer@email.com"
                />
            </div>
            <div class="div-2">
              <div class="text-wrapper-4">Enter phone number</div>
              <input
                  class="textfield"
                  type="text"
                  id="number"
                  v-model="number"
                  placeholder="phone number"
                />
            </div>
            <div class="div-2">
              <div class="text-wrapper-4">Enter address</div>
              <input
                  class="textfield"
                  type="text"
                  id="address"
                  v-model="address"
                  placeholder="Enter address of customer"
                />
            </div>
            <div class="div-2">
              <div class="text-wrapper-4">Booking</div>
              <select class="textfield" id="booking" v-model="booking" @change="updateOptionsOrder">
                <option value="" disabled selected>Select</option>
                <option v-for="(option, index) in options" :key="index" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>
            <button class="save" type="submit">
              <div class="save-wrapper">Save</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: "CustomerForm",

    data() {
      return {
      customer: '',
      email: '',
      number: '',
      address: '',
      booking: '',
        options: [
          { value: 'New', label: 'New' },
          { value: 'Pending', label: 'Pending' },
          { value: 'Completed', label: 'Completed' },
          { value: 'Canceled', label: 'Canceled' },
          // Add more options as needed
        ],
      };
    },
    methods: {
      updateOptionsOrder() {
        const selectedOption = this.options.find(option => option.value === this.booking);
        const filteredOptions = this.options.filter(option => option.value !== this.booking);
        this.options = [selectedOption, ...filteredOptions];
      },
      customerform() {
      // Reset errors before validation

      // Check if there are any validation errors
      if (this.customer && this.email && this.number && this.address && this.booking) {
        // If no errors, proceed with saving
        this.save();
      }else{
        console.log('Form creation failed');
      }
      axios.post('http://localhost:8000/api/store-customer', {
        customer_name: this.customer,
        email: this.email,
        phone_no: this.number,
        address: this.address,
        booking: this.booking,
      })
      .then(response => {
        console.log(response.data);
        // window.alert('Success');
        // Handle success, e.g., show a success message or redirect
      })
      .catch(error => {
        console.error('Error storing customer:', error);
        window.alert('Error');
        // Handle the error, e.g., display an error message
      });
    },
    isValidEmail(email) {
      // Implement your email validation logic
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    isValidPhoneNumber(number) {
      // Implement your phone number validation logic
      return /^\d{10}$/.test(number);
    },
    save() {
      // Implement logic to save the form data
      console.log('Form saved successfully!');
      window.alert('Customer saved successfully!');
      this.$router.push('/customers');
    },
  },
};
  </script>
  
  <style>

  .customer-form .title {
    height: 60px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .customer-form .overlap-group {
    background-color: #f7f7f7;
    border-bottom-style: solid;
    border-color: #dbdbdb;
    border-bottom-width:1px ;
    height: 60px;
    position: relative;
  }
  
  .customer-form .customers-wrapper {
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
  
  .form-overview {
    position: absolute;
    top: 61px;
    width: 100%;
  }

  .buttons{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 31px;
  }

  .save{
    background-color: #3eb368;
    border-radius: 4px;
    height: 32px;
    position: relative;
    width: 100px;
    margin-right: 20px;
  }
  
  .save-wrapper{
    color: #ffffff;
    height: 21px;
    left: 16px;
    position: absolute;
    text-align: center;
    top: 5px;
    width:67px;
  }

  .back{
    background-color: #ffffff;
    border-radius: 4px;
    height: 32px;
    position: relative;
    width: 100px;
    border-width: 1px;
    border-color: #3eb368;
  }
  .back-wrapper{
  color: #3eb368;
  height: 21px;
  left: 16px;
  position: absolute;
  text-align: center;
  top: 5px;
  width:67px;
  }
  
  .customer-form .text-wrapper-3 {
    color: #3eb368;
    height: 19px;
    left: 29px;
    position: absolute;
    text-align: center;
    top: 5px;
    white-space: nowrap;
  }
  
  .customer-form .overlap {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #d3d3d3;
    border-radius: 8px;
    box-shadow: 0px 4px 4px #00000040;
    height: 580px;
    left: 32px;
    position: absolute;
    top: 80px;
    width: 630px;

  }
  
  .customer-form .frame {
    margin-left: 40px;
    flex-direction: column;
    gap: 20px;
    position: relative;
    top: 33px;
    display: flex;
  }
  
  .customer-form .div-2 {
    height: 76px;
    position: relative;
    width: 536px;
  }
  
  .customer-form .text-wrapper-4 {
    color: #8e8e8e;
    height: 13px;
    left: 0;
    position: absolute;
    top: 0;
    outline: none;
  }
  
  .customer-form .textfield {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #afafaf;
    border-radius: 8px;
    height: 48px;
    left: 0;
    position: absolute;
    top: 28px;
    width: 534px;
    outline: none;
  }
  
  .textfield::placeholder {
    color: #d6d6d6;
    height: 19px;
    left: 14px;
    position: absolute;
    top: 12px;
  }

  .textfield option {
    /* Your additional styles for the option elements */
    background-color: #fff; /* Background color */
    color: #333; /* Text color */
    padding: 5px 10px; /* Padding */
  }

  .error-message {
    color: red;
  }
  </style>
  