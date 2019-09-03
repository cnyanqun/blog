<template>
  <div class="aaa">
    <el-button type="text" @click="linkList">文字按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {},
  methods: {
    linkList() {
      this.$router.push({
        //核心语句
        path: "/list", //跳转的路径
      });
    }
  }
};
</script>
<style lang="scss" scoped type="text/css">
  .aaa{
    background: $bg;
  }
</style>
