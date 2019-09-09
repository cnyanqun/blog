<template>
  <section id="mu-featured-slider">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-featured-area">
            <h1><img src="@/assets/images/my_name.png" alt=""></h1>

            <!-- Start text slide -->
            <div class="mu-featured-slider-wrapper">
              <div class="mu-featured-slider" id="typed-strings">
                <p>
                  This is
                  <span ref="descStr"></span>
                </p>
              </div>
              <span id="typed"></span>
            </div>
            <!-- Start text slide -->

            <div class="mu-featured-content">
              <p>
                博学之，审问之，慎思之，明辨之，笃行之。
              </p>
              <a href="#mu-portfolio" class="mu-primary-btn view-my-work-btn">VIEW MY WORK</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Typed from "typed.js";
export default {
  data() {
    return {
      typedOptions: ["a blogs", "a self introduction", "a study note", "not just.."]
    };
  },
  methods: {
    //打字机typed.js插件
    typed() {
      const greeting = this.$refs.descStr;
      const typed = new Typed(greeting, {
        strings: this.typedOptions,
        typeSpeed: 80,
        loop: true,
        backDelay: 2000
      });
    }
  },
  mounted() {
    this.typed();
  }
};
</script>
<style lang="scss" scoped type="text/css">
</style>
