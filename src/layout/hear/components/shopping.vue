<template>
  <div class="Shopping">
    <i class="iconfont icon-xiaomigouwuche"></i>
    购物车
    <span>（0）</span>
  </div>
</template>

<script>
export default {};
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
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #ff6700;
  }
}
</style>
