<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
    <goods-list :goods="showGoods" />
    <input type="button" value="获取新数据" @click="getMoreGoods" />
    <ul>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {HomeSwiper,RecommendView,FeatureView} from './childComps/index.js';
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";


import home from "network/home.js";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          pop:{
            page:0,
            list:[]
          },
          new:{
            page:0,
            list:[]
          },
          default:{
            page:0,
            list:[]
          },
        },
        currentType:"pop"
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 获取图片
      this.getHomeMultidata();
      // 获取推荐数据
      this.getRecommends();
      // 获取推荐商品
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("default");
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'default'
            break
        }
      },
      getMoreGoods(){
        this.getHomeGoods(this.currentType);
      },
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
      getRecommends(){
        home.getRecommends()
          .then(res => {
            this.recommends = res.data.recommend.list;
          })
      },
      getHomeGoods(type){
        const page = this.goods[type].page;

        home.getHomeGoods(type,page)
          .then(res => {
            this.goods[type].page = page+1;
            this.goods[type].list.push(...res);
          })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
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
