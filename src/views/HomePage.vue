<template>
    <div class="landing-page">
    <HomeNav />
    <router-view></router-view>
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
</style>
    
