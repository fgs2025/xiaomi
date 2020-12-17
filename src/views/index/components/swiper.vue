<template>
  <div
    class="swiper-wrap"
    :style="{
      backgroundImage: `url(${img_arr[index].img})`,
    }"
  >
    <div class="letf-btn" @click="up()">&lt;</div>
    <div class="right-btn" @click="next()">&gt;</div>
    <div class="dian-box">
      <div
        :class="['dian', item.active ? 'active' : '']"
        v-for="(item, index) in img_arr"
        :key="index"
        @click="dian(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_arr: [
        {
          img: require("@/assets/img/swiper1.jpg"),
          active: true,
        },
        {
          img: require("@/assets/img/swiper2.jpg"),
          active: false,
        },
        {
          img: require("@/assets/img/swiper3.jpg"),
          active: false,
        },
        {
          img: require("@/assets/img/swiper4.jpg"),
          active: false,
        },
        {
          img: require("@/assets/img/swiper5.jpg"),
          active: false,
        },
      ],
      index: 0,
      pd: true,
    };
  },
  mounted() {
    this.atuo();
  },
  methods: {
    atuo() {
      this.timer = setTimeout(() => {
        if (this.index == this.img_arr.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
        this.atuo();
      }, 4000);
    },
    up() {
      if (this.pd==true) {
        this.pd = false;
        clearTimeout(this.timer);
        if (this.index == 0) {
          this.index = this.img_arr.length - 1;
        } else {
          this.index--;
        }
        setTimeout(() => {
          this.pd = true;
          this.atuo();
        }, 800);
      } else {
        return;
      }
    },
    next() {
      if (this.pd==true) {
        this.pd = false;
        clearTimeout(this.timer);
        if (this.index == this.img_arr.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
        setTimeout(() => {
          this.pd = true;
          this.atuo();
        }, 800);
      } else {
        return;
      }
    },
    dian(index) {
      clearTimeout(this.timer);
      this.index = index;
      this.atuo();
    },
  },

  watch: {
    index(val) {
      this.img_arr.forEach((row) => (row.active = false));
      this.img_arr[val].active = true;
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-wrap {
  width: 1226px;
  height: 460px;
  margin: 0 auto;
  background-size: cover;
  transition: all 0.5s;
  position: relative;
  cursor: pointer;
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
  }
  .letf-btn {
    left: 234px;
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
    right: 25px;
    bottom: 25px;
    .dian {
      width: 6px;
      height: 6px;
      border: 2px solid #fff;
      border-color: hsla(0, 0%, 100%, 0.3);
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      transition: all 0.1s;
      & + .dian {
        margin-left: 5px;
      }
      &:hover {
        background: hsla(0, 0%, 100%, 0.4);
        border-color: rgba(0, 0, 0, 0.4);
      }
    }
    .active {
      background: hsla(0, 0%, 100%, 0.4);
      border-color: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
