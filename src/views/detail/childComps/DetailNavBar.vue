<!--  -->
<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" />
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" class="title-item" :key="index"
                    :class="{ active : index === currentIndex }"
                    @click="titleClick(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
//导入组件、js、第三方插件、json文件、图片文件等等
import NavBar from "components/common/navbar/NavBar";

export default {
    name:'DetailNavBar',
    //在components中注册组件
    components: {
        NavBar
    },
    props: {
        
    },
    //data里存放数据
    data() {
        return {
            titles:["商品","参数","评论","推荐"],
            currentIndex:0    
        };
    },
    //方法集合
    methods: {
        titleClick(index){

            console.log(index)
            this.currentIndex = index;
        },
        backClick(){
            this.$router.go(-1);
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        
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

.back
{
    margin: 4px;
}

.title
{
    display:flex;
    font-size: 13px;
}

.title-item
{
    flex:1
}

.active
{
    color:red
}
</style>