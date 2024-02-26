<template>
  <div id="app">
    <header>
      
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import 'swiper/swiper-bundle.min.css';
body {
  margin: 0;
  padding: 0;
  height: 600px; /* Set the height to a specific pixel value */
  background-color: #ffffff;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
