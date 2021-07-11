<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll ref="scroll" style="height:710px; overflow:hidden" :pullUpload="true" @pullingUp="pullingUp"
      :probe-type="3" @scroll="scroll">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="backtopDisplay" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {HomeSwiper,RecommendView,FeatureView} from './childComps/index.js';
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop"

import home from "network/home.js";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
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
        currentType:"pop",
        backtopDisplay:false
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
      pullingUp(){
        this.getMoreGoods();
        this.$refs.scroll.finishPullUp();
      },
      backTopClick(){
        this.$refs.scroll.scrollToTop();
      },
      scroll(position){
        console.log(position);

        if(position.y<=-400){
          this.backtopDisplay = true;
        }else{
          this.backtopDisplay = false;
        }
      },
      getMoreGoods(){
        this.getHomeGoods(this.currentType);
      },
      getHomeMultidata() {
        var a = home.getHomeMultidata()
          .then(res => {
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
