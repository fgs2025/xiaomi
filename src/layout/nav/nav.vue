<template>
  <div class="nav-wrap">
    <div
      class="logo-box"
      @mouseenter="transform = false"
      @mouseleave="transform = true"
    >
      <div :class="['mi-home', transform ? 'transform' : '']"></div>
      <div :class="['mi-logo', transform ? 'transform' : '']"></div>
    </div>
    <div class="nav-box">
      <div class="nav-category"><span>全部商品分类</span></div>
      <div class="nav-item">
        <span>小米手机</span>
      </div>
      <div class="nav-item"><span>Redmi红米</span></div>
      <div class="nav-item"><span>电视</span></div>
      <div class="nav-item"><span>笔记本</span></div>
      <div class="nav-item"><span>家电</span></div>
      <div class="nav-item"><span>路由器</span></div>
      <div class="nav-item"><span>智能硬件</span></div>
      <div class="nav-item"><span>服务</span></div>
      <div class="nav-item"><span>社区</span></div>
    </div>
    <search></search>
  </div>
</template>

<script>
import search from './components/search.vue';
export default {
  components: { search },
  data() {
    return {
      transform: true,
    };
  },
};
</script>

<style lang="less" scoped>
.nav-wrap {
  width: 1226px;
  height: 100px;
  // border: 1px solid red;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-box {
    width: 55px;
    height: 55px;
    cursor: pointer;
    display: flex;
    overflow: hidden;
    background-color: #ff6700;
    .mi-home {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
      background-image: url(../../assets/img/mi-home.png);
      background-position: center;
      transition: all 0.3s;
    }
    .mi-logo {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
      background-image: url(../../assets/img/mi-logo.png);
      background-position: center;
      transition: all 0.3s;
    }
    .transform {
      transform: translate(-100%);
    }
  }
  .nav-box {
    width: 850px;
    height: 100%;
    display: flex;
    // align-items: center;
    margin-left: 20px;
    padding-left: 20px;
    padding-top: 12px;
    box-sizing: border-box;
    .nav-category {
      margin-right: 25px;
      height: 88px;
      padding-top: 25px;
      box-sizing: border-box;
      span {
        cursor: pointer;
      }
    }
    .nav-item {
      height: 88px;
      padding-top: 25px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      position: relative;
      &:hover span {
        color: #ff6700;
      }
      span {
        cursor: pointer;
      }
      // & + .nav-item {
      //   margin-left: 15px;
      // }
    }
  }
}
</style>
