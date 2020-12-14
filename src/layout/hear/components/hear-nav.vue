<template>
  <div class="hear-nav">
    <div class="nav">小米商城</div>
    <div class="nav">MIUI</div>
    <div class="nav">loT</div>
    <div class="nav">云服务</div>
    <div class="nav">天星数科</div>
    <div class="nav">有品</div>
    <div class="nav">小爱开放平台</div>
    <div class="nav">企业团购</div>
    <div class="nav">资质证照</div>
    <div class="nav">协议规则</div>
    <div class="nav">
      下载app
      <div class="nav-hov">
        <img src="@/assets/img/download.png" alt="" width="90" height="90" />
        <span>小米商城APP</span>
      </div>
    </div>
    <div class="nav">智能生活</div>
    <div class="nav">Select Location</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.hear-nav {
  float: left;
  display: flex;
  align-items: center;
  color: #b0b0b0;
  .nav {
    line-height: 40px;
    font-size: 12px;
    cursor: pointer;
    position: relative;
    & + .nav {
      margin-left: 15px;
    }
    &:hover {
      color: #fff;
    }
    & + .nav::after {
      content: "";
      width: 1px;
      height: 16px;
      left: -7px;
      top: 13px;
      position: absolute;
      background-color: #424242;
    }
    .nav-hov {
      position: absolute;
      width: 125px;
      left: -50%;
      margin-left: -18px;
      box-shadow: 0 1px 5px #aaa;
      line-height: 1;
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        margin-top: 18px;
      }
      span {
        margin: 15px 0;
        font-size: 14px;
      }
      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        top: -5px;
        background-color: #fff;
        transform: rotate(-45deg)
      }
    }
  }
}
</style>
