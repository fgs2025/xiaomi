<template>
  <div class="advertisement-box">
    <slot name="img-box" />
    <!-- <img src="@/assets/img/dgg1.jpg" alt="" width="100%" /> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.advertisement-box {
  height: 120px;
  width: 1226px;
  margin: 22px auto;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
