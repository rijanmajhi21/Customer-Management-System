<template>
  <div class="admin-panel">
    <NavBar />
    <SideBar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'AdminLayout',
  components: {
    SideBar,
    NavBar,
  },
};
</script>

<style scoped>
.admin-panel {
  height: 100%;
  margin: 0;
  padding: 0;
}

.main-content {
  height: 900px;
  left: 221px;
  position: absolute;
  top: 60px;
  width: 85%;
}

@media (max-width: 768px) {
  .admin-panel {
    flex-direction: column;
  }
  
  .main-content {
    order: -1;
  }
}
</style>
