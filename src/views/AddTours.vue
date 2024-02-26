<template>
    <div class="addtour-form">
        <div class="title">
            <div class="overlap-group">
                <div class="addtours-wrapper">Add Tours</div>
            </div>
        </div>
        <div class="form-overview">
        <div class="buttons">
            <div class="back">
            <router-link to="/tours" class="back-wrapper">Back</router-link>
            </div>
        </div>
        <div  class="overlap">
            <form @submit.prevent="addtours" class="frame" method="post">
            <div class="div-2">
                <div class="text-wrapper-4">Enter Tour ID</div>
                <input
                    class="textfield"
                    type="text"
                    id="tourid"
                    v-model="tourid"
                    placeholder="Enter Tour ID"
                />
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Enter title of the tour</div>
                <input
                    class="textfield"
                    type="text"
                    id="title"
                    v-model="title"
                    placeholder="Enter title of the tour"
                />
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Duration</div>
                <select class="textfield" id="duration" v-model="duration" @change="updateOptionsOrder">
                <option value="" disabled selected>Select</option>
                <option v-for="(option, index) in options" :key="index" :value="option.value">
                    {{ option.label }}
                </option>
                </select>
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Tour Operator</div>
                <select class="textfield" id="operator" v-model="operator" @change="updateOptionssOrder">
                <option value="" disabled selected>Select</option>
                <option v-for="(option, index) in optionss" :key="index" :value="option.value">
                    {{ option.label }}
                </option>
                </select>
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Tour Type</div>
                <select class="textfield" id="tourtype" v-model="tourtype" @change="updateOptionsssOrder">
                <option value="" disabled selected>Select</option>
                <option v-for="(option, index) in optionsss" :key="index" :value="option.value">
                    {{ option.label }}
                </option>
                </select>
            </div>
            <div class="div-2">
                <div class="text-wrapper-4">Enter price of the tour</div>
                <input
                    class="textfield"
                    type="text"
                    id="price"
                    v-model="price"
                    placeholder="Enter price of the tour"
                />
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
    name: "AddTours",

    data() {
    return {
    tourid: '',
    title: '',
    duration: '',
        options: [
        { value: '1 day', label: '1 day' },
        { value: '2 days', label: '2 days' },
        { value: '3 days', label: '3 days' },
        { value: '4 days', label: '4 days' },
        { value: '5 days', label: '5 days' },
        { value: '6 days', label: '6 days' },
        { value: '7 days', label: '7 days' },
        { value: '8 days', label: '8 days' },
        { value: '9 days', label: '9 days' },
        { value: '10 days', label: '10 days' },
        { value: '11 days', label: '11 days' },
        { value: '12 days', label: '12 days' },
        { value: '13 days', label: '13 days' },
        { value: '14 days', label: '14 days' },
        { value: '15 days', label: '15 days' },
        { value: '16 days', label: '16 days' },
        { value: '17 days', label: '17 days' },
        { value: '18 days', label: '18 days' },
        { value: '19 days', label: '19 days' },
        { value: '20 days', label: '20 days' },
        { value: '21 days', label: '21 days' },
        { value: '22 days', label: '22 days' },
        { value: '23 days', label: '23 days' },
        { value: '24 days', label: '24 days' },
        { value: '25 days', label: '25 days' },
        { value: '26 days', label: '26 days' },
        { value: '27 days', label: '27 days' },
        { value: '28 days', label: '28 days' },
        { value: '29 days', label: '29 days' },
        { value: '30 days', label: '30 days' },
        { value: '30 days+', label: '30 days+' },
          // Add more options as needed
        ],
        operator: '',
        optionss: [
            { value: 'Himalayan Leisure, Inc.', label: 'Himalayan Leisure, Inc.' },
            { value: 'Unique Adventure International Pvt.Ltd', label: 'Unique Adventure International Pvt.Ltd' },
            { value: 'Nepal Echo Adventure Pvt.Ltd', label: 'Nepal Echo Adventure Pvt.Ltd' },
            { value: 'Buddha Treks and Expiditions', label: 'Buddha Treks and Expiditions' },
            { value: 'Sherpa Expiditions and Trekking Pvt Ltd', label: 'Sherpa Expiditions and Trekking Pvt Ltd' },
            { value: 'Eyes on Nepal Tours & Treks', label: 'Eyes on Nepal Tours & Treks' },
            { value: 'Breakfree Adventure Pvt Ltd', label: 'Breakfree Adventure Pvt Ltd' },
            { value: 'Unique Path Trekking & Expidition(P) LTD', label: 'Unique Path Trekking & Expidition(P) LTD' },
            { value: 'World Expeditions', label: 'World Expeditions' },
          // Add more options as needed
        ],
        tourtype: '',
        optionsss: [
            { value: 'Private Tour', label: 'Private Tour' },
            { value: 'Group Tour', label: 'Group Tour' },
            { value: 'Private and Group Tour', label: 'Private and Group Tour' },
            { value: 'Small Group Tour', label: 'Small Group Tour' },
          // Add more options as needed
        ],
    price:'',
    };
    },
    methods: {
    updateOptionsOrder() {
        const selectedOption = this.options.find(option => option.value === this.duration);
        const filteredOptions = this.options.filter(option => option.value !== this.duration);
        this.options = [selectedOption, ...filteredOptions];
    },
    updateOptionssOrder() {
        const selectedOption = this.optionss.find(option => option.value === this.operator);
        const filteredOptions = this.optionss.filter(option => option.value !== this.operator);
        this.optionss = [selectedOption, ...filteredOptions];
    },
    updateOptionsssOrder() {
        const selectedOption = this.optionsss.find(option => option.value === this.tourtype);
        const filteredOptions = this.optionsss.filter(option => option.value !== this.tourtype);
        this.optionsss = [selectedOption, ...filteredOptions];
    },
    addtours() {
      // Reset errors before validation
    this.errors = {};

      // Validate title
    if (!this.title.trim()) {
        this.errors.title = 'Please enter title.';
    }

      // Check if there are any validation errors
    if (Object.keys(this.errors).length === 0) {
        // If no errors, proceed with saving
        this.save();
    }else{
        console.log('tour creation failed');
    }
    axios.post('http://localhost:8000/api/store-tour', {
        tour_id: this.tourid,
        tour_title: this.title,
        duration: this.duration,
        price: this.price,
        operator: this.operator,
        tour_type: this.tourtype,
    })
    .then(response => {
        console.log(response.data);
        window.alert('Tour Added successfully');
        // Handle success, e.g., show a success message or redirect
        })
        .catch(error => {
        console.error('Error storing tour:', error);
        window.alert('Error');
        // Handle the error, e.g., display an error message
        });
    },
    save() {
      // Implement logic to save the form data
        console.log('Tour added successfully!');
        this.$router.push('/tours');
    },
},
};
</script>

