<template>
  <div class="wrap">
    <div>
      <img src="@/assets/img/right-nav/gr.png" alt="" class="static" />
      <img src="@/assets/img/right-nav/gr-hover.png" alt="" class="hover" />
    </div>
    <div>
      <router-link to="/user">
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png"
          alt=""
          class="static"
        />
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png"
          alt=""
          class="hover"
        />
      </router-link>
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
    <div class="top" v-if="menus" @click="top">
      <img src="@/assets/img/right-nav/totop.png" alt="" class="static" />
      <img src="@/assets/img/right-nav/totop_hover.png" alt="" class="hover" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
  methods: {
    menu() {
      if (document.documentElement.scrollTop >= 140) {
        this.menus = true;
      } else {
        this.menus = false;
      }
    },
    top() {
      document.documentElement.scrollTop = 0;
    },
  },
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
    a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
    justify-content: center;
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
