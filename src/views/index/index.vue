<template>
  <div>
    <hear></hear>
    <navs></navs>
    <swiper></swiper>
    <channel></channel>
    <div class="main">
      <flashsale></flashsale>
      <advertisement-1></advertisement-1>
      <phone></phone>
      <advertisement-2></advertisement-2>
    </div>
  </div>
</template>

<script>
import hear from "../../layout/hear/hear.vue";
import navs from "../../layout/nav/nav.vue";
import Advertisement1 from "./components/advertisement/advertisement1.vue";
import Advertisement2 from "./components/advertisement/advertisement2.vue";
import Channel from './components/channel/channel.vue';
import Flashsale from "./components/flashsale/flashsale.vue";
import Phone from "./components/phone/phone.vue";
import Swiper from "./components/swiper/swiper.vue";

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
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;
}
</style>
