<template>
  <div class="info">
    <div class="title">
      <div class="overlap-group">
        <div class="info-wrapper">Customer Information</div>
      </div>
    </div>
    <div class="info-overview">
      <div class="buttons">
        <div class="back">
          <router-link to="/customers" class="back-wrapper">Back</router-link>
        </div>
      </div>
    <div class="customer-information">
      <div class="div">
        <div class="div-3">
          <div class="text-wrapper-3">General Information</div>
          <div class="div-2">
            <div class="text-wrapper-2">Customer Name: </div>
            <div class="text-wrapper-2">Customer ID: </div>
            <div class="text-wrapper-2">Email: </div>
            <div class="text-wrapper-2">Phone number: </div>
            <div class="text-wrapper-2">Address: </div>
            <div class="text-wrapper-2">Booking: </div>
            <div class="text-wrapper-2">Created at: </div>
          </div>
        </div>
        <div class="booking-information">
          <div class="text-wrapper-3">Booking Information</div>
          <div class="div-2" >
            <div class="text-wrapper-2">Tour id: </div>
            <div class="text-wrapper-2">Duration: </div>
            <div class="text-wrapper-2">Date: </div>
            <div class="text-wrapper-2">Amount: </div>
            <div class="text-wrapper-2">Discount Percentage: </div>
            <div class="text-wrapper-2">Total: </div>
          </div>
        </div>
        <div class="tour-information">
          <div class="text-wrapper-3">Tour Information</div>
          <div class="div-2">
            <div class="text-wrapper">Tour id:</div>
            <div class="text-wrapper-2">Tour Title:</div>
            <div class="text-wrapper-2">Duration:</div>
            <div class="text-wrapper-2">Operator:</div>
            <div class="text-wrapper-2">Tour Type:</div>
            <div class="text-wrapper-2">Price:</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "CustomerInfo",
  data() {
    return {
      selectedCustomer: null,
      selectedBooking: null,
    };
  },
  methods: {
    viewItem(customer, booking) {
      this.selectedCustomer = customer;
      this.selectedBooking = booking;
    },
  },
};
</script>

<style>

.info .title{
  height: 60px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.info .overlap-group{
  background-color: #f7f7f7;
  border-bottom-style: solid;
  border-color: #dbdbdb;
  border-bottom-width:1px ;
  height: 60px;
  position: relative;
}

.info .info-wrapper{
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

.info-overview {
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

.customer-information {
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 80px;
  box-shadow: 0px 4px 4px #00000040;
  border: 1px solid #3eb368;
  margin-left: 31px;
}

.customer-information .div {
  background-color: #ffffff;
  height: 842px;
  position: relative;
  width: 595px;
  margin-top: 20px;
  margin-left: 31px;
}

.customer-information .tour-information {
  height: 133px;
  left: 20px;
  position: absolute;
  top: 477px;
  width: 413px;
}

.customer-information .div-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 0;
  position: absolute;
  top: 49px;
  width: 411px;
}

.customer-information .text-wrapper {
  color: #686868;
  font-family: "Inter-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.customer-information .text-wrapper-2 {
  color: #686868;
  font-family: "Inter-Medium", Helvetica;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.customer-information .text-wrapper-3 {
  color: #686868;
  font-family: "Inter-Medium", Helvetica;
  font-size: 20px;
  font-weight: 500;
  height: 29px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.customer-information .booking-information {
  height: 179px;
  left: 20px;
  position: absolute;
  top: 266px;
  width: 413px;
}

.customer-information .div-3 {
  height: 202px;
  left: 20px;
  position: absolute;
  top: 32px;
  width: 413px;
}

.customer-information .text-wrapper-4 {
  color: #686868;
  font-family: "Inter-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 206px;
}
</style>
