<template>
  <div id="app">
    <router-view />
    <main-tab-bar/>
  </div>
</template>

<script>
// 此处使用了components别名。
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue"

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
