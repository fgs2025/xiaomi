<template>
  <div>
    <hear></hear>
    <navs></navs>
    <swiper></swiper>
  </div>
</template>

<script>
import hear from "../../layout/hear/hear.vue";
import navs from '../../layout/nav/nav.vue';
import Swiper from './components/swiper.vue';

export default {
  components: {
    hear,
    navs,
    Swiper
  },
};
</script>

<style lang="less" scoped>
</style>
