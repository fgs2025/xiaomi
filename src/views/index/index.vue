<template>
  <div>
    <index></index>
    <banner></banner>
    <hear></hear>
    <navs></navs>
    <swiper></swiper>
    <channel></channel>
    <div class="main">
      <flashsale></flashsale>
      <advertisement-1></advertisement-1>
      <phone></phone>
      <advertisement-2></advertisement-2>
      <appliance></appliance>
      <advertisement-1></advertisement-1>
      <intelligent></intelligent>
      <advertisement-2></advertisement-2>
      <collocation></collocation>
      <advertisement-1></advertisement-1>
      <home-video></home-video>
      <site-footer></site-footer>
    </div>
  </div>
</template>

<script>
import siteFooter from "../../layout/site-footer/site-footer.vue";
import hear from "../../layout/hear/hear.vue";
import navs from "../../layout/nav/nav.vue";
import Advertisement1 from "./components/advertisement/advertisement1.vue";
import Advertisement2 from "./components/advertisement/advertisement2.vue";
import Appliance from "./components/appliance/appliance.vue";
import Banner from "./components/Banner/Banner.vue";
import Channel from "./components/channel/channel.vue";
import Collocation from "./components/Collocation/Collocation.vue";
import Flashsale from "./components/flashsale/flashsale.vue";
import HomeVideo from "./components/home-video/home-video.vue";
import Intelligent from "./components/intelligent/intelligent.vue";
import Phone from "./components/phone/phone.vue";
import Swiper from "./components/swiper/swiper.vue";
import index from "../../layout/right-nav/index.vue";
export default {
  components: {
    hear,
    navs,
    Advertisement1,
    Advertisement2,
    Swiper,
    Phone,
    Flashsale,
    Channel,
    Banner,
    Appliance,
    Intelligent,
    Collocation,
    HomeVideo,
    siteFooter,
    index
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;
}
</style>
