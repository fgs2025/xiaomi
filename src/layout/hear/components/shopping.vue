<template>
  <div class="Shopping">
    <i class="iconfont icon-xiaomigouwuche"></i>
    购物车
    <span>（0）</span>
    <div class="shop-hov">
      <span>购物车中还没有商品，赶紧选购吧！</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  &:hover .shop-hov {
    height: 100px;
  }
  .shop-hov {
    position: absolute;
    width: 316px;
    background-color: #fff;
    top: 40px;
    right: 0;
    height: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
    z-index: 3;
    cursor: auto;
    span {
      color: black;
    }
  }
}
</style>
