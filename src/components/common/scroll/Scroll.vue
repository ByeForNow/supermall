<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//导入组件、js、第三方插件、json文件、图片文件等等
import BScroll from "better-scroll";

export default {
  name:'Scroll',
  //在components中注册组件
  components: {
    BScroll
  },
  //在props中对外暴露属性
  props: {
    probeType:{
      type:Number,
      default:0
    },
    pullUpload:{
      type:Boolean,
      default:false
    }
  },
  //data里存放数据
  data() {
    return {
      scroll: null,
      message:"到底了。"
    };
  },
  //方法集合
  methods: {
    
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    scrollToTop() {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpload
    });

    this.scroll.on("scroll",position => {
      this.$emit("scroll",position);
    });

    this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })

  },
}
</script>

<style scoped>

</style>