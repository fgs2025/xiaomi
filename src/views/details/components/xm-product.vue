<template>
  <div class="xm-product-box">
    <div class="xm-product">
      <div class="product-left">
        <span class="title">{{ title }}</span>
        <div class="con">
          <span>|</span>
          <span class="txt">小米10至尊纪念版</span>
          <span>|</span>
          <span class="txt">小米10青春版5G</span>
        </div>
      </div>
      <div class="product-right">
        <span class="txt">概述</span>
        <span class="shu">|</span>
        <span class="txt">F码通道</span>
        <span class="shu">|</span>
        <span class="txt">咨询客服</span>
        <span class="shu">|</span>
        <span class="txt">用户评价</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.xm-product-box {
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  // box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);i
  // transition: 0.5;
  .xm-product {
    width: 1226px;
    height: 63px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .product-left {
      display: flex;
      align-items: center;
      .title {
        font-size: 18px;
      }
      .con {
        font-size: 12px;
        margin-left: 10px;
        span {
          & + span {
            margin-left: 10px;
          }
        }
        .txt {
          cursor: pointer;
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
    .product-right {
      font-size: 14px;
      .shu {
        margin: 0 10px;
      }
      .txt {
        cursor: pointer;
        &:hover {
          color: #ff6700;
        }
      }
    }
  }
}
</style>
