<template>
  <tab-bar>
    <tab-bar-item link="/home">
    <!-- 在dom中使用路径别名要加~ -->
    <!-- 第一步建立tabbar，这个是主框架，也就是创建项目从最外层框架开始 -->
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
    import TabBar from 'common/tabbar/TabBar'
    import TabBarItem from 'common/tabbar/TabBarItem'

    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>
