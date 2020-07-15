<template>
  <div id="app">
    <routerView></routerView>
    <MainTabBar></MainTabBar>
  </div>
</template>

<style>
  @import "assets/css/base.css";
</style>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue';
export default {
  name:'App',
  components:{
    MainTabBar,
  }
}
</script>
