<template>
  <div>
    <el-row class="header">
      <el-col :span="8">
        <img src="@/assets/logo_1.png" alt="" class="logo">
      </el-col>
      <el-col :span="16" class="hidden-sm-and-down">右边</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    linkList() {
      this.$router.push({
        //核心语句
        path: "/list" //跳转的路径
      });
    }
  }
};
</script>
<style lang="scss" scoped type="text/css">
.header {
  background: $themeColor;
  color: #fff;
  height: 50px;
  padding: 0 10px;
  @include prefixer(box-shadow,0px 3px 5px #333333);
  display: flex;
  align-items: center;
  .logo{
    width: 50px;
  }
}
</style>
