<!--  -->
<template>
    <div>
        <detail-nav-bar />
    </div>
</template>

<script>
//导入组件、js、第三方插件、json文件、图片文件等等
import DetailNavBar from "./childComps/DetailNavBar.vue"

export default {
    name:'Detail',
    //在components中注册组件
    components: {
        DetailNavBar
    },
    //在props中对外暴露属性
    props: {
        
    },
    //data里存放数据
    data() {
        return {
            id:null
        };
    },
    //方法集合
    methods: {
        
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.id = this.$route.params.id;        
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped>

</style>