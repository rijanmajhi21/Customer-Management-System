<template>
    <div class="landing-page">
    <HomeNav />
    <div class="home-image">
        <img class="landing-image" src="@/assets/images/mountain.jpg" alt="Landing Image" />
        <div class="image-overlay">
            <h2>Welcome to Bookmundi Nepal</h2>
            <button>Explore Now</button>
        </div>
    </div>
    <div class="destination-wrapper">Top Destinations</div>
    <div class="destination-grid">
        <div class="destination-box">
            <img src="@/assets/Kathmandu.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Kathmandu</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/everest.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Mount Everest</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/pkra.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Pokhara</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/lumbini.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Lumbini</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/bktpur.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Bhaktapur</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/mstg.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Mustang</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/ghandruk.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Ghandruk</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/annapurna.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Annapurna</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/chitwan.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Chitwan</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/rara.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Rara Lake</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/manaslu.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Manaslu</p>
        </div>
        <div class="destination-box">
            <img src="@/assets/bandipur.jpg" alt="Destination 1" class="destination-image" />
            <p class="destination-name">Bandipur</p>
        </div>
    </div>
    <HomeFooter />
    </div>
</template>
    
<script>
import HomeFooter from '@/components/HomeFooter.vue';
import HomeNav from '@/components/HomeNav.vue';
    
export default {
    name: 'HomePage',
    components: {
    HomeNav,
    HomeFooter,
    },
}
</script>
    
<style scoped>
.landing-page {
    font-family: "Inter-Bold", Helvetica;
}
.home-image {
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

.destination-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns grid */
    gap: 20px; /* Gap between destination boxes */
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 80px;
    padding-bottom: 20px;
}
.destination-wrapper{
    color: #3d3d3d;
    font-family: "Inter-Medium", Helvetica;
    font-size: 24px;
    font-weight: bolder;
    font-weight: 500;
    height: 29px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    padding-top: 25px;
    margin-left: 45%;
}
.destination-box {
    padding-top: 60px;
    border-radius: 4px;
    padding: 20px;
}

.destination-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
}

.destination-name {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    font-weight: bolder;
    color: #3d3d3d;
}
</style>
    
