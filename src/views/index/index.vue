<template>
  <div>
    <hear></hear>
    <navs></navs>
    <swiper></swiper>
    <home-hero-sub></home-hero-sub>
    <xm-plain-box></xm-plain-box>
  </div>
</template>

<script>
import hear from "../../layout/hear/hear.vue";
import navs from '../../layout/nav/nav.vue';
import HomeHeroSub from './components/home-hero-sub.vue';
import Swiper from './components/swiper.vue';
import XmPlainBox from './components/xm-plain-box.vue';

export default {
  components: {
    hear,
    navs,
    Swiper,
    HomeHeroSub,
    XmPlainBox
  },
};
</script>

<style lang="less" scoped>
</style>
