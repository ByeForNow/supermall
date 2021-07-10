<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper'


import home from "network/home.js";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data(){
      return {
        banners:[]
      }
    },
    computed: {
      showGoods() {
        
      }
    },
    created() {
      // 组件加载完成后，加载数据。
      this.getHomeMultidata();
    },
    methods: {
      getHomeMultidata() {
        var a = home.getHomeMultidata()
          .then(res => {
            console.log(res)
            this.banners = res;
          })
          .catch(res => {
            console.log(res)
          });

      },
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
