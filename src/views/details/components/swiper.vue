<template>
  <div
    class="img-box"
    :style="{
      backgroundImage: `url(${img_arr[0].img})`,
    }"
  >
    <!-- <div class="letf-btn"><i class="iconfont icon-zuo1"></i></div>
        <div class="right-btn">
          <i class="iconfont icon-mjiantou-copy"></i>
        </div>
        <div class="dian-box">
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
        </div> -->
  </div>
</template>

<script>
export default {
  props: ["img_arr"],
};
</script>

<style lang="less" scoped>
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
</style>
