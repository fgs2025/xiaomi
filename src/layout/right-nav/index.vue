<template>
  <div class="wrap">
    <div>
      <img src="@/assets/img/right-nav/gr.png" alt="" class="static" />
      <img src="@/assets/img/right-nav/gr-hover.png" alt="" class="hover" />
    </div>
    <div>
      <img src="@/assets/img/right-nav/gr.png" alt="" class="static" />
      <img src="@/assets/img/right-nav/gr-hover.png" alt="" class="hover" />
    </div>
    <div>
      <img src="@/assets/img/right-nav/gr.png" alt="" class="static" />
      <img src="@/assets/img/right-nav/gr-hover.png" alt="" class="hover" />
    </div>
    <div>
      <img src="@/assets/img/right-nav/gr.png" alt="" class="static" />
      <img src="@/assets/img/right-nav/gr-hover.png" alt="" class="hover" />
    </div>
    <div>
      <img src="@/assets/img/right-nav/gr.png" alt="" class="static" />
      <img src="@/assets/img/right-nav/gr-hover.png" alt="" class="hover" />
    </div>
    <div class="top">
      <img src="@/assets/img/right-nav/totop.png" alt="" class="static" />
      <img src="@/assets/img/right-nav/totop_hover.png" alt="" class="hover" />
    </div>
  </div>
</template>

<script>
export default {
mounted(){
  
}
};
</script>

<style lang="less" scoped>
.wrap {
  position: fixed;
  right: 70px;
  top: 50%;
  z-index: 10;
  div {
    width: 25px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    position: relative;
    img {
      width: 20px;
      height: 20px;
      position: absolute;
    }
    .hover {
      opacity: 0;
    }
    &:hover .hover {
      opacity: 1;
    }
  }
  .top {
    margin-top: 14px;
  }
}
</style>
