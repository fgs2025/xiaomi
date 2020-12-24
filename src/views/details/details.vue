<template>
  <div>
    <hear></hear>
    <navs></navs>
  </div>
</template>

<script>
import hear from "../../layout/hear/hear.vue";
import Navs from "../../layout/nav/nav.vue";
export default {
  mounted() {
    console.log(this.$route.query.sj);
  },
  components: { hear, Navs },
};
</script>

<style lang="less" scoped></style>
