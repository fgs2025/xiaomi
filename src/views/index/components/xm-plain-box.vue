<template>
  <div class="xm-plain-box">
    <div class="top">
      <span>小米闪购</span>
      <div class="btn-box">
        <div>&lt;</div>
        <div>&gt;</div>
      </div>
    </div>
    <div class="bottom">
      <count-down></count-down>
    </div>
  </div>
</template>

<script>
import countDown from './count-down.vue';
export default {
  components: { countDown },
  };
</script>

<style lang="less" scoped>
.xm-plain-box {
  width: 1226px;
  margin: 0 auto;
  .top {
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 22px;
    }
    .btn-box {
      display: flex;
      div {
        width: 36px;
        height: 24px;
        text-align: center;
        line-height: 22px;
        border: 1px solid #e0e0e0;
        font-size: 24px;
        font-weight: 800;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
  }
  .bottom {
  }
}
</style>
