<template>
    <div class="contactus-image">
        <img class="contact-image" src="@/assets/images/peace.jpeg" alt="About Us" />
        <div class="image-overlay">
            <h2>ContactUs</h2>
        </div>
    </div>
    <div class="contactus-wrapper">Contact Us</div>
    <div class="contactus-page">
        <div class="contactus-content">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.9756118804042!2d85.31538754250369!3d27.720298111282762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193b330bff2f%3A0x7e30d64c5ce5e7ea!2sB.%20M.%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1709281302466!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="contact-content" method="post">
                <h3>CONTACT US</h3>
                <p>Please contact us for any questions by submitting your details below.</p>
                <form @submit.prevent="submitContactUsForm">
                    <div class="form-group">
                        <label for="full-name">Full Name:</label>
                        <input class="contact-textbox" v-model="fullname" type="text" id="fullname" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input class="contact-textbox" v-model="email" type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="destination">Destination:</label>
                        <input class="contact-textbox" v-model="destination" type="text" id="destination">
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject:</label>
                        <input class="contact-textbox" v-model="subject" type="text" id="subject" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea class="contact-textbox" v-model="message" id="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script scoped>
import axios from 'axios';

export default{
    name: 'ContactUsPage',
    data(){
        return{
            fullname: '',
            email: '',
            destination: '',
            subject: '',
            message: '',
        }
    },
    methods: {
        submitContactUsForm() {
            axios.post('http://localhost:8000/api/contact-us', {
                full_name: this.fullname,
                email: this.email,
                destination: this.destination,
                subject: this.subject,
                message: this.message,
            })
            .then(response => {
                console.log(response.data);
                window.alert('Data submitted successfully');
                this.$router.push('/homepage');
            })
            .catch(error => {
                console.error('Error submitting Contact Us form', error);
            });
        },
    }
}
</script>

<style>
.contactus-image {
    height: 550px;
    overflow: hidden;
}
.contact-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.image-overlay h2 {
    color: white;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
}

.image-overlay button {
    background-color: #3EB368;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.image-overlay button:hover {
    background-color: #2f8e5d;
}

.contactus-page {
    display: flex;
    gap: 20px; /* Gap between destination boxes */
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 80px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.contactus-wrapper{
    color: #3d3d3d;
    font-family: "Inter-Medium", Helvetica;
    font-size: 24px;
    font-weight: bolder;
    height: 29px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    padding-top: 25px;
    margin-left: 45%;
}

.map-container {
    flex-basis: 60%;
    padding: 15px;
}

.contact-content {
    flex-basis: 100%; /* Adjust the width as needed */
    padding: 15px;
    align-content: center;
    top: 10%
}


.contact-content h3 {
    font-size: 20px;
    font-weight: bold;
}

.contact-content span {
    font-size: 16px;
    font-weight: bold;
}

.contact-content p {
    font-size: 16px;
    text-align: left;
}

.contactus-content{
    display: flex;
    flex-direction: row;
}

.contact-content form {
    padding-top: 10px;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.contact-content .form-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}

.contact-content label {
    flex: 1;
    margin-right: 10px;
    text-align: left;
    outline: 1px #3EB368;
}

.contact-textbox {
    outline: none;
}


.contact-content input[type="text"],
.contact-content input[type="email"],
.contact-content textarea {
    flex: 2;
    width: calc(100% - 10px); /* Adjust based on label width and margin-right */
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.contact-content textarea {
    height: 100px;
}

.contact-content button {
    align-self: flex-end;
    background-color: #3eb368;
    color: #fff;
    padding: 6px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-content button:hover {
    background-color: #35a15e;
}

</style>
