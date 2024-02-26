<template>
    <footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Kaskeli Tahara Marg, Lainchour-26</p>
        <p>Kathmandu, Nepal</p>
        <p>Email: bookmundinepal@gmail.com</p>
        <p>Phone: +9848006643</p>
        </div>
        <div class="footer-section2">
        <h3>Follow Us on</h3>
        <div class="social-icons">
            <a href="https://www.facebook.com/bookmundi/" target="_blank"><i class='bx bxl-facebook-square'></i></a>
            <a href="https://www.instagram.com/bookmundi/" target="_blank"><i class='bx bxl-instagram'></i></a>
            <a href="https://twitter.com/bookmundi" target="_blank"><i class='bx bxl-twitter'></i></a>
        </div>
        </div>
    </div>
    </footer>
</template>
<script>
import 'boxicons/css/boxicons.min.css';
export default{

}
</script>
<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 40px 0;
}
    
.footer-content {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 11%;
    margin-right: 11%;
}
    
.footer-section {
    flex: 1;
    text-align: left;
}

.footer-section2 {
    flex: 1;
    text-align: right;
}
    
.footer-section h3 {
    font-size: 20px;
    margin-bottom: 20px;
}
.footer-section2 h3 {
    font-size: 20px;
    margin-bottom: 20px;
}
    
.footer-section p {
    margin-bottom: 10px;
}
    
.social-icons {
    display: block;
    align-items: right;
}
    
.social-icons a {
    color: #fff;
    font-size: 24px;
    margin-left: 10px;
}
</style>
    
    