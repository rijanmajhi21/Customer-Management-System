<template>
    <div class="edit-dialog">
        <div class="form">
            <!-- Customer information form -->
            <label for="customerName">Customer Details</label>
            <div class="edit-details">
                <label class="details-wrapper">Customer Id:</label>
                <input type="text" id="cus_id" v-model="editedCustomer.cus_id">
            </div>
            <div class="edit-details">
                <label class="details-wrapper">Name:</label>
                <input type="text" id="customer_name" v-model="editedCustomer.customer_name">
            </div>
            <div class="edit-details">
                <label class="details-wrapper">Email:</label>
                <input type="text" id="email" v-model="editedCustomer.email">
            </div>
            <div class="edit-details">
                <label class="details-wrapper">Phone no.:</label>
                <input type="text" id="ph_number" v-model="editedCustomer.phone_no">
            </div>
            <div class="edit-details">
                <label class="details-wrapper">Address:</label>
                <input type="text" id="address" v-model="editedCustomer.address">
            </div>
            <div class="edit-details">
                <label class="details-wrapper">Booking:</label>
                <select class="booking-dropdown" id="booking" v-model="editedCustomer.booking" @change="updateOptionsOrder">
                    <option value="" disabled selected>Select</option>
                    <option v-for="(option, index) in options" :key="index" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
            <!-- Buttons for saving or canceling changes -->
            <div class="button-edit">
                <div class="save-changes">
                    <button @click="saveChanges" class="button-change">Save</button>
                </div>
                <div class="cancel-changes">
                    <button @click="cancelChanges" class="button-change">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
    import axios from 'axios';

    export default {
    props: {
        customerData: Object, // Customer data to be edited
        },
        data() {
        return {
            editedCustomer: { ...this.customerData }, // Copy of customer data for editing
            options: [
            { value: 'New', label: 'New' },
            { value: 'Pending', label: 'Pending' },
            { value: 'Completed', label: 'Completed' },
            { value: 'Canceled', label: 'Canceled' },
        ],
        };
    },
    methods: {
        async saveChanges() {
            try {
                // Send a request to update customer data
                await axios.put(`http://localhost:8000/api/customers/${this.editedCustomer.id}`, this.editedCustomer);
                // Emit event to notify parent component that changes are saved
                this.$emit('changes-saved', this.editedCustomer);
            } catch (error) {
                console.error('Error saving changes:', error);
            }
        },
        cancelChanges() {
        // Emit event to cancel editing
        this.$emit('cancel');
        },
    },
};
</script>
    
<style scoped>
/* Styles for the edit dialog */
.edit-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    width: 500px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Style for input fields and buttons */
.form input{
    margin-bottom: 10px;
    width: 100%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

.booking-dropdown{
    margin-bottom: 10px;
    width: 85%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}
.button-edit{
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.save-changes,
.cancel-changes {
    background-color: #d3d3d3;
    border-radius: 4px;
    box-shadow: 2px 2px 4px #00000040;
    height: 32px;
    width: 97px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Style for labels */
.form label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.edit-details{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.details-wrapper{
    width: 160px;
    text-align: left;
}

.save-changes:hover{
    background-color: #3eb368;
    color: #ffffff;
}
.cancel-changes:hover{
    background-color: #3eb368;
    color: #ffffff;
}
</style>
