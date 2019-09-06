<template>
  <div>
    <Header />
    <section-slider />
    <main role="main">
      <section-about />
      <section-service />
      <section-portfolio />
      <section-testimonials />
      <section-contact />
    </main>
    <footer id="mu-footer" role="contentinfo">
      <div class="container">
        <div class="mu-footer-area">
          <p class="mu-copy-right">
            Copyright &copy; 2019.Company name All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "./home/Header";
import sectionSlider from "./home/SectionSlider";
import sectionAbout from "./home/SectionAbout";
import sectionService from "./home/SectionService";
import sectionPortfolio from "./home/SectionPortfolio";
import sectionTestimonials from "./home/SectionTestimonials";
import sectionContact from "./home/SectionContact";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/home/homeTheme/default-theme.css";
import "@/assets/styles/home/home.css";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    "section-slider": sectionSlider,
    "section-about": sectionAbout,
    "section-service": sectionService,
    "section-portfolio": sectionPortfolio,
    "section-testimonials": sectionTestimonials,
    "section-contact": sectionContact
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
</style>
