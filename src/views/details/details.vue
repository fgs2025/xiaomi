<template>
  <div>
    <hear></hear>
    <navs></navs>
    <div class="xm-product-box">
      <div class="xm-product">
        <div class="product-left">
          <span class="title">{{this.$route.query.sj.name}}</span>
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
    <div class="product-box">
      <div
        class="img-box"
        :style="{
          backgroundImage: `url(${this.$route.query.sj.img})`,
        }"
      >
        <div class="letf-btn"><i class="iconfont icon-zuo1"></i></div>
        <div class="right-btn">
          <i class="iconfont icon-mjiantou-copy"></i>
        </div>
        <div class="dian-box">
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
        </div>
      </div>
    </div>
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

<style lang="less" scoped>
.xm-product-box {
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
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
.product-box {
  width: 1226px;
  margin: 0 auto;
  padding-top: 32px;
  .img-box {
    width: 560px;
    height: 560px;
    position: relative;
    background-position: center;
    // background-image: url("../../assets/img/details/details1.jpg");
    background-size: cover;
    .letf-btn,
    .right-btn {
      width: 40px;
      height: 70px;
      font-size: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #a9a9ac;
      cursor: pointer;
      position: absolute;
      &:hover {
        background-color: rgba(112, 88, 56, 0.5);
        color: #fff;
      }
      i {
        font-size: 40px;
      }
    }
    .letf-btn {
      left: 0;
      top: 50%;
      transform: translatey(-50%);
    }
    .right-btn {
      right: 0;
      top: 50%;
      transform: translatey(-50%);
    }
    .dian-box {
      display: flex;
      position: absolute;
      right: 50%;
      transform: translatex(50%);
      bottom: 25px;
      .dian {
        width: 50px;
        border-radius: 0;
        border: 0;
        height: 3px;
        background: #ccc;
        cursor: pointer;
        transition: all 0.1s;
        & + .dian {
          margin-left: 5px;
        }
        &:hover {
          background: #a3a3a3;
        }
      }
      .active {
        background: #a3a3a3;
      }
    }
  }
}
</style>
