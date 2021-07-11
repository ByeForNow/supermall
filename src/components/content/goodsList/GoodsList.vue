<!--  -->
<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index" />
  </div>
</template>

<script>
//导入组件、js、第三方插件、json文件、图片文件等等
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "",
  //在components中注册组件
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  //data里存放数据
  data() {
    return {};
  },
  //方法集合
  methods: {}
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>