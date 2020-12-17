<template>
  <div class="nav-wrap">
    <div class="wrap">
      <div
        class="logo-box"
        @mouseenter="transform = false"
        @mouseleave="transform = true"
      >
        <div :class="['mi-home', transform ? 'transform' : '']"></div>
        <div :class="['mi-logo', transform ? 'transform' : '']"></div>
      </div>
      <div class="nav-box">
        <div class="nav-category">
          <span v-if="this.$route.path != '/'">全部商品分类</span>
        </div>
        <div
          class="nav-item"
          v-for="(item, index) in nav"
          :key="index"
          @mouseenter="touch(index)"
          @mouseleave="leave()"
        >
          <span>{{ item.title }}</span>
        </div>
      </div>
      <search></search>
    </div>
    <div
      :class="['list-wrap', transforms ? 'transforms' : '']"
      @mouseenter="touch(index)"
      @mouseleave="leave()"
    >
      <div class="list-box">
        <div
          class="item"
          v-for="(item, index) in nav[index].commodity"
          :key="index"
        >
          <img :src="item.img" alt="" width="160" />
          <p class="title">{{ item.title }}</p>
          <p class="Price">{{ item.Price }}</p>
        </div>
      </div>
    </div>
    <category></category>
  </div>
</template>

<script>
import Category from "./components/category.vue";
import search from "./components/search.vue";
export default {
  components: { search, Category },
  data() {
    return {
      nav: [
        {
          title: "小米手机",
          commodity: [
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10至尊纪念版",
              Price: "5299元起",
            },
          ],
        },
        {
          title: "Redmi红米",
          commodity: [
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9纪念版",
              Price: "500元起",
            },
          ],
        },
        {
          title: "电视",
          commodity: [
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米0",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米纪念版",
              Price: "500元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小纪念版",
              Price: "500元起",
            },
          ],
        },
        {
          title: "笔记本",
          commodity: [
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10至尊纪念版",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
          ],
        },
        {
          title: "家电",
          commodity: [
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10至尊纪念版",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10至尊纪念版",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
          ],
        },
        {
          title: "路由器",
          commodity: [
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10至尊纪念版",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10至尊纪念版",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10至尊纪念版",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
          ],
        },
        {
          title: "智能硬件",
          commodity: [
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米10至尊纪念版",
              Price: "5299元起",
            },
            {
              img: require("@/assets/img/shouji1.png"),
              title: "小米9至尊纪念版",
              Price: "5000元起",
            },
          ],
        },
        {
          title: "服务",
        },
        {
          title: "社区",
        },
      ],
      transform: true,
      transforms: false,
      index: 0,
    };
  },
  methods: {
    touch(index) {
      clearTimeout(this.timers2);
      this.timers = setTimeout(() => {
        if (index <= 6) {
          this.transforms = true;
          this.index = index;
        } else {
          this.transforms = false;
        }
      }, 200);
    },
    leave() {
      clearTimeout(this.timers);
      this.timers2 = setTimeout(() => {
        this.transforms = false;
      }, 300);
    },
  },
};
</script>

<style lang="less" scoped>
.nav-wrap {
  position: relative;
  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1226px;
    margin: 0 auto;
    .logo-box {
      width: 55px;
      height: 55px;
      cursor: pointer;
      display: flex;
      overflow: hidden;
      background-color: #ff6700;
      .mi-home {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        background-image: url(../../assets/img/mi-home.png);
        background-position: center;
        transition: all 0.3s;
      }
      .mi-logo {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        background-image: url(../../assets/img/mi-logo.png);
        background-position: center;
        transition: all 0.3s;
      }
      .transform {
        transform: translate(-100%);
      }
    }
    .nav-box {
      width: 850px;
      height: 100%;
      display: flex;
      // align-items: center;
      margin-left: 20px;
      padding-left: 20px;
      padding-top: 12px;
      box-sizing: border-box;
      .nav-category {
        // margin-right: 25px;
        width: 120px;
        height: 88px;
        padding-top: 25px;
        box-sizing: border-box;
        text-align: center;
        span {
          cursor: pointer;
        }
      }
      .nav-item {
        height: 88px;
        padding-top: 25px;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        position: relative;
        &:hover span {
          color: #ff6700;
        }
        span {
          cursor: pointer;
        }
        // & + .nav-item {
        //   margin-left: 15px;
        // }
      }
    }
  }
  .list-wrap {
    position: absolute;
    width: 100%;
    // height: 229px;
    height: 0;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    // transform-origin: 50% 0;
    // transform: rotateX(90deg);
    transition: height 0.3s;
    z-index: 3;
    .list-box {
      width: 1226px;
      height: 100%;
      display: flex;
      align-items: center;
      margin: 0 auto;
      padding: 20px 0;
      box-sizing: border-box;
      .item {
        width: 180px;
        text-align: center;
        position: relative;
        cursor: pointer;
        img {
          margin-bottom: 16px;
        }
        .title,
        .Price {
          font-size: 12px;
        }
        .Price {
          margin-top: 5px;
          color: #ff6700;
        }
        & + .item::before {
          content: "";
          width: 1px;
          height: 110px;
          left: -15px;
          background-color: #e0e0e0;
          position: absolute;
        }
        & + .item {
          margin-left: 28px;
        }
      }
    }
  }
  .transforms {
    // transform: rotateX(0);
    height: 229px;
    border-top: 1px solid #e0e0e0;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
  }
}
</style>
