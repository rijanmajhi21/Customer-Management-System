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
            <div class="customer-information-container">
                <div class="sub-title">General Information</div>
                <div class="customerr-table">
                    <div class="column-headers">
                        <div class="header">Customer ID</div>
                        <div class="header">Name</div>
                        <div class="header">Email</div>
                        <div class="header">Phone number</div>
                        <div class="header">Address</div>
                        <div class="header">Created at</div>
                    </div>
                    <div class="customer-infoo" v-for="customer in customer" :key="customer.cus_id">
                        <div class="info">{{ customer.cus_id }}</div>
                        <div class="info">{{ customer.customer_name }}</div>
                        <div class="info">{{ customer.email }}</div>
                        <div class="info">{{ customer.phone_no }}</div>
                        <div class="info">{{ customer.address }}</div>
                        <div class="info">{{ formatCreatedAt(customer.created_at) }}</div>
                    </div>
                </div>
                <div class="sub-title">Booking and Tour Information</div>
                <div class="booking-tour">
                <div class="bookingg-table">
                    <div class="column-headers">
                        <div class="header">Tour ID</div>
                        <div class="header">Duration</div>
                        <div class="header">Booking Date</div>
                        <div class="header">Price</div>
                        <div class="header">Discount Percentage</div>
                        <div class="header">Total Price</div>
                    </div>
                    <div class="boooking-info">
                        <div class="info">{{ firstBooking.tour_id }}</div>
                        <div class="info">{{ firstBooking.duration }}</div>
                        <div class="info">{{ firstBooking && firstBooking.created_at ? firstBooking.created_at.slice(0, 19) : '' }}
                        </div>
                        <div class="info">${{ firstBooking.amount }}</div>
                        <div class="info">{{ firstBooking.dis_amount }}%</div>
                        <div class="info">${{ firstBooking.total }}</div>
                    </div>
                </div>
                <div class="tourr-table">
                    <div class="toour-headers" >
                        <div class="tour-header">Tour ID</div>
                        <div class="tour-header">Tour Title</div>
                        <div class="tour-header">Operator</div>
                        <div class="tour-header">Tour Type</div>
                        <div class="tour-header">Price</div>
                    </div>
                    <div class="toour-info">
                        <div class="info">{{ firstTour.tour_id }}</div>
                        <div class="info">{{ firstTour.tour_title }}</div>
                        <div class="info">{{ firstTour.operator }}</div>
                        <div class="info">{{ firstTour.tour_type }}</div>
                        <div class="info">${{ firstTour.price }}</div>
                    </div>
                </div>
            </div>
            <div class="booking-tour" v-if="bookings.length>1">
                <div class="bookingg-table">
                    <div class="column-headers">
                        <div class="header">Tour ID</div>
                        <div class="header">Duration</div>
                        <div class="header">Booking Date</div>
                        <div class="header">Price</div>
                        <div class="header">Discount Percentage</div>
                        <div class="header">Total Price</div>
                    </div>
                    <div class="boooking-info">
                        <div class="info">{{ secondBooking.tour_id }}</div>
                        <div class="info">{{ secondBooking.duration }}</div>
                        <div class="info">{{ secondBooking && secondBooking.created_at ? secondBooking.created_at.slice(0, 19) : '' }}</div>
                        <div class="info">${{ secondBooking.amount }}</div>
                        <div class="info">{{ secondBooking.dis_amount }}%</div>
                        <div class="info">${{ secondBooking.total }}</div>
                    </div>
                </div>
                <div class="tourr-table">
                    <div class="toour-headers" >
                        <div class="tour-header">Tour ID</div>
                        <div class="tour-header">Tour Title</div>
                        <div class="tour-header">Operator</div>
                        <div class="tour-header">Tour Type</div>
                        <div class="tour-header">Price</div>
                    </div>
                    <div class="toour-info">
                        <div class="info">{{ secondTour.tour_id }}</div>
                        <div class="info">{{ secondTour.tour_title }}</div>
                        <div class="info">{{ secondTour.operator }}</div>
                        <div class="info">{{ secondTour.tour_type }}</div>
                        <div class="info">${{ secondTour.price }}</div>
                    </div>
                </div>
            </div>
            <div class="booking-tour" v-if="bookings.length>2">
                <div class="bookingg-table">
                    <div class="column-headers">
                        <div class="header">Tour ID</div>
                        <div class="header">Duration</div>
                        <div class="header">Booking Date</div>
                        <div class="header">Price</div>
                        <div class="header">Discount Percentage</div>
                        <div class="header">Total Price</div>
                    </div>
                    <div class="boooking-info">
                        <div class="info">{{ thirdBooking.tour_id }}</div>
                        <div class="info">{{ thirdBooking.duration }}</div>
                        <div class="info">{{ thirdBooking && thirdBooking.created_at ? thirdBooking.created_at.slice(0, 19) : '' }}</div>
                        <div class="info">${{ thirdBooking.amount }}</div>
                        <div class="info">{{ thirdBooking.dis_amount }}%</div>
                        <div class="info">${{ thirdBooking.total }}</div>
                    </div>
                </div>
                <div class="tourr-table">
                    <div class="toour-headers" >
                        <div class="tour-header">Tour ID</div>
                        <div class="tour-header">Tour Title</div>
                        <div class="tour-header">Operator</div>
                        <div class="tour-header">Tour Type</div>
                        <div class="tour-header">Price</div>
                    </div>
                    <div class="toour-info">
                        <div class="info">{{ thirdTour.tour_id }}</div>
                        <div class="info">{{ thirdTour.tour_title }}</div>
                        <div class="info">{{ thirdTour.operator }}</div>
                        <div class="info">{{ thirdTour.tour_type }}</div>
                        <div class="info">${{ thirdTour.price }}</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </template>
    
    <script>
    import axios from 'axios';
    export default {
        name: "CustomerInformation",
        data() {
        return {
            customerId: this.$route.params.customerId,
            customer: [],
            bookings: [],
            tourIds: [],
            tours: [],
            multipleBookings: false // Assuming you have a flag for multiple bookings
        };
        },
        computed: {
        firstBooking() {
            // Check if bookings array is not empty
            if (this.bookings.length > 0) {
                return this.bookings[0]; // Return the first booking
            } else {
                return {}; // Return an empty object if no bookings
            }
        },
        secondBooking() {
            // Check if bookings array is not empty
            if (this.bookings.length > 1) {
                return this.bookings[1]; // Return the first booking
            } else {
                return {}; // Return an empty object if no bookings
            }
        },
        thirdBooking() {
            // Check if bookings array is not empty
            if (this.bookings.length > 2) {
                return this.bookings[2]; // Return the first booking
            } else {
                return {}; // Return an empty object if no bookings
            }
        },
        firstTour() {
            // Check if bookings array is not empty
            if (this.tours.length > 0) {
                return this.tours[0]; // Return the first booking
            } else {
                return {}; // Return an empty object if no bookings
            }
        },
        secondTour() {
            // Check if bookings array is not empty
            if (this.tours.length > 1) {
                return this.tours[1]; // Return the first booking
            } else {
                return {}; // Return an empty object if no bookings
            }
        },
        thirdTour() {
            // Check if bookings array is not empty
            if (this.tours.length > 2) {
                return this.tours[2]; // Return the first booking
            } else {
                return {}; // Return an empty object if no bookings
            }
        }
        },
        mounted() {
            console.log(this.customerId)
            this.fetchCustomerInfo();
            this.fetchBookingInfo();
        },
        methods: {
            async fetchCustomerInfo() {
                try {
                    const response = await axios.get(`http://localhost:8000/api/customersview/${this.customerId}`);
                    this.customer = response.data;
                    console.log(response)
                } catch (error) {
                    console.error('Error fetching customer information:', error);
                }
        },
        async fetchBookingInfo() {
            try {
                const response = await axios.get(`http://localhost:8000/api/bookingsview/${this.customerId}`);
                this.bookings = response.data;
                this.multipleBookings = this.bookings.length > 1;

                // Extract tour_ids from bookings
                const tourIds = this.bookings.map(booking => booking.tour_id);

                // Ensure tourIds is always an array
                const iterableTourIds = Array.isArray(tourIds) ? tourIds : [tourIds];

                // Fetch tour data based on tourIds
                await this.fetchTourData(iterableTourIds);
            } catch (error) {
                console.error('Error fetching booking information:', error);
            }
        },
        async fetchTourData(tourIds) {
            try {
                // Fetch tour data for each tour_id and concatenate to tours array
                for (const tourId of tourIds) {
                const response = await axios.get(`http://localhost:8000/api/toursview/${tourId}`);
                this.tours.push(...response.data); // Concatenate the fetched tour data to the tours array
                }
            } catch (error) {
                    console.error('Error fetching tour data:', error);
            }
        },
        formatCreatedAt(timestamp) {
            const date = new Date(timestamp);
            return date.toISOString().slice(0, 19).replace("/", " ");
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

.customer-information-container {
    padding-top: 12px;
    display: flex;
    margin-top: 20px;
    padding-left: 20px;
    flex-direction: column;
    gap: 12px;
    border: solid 1px #bbbbbb;
    border-radius: 8px;
    width: 1200px;
    margin-left: 31px;
    height: 100%;
}

.sub-title{
    height: 20px;
    width: 300px;
    display: flex;
    font-size: 20px;
    color: #575757;
    font-weight: bold;
}

.customerr-table {
    display: flex;
}
.bookingg-table {
    display: flex;
}
.tourr-table {
    display: flex;
}

.column-headers {
    width: 200px; /* Adjust the width as needed */
    box-sizing: border-box;
    display: flex;
    flex-direction: column; /* Align headers vertically */
    text-align: left;
    color: #7a7a7a;
}

.header {
    font-weight: bold;
    padding: 10px;
}

.customer-infoo {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 300px;
    text-align: left;
    color: #8e8e8e;
}
.booking-tour{
    display: flex;
    flex-direction: row;
    gap: 20px;
    border: solid 1px #c5c5c5;
    margin-right: 16px;
    margin-bottom: 16px;
    border-radius: 4px;
}
.boooking-info {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 300px;
    text-align: left;
    color: #8e8e8e;
}

.toour-info {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 400px;
    text-align: left;
    color: #8e8e8e;
}

.info {
    padding: 10px;
}

.tour-header{
    font-weight: bold;
    padding: 10px;
    color: #8e8e8e;
}

.toour-headers {
    width: 100px; /* Adjust the width as needed */
    box-sizing: border-box;
    display: flex;
    flex-direction: column; /* Align headers vertically */
    text-align: left;
    color: #7a7a7a;
}
</style>
