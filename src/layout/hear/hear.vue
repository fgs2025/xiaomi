<template>
  <div class="hear-wrap">
    <div class="hear">
      <hear-nav></hear-nav>
      <shopping></shopping>
      <info></info>
    </div>
  </div>
</template>

<script>
import hearNav from "./components/hear-nav.vue";
import Info from "./components/info.vue";
import Shopping from "./components/shopping.vue";
export default {
  components: { hearNav, Info, Shopping },
};
</script>

<style lang="less" scoped>
.hear-wrap {
  height: 40px;
  background-color: #333;
  .hear {
    width: 1226px;
    height: 100%;
    margin: 0 auto;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
  }
}
</style>
