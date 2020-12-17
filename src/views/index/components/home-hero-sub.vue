<template>
  <div class="home-hero-sub-wrap">
    <div class="left">
      <div class="box">
        <div>
          <img src="@/assets/img/icon1.png" alt="" width="24" height="24" />
          <p>小米秒杀</p>
        </div>
      </div>
      <div class="box">
        <div>
          <img src="@/assets/img/icon1.png" alt="" width="24" height="24" />
          <p>小米秒杀</p>
        </div>
      </div>
      <div class="box">
        <div>
          <img src="@/assets/img/icon1.png" alt="" width="24" height="24" />
          <p>小米秒杀</p>
        </div>
      </div>
      <div class="box">
        <div>
          <img src="@/assets/img/icon1.png" alt="" width="24" height="24" />
          <p>小米秒杀</p>
        </div>
      </div>
      <div class="box">
        <div>
          <img src="@/assets/img/icon1.png" alt="" width="24" height="24" />
          <p>小米秒杀</p>
        </div>
      </div>
      <div class="box">
        <div>
          <img src="@/assets/img/icon1.png" alt="" width="24" height="24" />
          <p>小米秒杀</p>
        </div>
      </div>
    </div>
    <div class="right">
        <div><img src="@/assets/img/gg1.jpg" alt="" width="100%"></div>
        <div><img src="@/assets/img/gg2.jpg" alt="" width="100%"></div>
        <div><img src="@/assets/img/gg3.jpg" alt="" width="100%"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home-hero-sub-wrap {
  width: 1226px;
  height: 170px;
  margin: 0 auto;
  margin-top: 14px;
  display: flex;
  margin-bottom: 20px;
  .left {
    width: 234px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding:0 3px;
    box-sizing: border-box;
    background-color: #5f5750;
    .box {
      width: 76px;
      height: 82px;
      font-size: 12px;
      padding: 0 3px;
      box-sizing: border-box;
      position: relative;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px ;
        cursor: pointer;
        opacity: 0.7;
        box-sizing: border-box;
        p {
          margin-top: 5px;
          color: #fff;
        }
        &:hover {
          opacity: 1;
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 70px;
        background: #665e57;
        left: 0;
        top: 6px;
      }
      &::before {
        content: "";
        position: absolute;
        background: #665e57;
        top: 3px;
        left: 6px;
        width: 64px;
        height: 1px;
      }
    }
  }
  .right{
      flex: 1;
      display: flex;
      margin-left: 14px;
      div{
          flex: 1;
          cursor: pointer;
          &+div{
              margin-left: 15px;
          }
      }
  }
}
</style>