<style>

.addtour-form .title {
    height: 60px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.addtour-form .overlap-group {
    background-color: #f7f7f7;
    border-bottom-style: solid;
    border-color: #dbdbdb;
    border-bottom-width:1px ;
    height: 60px;
    position: relative;
}

.addtour-form .addtours-wrapper {
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

.addtour-form .text-wrapper-3 {
    color: #3eb368;
    height: 19px;
    left: 29px;
    position: absolute;
    text-align: center;
    top: 5px;
    white-space: nowrap;
}

.addtour-form .overlap {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #d3d3d3;
    border-radius: 8px;
    box-shadow: 0px 4px 4px #00000040;
    height: 700px;
    left: 32px;
    position: absolute;
    top: 80px;
    width: 630px;
}

.addtour-form .frame {
    margin-left: 40px;
    flex-direction: column;
    gap: 20px;
    position: relative;
    top: 33px;
    display: flex;
}

.addtour-form .div-2 {
    height: 76px;
    position: relative;
    width: 536px;
}

.addtour-form .text-wrapper-4 {
    color: #8e8e8e;
    height: 13px;
    left: 0;
    position: absolute;
    top: 0;
    outline: none;
}

.addtour-form .textfield {
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
    height: 20px;
}

.textfield select {
    max-height: 150px; /* Adjust the max height as needed */
    overflow-y: auto; /* Add a scrollbar if the options exceed max height */
}

</style>
