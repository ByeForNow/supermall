<!--  -->
<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
//导入组件、js、第三方插件、json文件、图片文件等等


export default {
    name:'NavBar',
    //在components中注册组件
    components: {
    
    },
    //data里存放数据
    data() {
        return {
        
        };
    },
    //方法集合
    methods: {
    
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
    
    },
    //监听属性 类似于data概念
    computed: {}
}
</script>

<style scoped>
  .navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .center {
    flex: 1;
  }

  .left, .right {
    width: 60px;
  }

</style>
