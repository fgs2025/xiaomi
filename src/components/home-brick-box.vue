<template>
  <div class="home-brick-box">
    <div class="top">
      <div class="title-box">
        <slot name="title"></slot>
      </div>
      <div class="more-box">
        <slot name="more"></slot>
      </div>
    </div>
    <div class="buttom">
      <div class="left-box">
        <slot name="left"></slot>
      </div>
      <div class="right-box">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home-brick-box {
  width: 1226px;
  // height: 686px;
  // border: 1px solid red;
  margin: 0 auto;

  .top {
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid red;
  }
  .buttom {
    height: 614px;
    display: flex;
    // border: 1px solid red;
    .left-box {
      width: 234px;
    }
    .right-box {
      margin-left: 14px;
      flex: 1;
    }
  }
}
</style>
