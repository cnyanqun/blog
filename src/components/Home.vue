<template>
  <div>
    <div class="header">
      <img src="@/assets/logo.png" alt class="logo" />
      <ul>
        <li>
          <a href="javascript:void(0)" class="active">首页</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="link">归档</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="link">关于</a>
        </li>
      </ul>
    </div>
    <div class="masthead">
      <div class="overlay"></div>
    </div>
    <div class="content">
      <div class="container" v-for="(item,index) in 10" :key="index">
        <a href="javascript:void(0)">
          <img src="@/assets/my_name.png" alt />
        </a>
      </div>
    </div>
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
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background: $themeColor;
  color: #fff;
  height: 50px;
  padding: 0 10px;
  @include prefixer(box-shadow, 0px 3px 5px #222);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 50px;
  }
  ul {
    @include clearfix;
    padding-right: 100px;
    li {
      float: left;
      %aStyle {
        font-size: 14px;
        padding: 0 10px;
        margin-left: 60px;
        position: relative;
        &::after {
          content: "";
          width: 100%;
          position: absolute;
          bottom: -15px;
          left: 0;
          height: 2px;
        }
      }
      .link {
        color: #fff;
        @extend %aStyle;
        &::after {
          opacity: 0;
          background: #fff;
          transition: all 0.3s;
        }
        &:hover {
          &::after {
            opacity: 1;
            bottom: -8px;
          }
        }
      }
      .active {
        @extend %aStyle;
        color: #e9cd4c;
        &::after {
          background: #e9cd4c;
          opacity: 1;
          bottom: -8px;
        }
      }
    }
  }
}
.masthead {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: url(../assets/masthead.jpg) no-repeat;
  background-attachment: fixed;
  background-position: 50% 0;
  background-size: cover;
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: #000;
    opacity: 0.4;
    z-index: -1;
  }
}
.content {
  position: relative;
  z-index: 3;
  height: 800px;
  .container {
    padding: 180px 0;
    text-align: center;
    a {
      display: inline-block;
    }
  }
}
</style>
