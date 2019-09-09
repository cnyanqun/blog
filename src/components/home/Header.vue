<template>
  <header id="mu-header" class role="banner">
    <div class="container">
      <nav class="navbar navbar-default mu-navbar">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <!-- Text Logo -->
            <!-- <a class="navbar-brand" href="#">Kevin</a> -->

            <!-- Image Logo -->
            <a class="navbar-brand" href="#"><img src="@/assets/images/logo_1.png" style="margin-top:-20px;"></a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav mu-menu navbar-right">
              <li>
                <a href="#">首页</a>
              </li>
              <!-- <li>
                <a href="#mu-about">关于</a>
              </li> -->
              <li>
                <a href="#mu-service">SERVICES</a>
              </li>
              <li>
                <a href="#mu-portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#mu-testimonials">TESTIMONIALS</a>
              </li>
              <li>
                <a href="#mu-contact">CONTACT</a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped type="text/css">
</style>
