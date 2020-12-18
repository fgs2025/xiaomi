<template>
  <div>
    <hear></hear>
    <navs></navs>
    <swiper></swiper>
    <home-hero-sub></home-hero-sub>
    <div class="main">
      <xm-plain-box></xm-plain-box>
      <advertisementone></advertisementone>
      <!-- <home-brick-box></home-brick-box> -->
      <phone></phone>
      <advertisementtwo></advertisementtwo>
    </div>
  </div>
</template>

<script>
// import HomeBrickBox from '../../components/home-brick-box.vue';
import hear from "../../layout/hear/hear.vue";
import navs from "../../layout/nav/nav.vue";
import Advertisementone from "./components/advertisementone.vue";
import Advertisementtwo from './components/advertisementtwo.vue';
import HomeHeroSub from "./components/home-hero-sub.vue";
import Phone from "./components/phone.vue";
import Swiper from "./components/swiper.vue";
import XmPlainBox from "./components/xm-plain-box.vue";
export default {
  components: {
    hear,
    navs,
    Swiper,
    HomeHeroSub,
    XmPlainBox,
    Advertisementone,
    Phone,
    Advertisementtwo,
    // HomeBrickBox,
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;
}
</style>
