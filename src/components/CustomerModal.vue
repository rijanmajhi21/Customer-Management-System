<template>
    <div class="modal" v-if="isModalVisible">
    <div class="customer-information">
        <div class="div">
            <div class="div-3">
            <div class="text-wrapper-3">General Information</div>
                <div class="div-2" v-for="selectedCustomer in selectedCustomer" :key="selectedCustomer.cus_id">
                    <div class="text-wrapper-2">Customer Name: {{ selectedCustomer.customer_name }}</div>
                    <div class="text-wrapper-2">Customer ID: {{ selectedCustomer.cus_id }}</div>
                    <div class="text-wrapper-2">Email: {{ selectedCustomer.email }}</div>
                    <div class="text-wrapper-2">Phone number: {{ selectedCustomer.phone_no }}</div>
                    <div class="text-wrapper-2">Address: {{ selectedCustomer.address }}</div>
                    <div class="text-wrapper-2">Booking: {{ selectedCustomer.booking }}</div>
                    <div class="text-wrapper-2">Created at: {{ formatCreatedAt(selectedCustomer.created_at) }}</div>
                </div>
            </div>
            <div class="booking-information" >
            <div class="text-wrapper-3">Booking Information</div>
                <div class="div-2" v-for="selectedCustomer in selectedCustomer" :key="selectedCustomer.tour_id" >
                    <div class="text-wrapper-2">Tour id: {{ selectedCustomer.tour_id }}</div>
                    <div class="text-wrapper-2">Duration: {{ selectedCustomer.duration }}</div>
                    <div class="text-wrapper-2">Date: {{ formatCreatedAt(selectedCustomer.created_at) }}</div>
                    <div class="text-wrapper-2">Amount: {{ selectedCustomer.amount }}</div>
                    <div class="text-wrapper-2">Discount Amount: {{ selectedCustomer.discount_amount }}</div>
                    <div class="text-wrapper-2">Total: {{ selectedCustomer.total }}</div>
                </div>
            </div>
        </div>
        <div class="close">
            <button class="close-wrapper" @click="close">Close</button>
        </div>
    </div>
    </div>
    </template>
    
    <script>
    
    export default {
    data() {
        return {

        };
    },

    props: {
    isModalVisible: Boolean,
    selectedCustomer: Object,
    onClose: Function,
    },
    methods:{
    created(){
        console.log(this.selectedCustomer);
    },
    formatCreatedAt(timestamp) {
        const date = new Date(timestamp);
        return date.toISOString().slice(0, 19).replace("T", " ");
    },
    close() {
        this.$emit('onClose');
    },
    }
};
</script>

<style>
.modal{
    justify-content: center;
}
.close{
    margin-left: 62px;
    margin-bottom: 31px;
    bottom: 12px;
    background-color: #ffffff;
    border-radius: 4px;
    height: 32px;
    position: relative;
    width: 100px;
    border-width: 1px;
    border-color: #3eb368;
}
.close-wrapper{
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
    top: 71px;
    box-shadow: 0px 4px 4px #00000040;
    border: 1px solid #3eb368;
    margin-left: 350px;
}

.customer-information .div {
    background-color: #ffffff;
    height: 550px;
    position: relative;
    width: 500px;
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

