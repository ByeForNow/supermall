<template>
  <div class="wrapper" ref="aaaa">
    <div>
      这是category
      <ul class="content">
       
        <li>分类列表99</li>
        <li>分类列表100</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    // 组件创建完后调用
    mounted() {
     
    },
    methods: {
     
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
