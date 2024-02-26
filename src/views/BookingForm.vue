<template>
    <div class="booking-form">
        <div class="title">
            <div class="overlap-group">
            <div class="booking-wrapper">Booking</div>
            </div>
            </div>
        <div class="form-overview">
        <div class="buttons">
            <div class="back">
            <router-link to="/bookings" class="back-wrapper">Back</router-link>
            </div>
        </div>
        <div  class="overlap">
            <form @submit.prevent="bookingform" class="frame" method="post">
            <div class="div-2">
                <div class="text-wrapper-4">Select customer Id</div>
                <select v-model="selectedCustomerId" @change="fetchCustomerName" class="dropdown" id="selectedCustomerId">
                    <option value="" disabled selected>Select Customer ID</option>
                    <option v-for="customerId in customerList" :key="customerId" :value="customerId">
                        {{ customerId }}
                    </option>
                </select>
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Name of the customer</div>
                <div class="textfield"><data class="customerdata">{{ customerName }}</data></div>
            </div>
            <div class="div-2">
            <div class="text-wrapper-4">Select the Tour Id</div>
                <select v-model="selectedTourId" @change="fetchTourInfo" class="dropdown" id="selectedTourId">
                    <option value="" disabled selected>Select Tour ID</option>
                    <option v-for="tourId in tourList" :key="tourId" :value="tourId">
                        {{ tourId }}
                    </option>
                </select>
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Duration of the tour</div>
                <div class="textfield"><data class="tourdata">{{ duration }}</data></div>
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Price of the tour ($US)</div>
                <div class="textfield"><data class="tourdata">{{ price }}</data></div>
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Enter discount percentage</div>
                <input
                    class="textfield"
                    type="text"
                    id="discount"
                    v-model="discount"
                    placeholder="Enter percentage of discount"
                />
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Total Price of the tour</div>
                <div class="textfield"><data class="tourdata">{{ total }}</data></div>
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
    name: "BookingForm",

    data() {
    return {
        selectedCustomerId: '',
        customerName:'',
        selectedTourId: '',
        duration: '',
        price: '',
        discount: '',
        total:'',
        tourList: [], // Array to store fetched tour data
        customerList: [], // Array to store fetched customer_id data
    };
    },
    mounted() {
        this.fetchTourIds();
        this.fetchCustomerIds();
    },
    methods: {
        calculateTotal() {
            const originalAmount = parseFloat(this.price) || 0;
            const discountPercentage = parseFloat(this.discount) || 0;

            if (discountPercentage >= 0 && discountPercentage <= 100) {
                const discountAmount = (originalAmount * discountPercentage) / 100;
                this.total = (originalAmount - discountAmount).toFixed(2);
                console.log(this.discountAmount);
            } else {
                // Handle invalid discount percentage
                this.total = originalAmount.toFixed(2);
            }
        },
        bookingform() {
        this.calculateTotal();
        this.submitFormDataToServer({ total: this.total });
    
        // If all validations pass, submit the form
        if (this.selectedCustomerId && this.selectedTourId && this.discount) {
        this.save();
        }else{
            console.log('Booking not saved!');
            window.alert('Check your information!');
        }
    },
    save(){
            console.log('Booking saved successfully!');
            window.alert('Booking saved successfully!');
            this.$router.push('/bookings');
        },


    // Submitting the form data to Laravel backend using Axios or any other HTTP library
    // Handling the server-side validation and processing on the Laravel side
    submitFormDataToServer() {
        axios.post('http://localhost:8000/api/submit-booking', {
            cus_id: this.selectedCustomerId,
            tour_id: this.selectedTourId,
            duration: this.duration,
            booking_by: this.customerName,
            amount: this.price,
            dis_amount: this.discount,
            total: this.total,
        })
        .then(response => {
        console.log(response.data);
        // window.alert('Success');
        // Handle success, e.g., show a success message or redirect
        })
        .catch(error => {
        console.error('Error recording booking:', error);
        window.alert('Error');
        // Handle the error, e.g., display an error message
        });
    },
    // Fetchig tour id in dropdown
    async fetchTourIds() {
        try {
            const response = await axios.get('http://localhost:8000/api/tour_ids');
            console.log('Response:', response.data);
            this.tourList = response.data.tourIds;
    }   catch (error) {
            console.error('Error fetching tour IDs:', error);
    }
    },

    // Fetchig customer id in dropdown
    async fetchCustomerIds() {
        try {
            const response = await axios.get('http://localhost:8000/api/customer_ids');
            console.log('Response:', response.data);
            this.customerList = response.data.customerIds;
    }   catch (error) {
            console.error('Error fetching customer IDs:', error);
    }
    },

    // Fetching customer name after choosing customr ID
    fetchCustomerName() {
        if (this.selectedCustomerId) {
        axios.get(`http://localhost:8000/api/get-customer-name/${this.selectedCustomerId}`)
            .then(response => {
                console.log('Customer Info Response:', response.data);
                // Check if customerInfo is null before accessing its properties
                if (response.data.customerInfo) {
                    this.customerInfo = response.data.customerInfo;
                    // Now you can access properties safely
                    this.customerName = this.customerInfo.customer_name;
                } else {
                    console.error('Customer information not found.');
                    window.alert('Customer information not found');
                }
            })
            .catch(error => {
                console.error('Error fetching customer information:', error);
                window.alert('Error fetching customer information');
            });
    }
    },
    fetchTourInfo() {
        if (this.selectedTourId) {
        axios.get(`http://localhost:8000/api/get-tour-info/${this.selectedTourId}`)
            .then(response => {
                console.log('Tour Info Response:', response.data);
                // Check if tourInfo is null before accessing its properties
                if (response.data.tourInfo) {
                    this.tourInfo = response.data.tourInfo;
                    // Now you can access properties safely
                    this.duration = this.tourInfo.duration;
                    this.price = this.tourInfo.price;
                    
                    // Calculate total based on the fetched data
                    this.calculateTotal();
                } else {
                    console.error('Tour information not found.');
                    window.alert('Tour information not found');
                }
            })
            .catch(error => {
                console.error('Error fetching tour information:', error);
                window.alert('Error fetching tour information');
            });
    }
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

.booking-form .overlap-group {
    background-color: #f7f7f7;
    border-bottom-style: solid;
    border-color: #dbdbdb;
    border-bottom-width:1px ;
    height: 60px;
    position: relative;
}

.booking-form .booking-wrapper {
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

.booking-form .text-wrapper-3 {
    color: #3eb368;
    height: 19px;
    left: 29px;
    position: absolute;
    text-align: center;
    top: 5px;
    white-space: nowrap;
}

    .booking-form .overlap {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #d3d3d3;
    border-radius: 8px;
    box-shadow: 0px 4px 4px #00000040;
    height: 800px;
    left: 32px;
    position: absolute;
    top: 80px;
    width: 1155px;
}

.booking-form .frame {
    margin-left: 40px;
    flex-direction: column;
    gap: 20px;
    position: relative;
    top: 33px;
    display: flex;
}

.booking-form .div-2 {
    height: 76px;
    position: relative;
    width: 536px;
}

.booking-form .text-wrapper-4 {
    color: #8e8e8e;
    height: 13px;
    left: 0;
    position: absolute;
    top: 0;
    outline: none;
}

.booking-form .textfield {
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

.booking-form .dropdown {
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
.textfield.a {
    color: #808080;
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

.textfield .customerdata{
    display: flex;
    padding-top: 10px;
    padding-left: 8px;
}

.textfield .tourdata{
    display: flex;
    padding-top: 10px;
    padding-left: 8px;
}
</style>
