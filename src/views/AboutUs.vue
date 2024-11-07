<template>
    <div class="aboutus-image">
        <img class="landing-image" src="@/assets/images/peace.png" alt="About Us" />
        <div class="image-overlay">
            <h2>About Us</h2>
        </div>
    </div>
    <div class="aboutus-wrapper">ABOUT US</div>
    <div class="aboutus-page">
        <div class="aboutus-content">
            <div class="image-container">
                <img src="@/assets/aboutus1.jpg" alt="Image 1" />
            </div>
            <div class="text-content">
                <h3>OVERVIEW</h3>
                <p>Bookmundi is a online travel booking portal where you effortlessly can book day tours, fixed group departures,
                    holidays and vacation packages around the country.
                    Today, booking the right tour or holiday package has become a time consuming and painful process.
                    Which tour operator is qualified? What's the right tour price? When you pay an upfront deposit to an unknown tour operator,
                    is your money safe? Are the reviews seen on a local operators website genuine?<br>
                    Bookmundi gives you a convenient and easy tour booking process by:<br>
                    
                        • Only offering tours delivered by qualified and licensed tour operators.<br>
                        • Offering tours that are carbon offset.<br>
                        • Giving you a Best Price Guarantee for all tours offered.<br>
                        • Giving you a safe way to pay for tours around the country.<br>
                        • Connecting you directly with a local travel expert, customised tour package, and local travel advice.<br>
                    </p>
            </div>
        </div>
        <div class="aboutus-content">
            <div class="text-content">
                <h3>WHY BOOKMUNDI</h3>
                <p>
                    <span>1. BEST PRICES</span><br>
                    Amazing travel experiences are priceless. However, knowing that you got the best price, makes them even better.
                    With a Best Price Guarantee on all tours, you always get the best deal on Bookmundi.<br><br>
                    <span>2. WIDE SELECTION OF TOURS</span><br>
                    Offering tours around the country and on all season,
                    allows you to easily find and book your favourite day tours and package tours across the country.
                </p>
            </div>
            <div class="image-container">
                <img src="@/assets/aboutus2.jpg" alt="Image 1" />
            </div>
        </div>
    </div>
</template>

<script scoped>

export default{
    name: 'AboutusPage',
    data(){
        
    }
}
</script>

<style>
.aboutus-image {
    height: 550px;
    overflow: hidden;
}
.landing-image {
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

.aboutus-page {
    display: flex;
    gap: 20px; /* Gap between destination boxes */
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 80px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.aboutus-wrapper{
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

.image-container {
    flex-basis: 100%; /* Adjust the width as needed */
    padding: 15px;
}

.text-content {
    flex-basis: 100%; /* Adjust the width as needed */
    padding: 15px;
    align-content: center;
    top: 10%
}


.text-content h3 {
    font-size: 20px;
    font-weight: bold;
}

.text-content span {
    font-size: 16px;
    font-weight: bold;
}

.text-content p {
    font-size: 16px;
    text-align: left;
    text-align: justify;
}

.aboutus-content{
    display: flex;
    flex-direction: row;
}

</style>
