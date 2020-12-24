<template>
  <div class="info">
    <div class="info-nav">
      <router-link to="/login"> 登录</router-link>
    </div>
    <div class="info-nav">注册</div>
    <div class="info-nav">消息通知</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.info {
  float: right;
  display: flex;
  color: #b0b0b0;
  font-size: 12px;
  .info-nav {
    line-height: 40px;
    position: relative;
    cursor: pointer;
    & + .info-nav {
      margin-left: 15px;
    }
    & + .info-nav::before {
      content: "";
      width: 1px;
      height: 16px;
      left: -7px;
      top: 13px;
      position: absolute;
      background-color: #424242;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
