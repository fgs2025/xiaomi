<template>
  <div
    class="Shopping "
    @mouseenter="transform = true"
    @mouseleave="transform = false"
  >
    <i class="iconfont icon-xiaomigouwuche"></i>
    购物车
    <span>（0）</span>
    <div :class="['shop-hov', transform ? 'transform' : '']">
      <span>购物车中还没有商品，赶紧选购吧！</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transform: false,
    };
  },
};
</script>

<style lang="less" scoped>
.Shopping {
  float: right;
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #b0b0b0;
  background-color: #424242;
  transition: all 0.3s;
  margin-left: 15px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #ff6700;
  }
  .shop-hov {
    position: absolute;
    width: 316px;
    background-color: #fff;
    top: 40px;
    right: 0;
    height: 100px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
    transform-origin: 50% 0;
    transform: rotateX(90deg);
    z-index: 2;
    cursor: auto;
    span {
      color: black;
    }
  }
  .transform {
    transform: rotateX(0);
  }
}
</style>
