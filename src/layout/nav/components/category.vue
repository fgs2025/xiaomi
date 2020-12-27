<template>
  <div class="category-wrap" v-if="dis">
    <div class="category-box">
      <div class="category-left" @mouseenter="diss" @mouseleave="disx">
        <div
          :class="['item-title', item.active ? 'active' : '']"
          v-for="(item, index) in category_arr"
          :key="index"
          @mouseenter="display(index)"
          @mouseleave="hide"
        >
          <div>
            <span>{{ item.title }}</span>
            <span>{{ item.titles }}</span>
          </div>
          <i class="iconfont icon-mjiantou-copy"></i>
        </div>
      </div>

      <div
        class="category-right"
        v-if="show"
        @mouseenter="display(index)"
        @mouseleave="hide"
        :style="{
          width: widths + 'px',
        }"
      >
        <div
          class="item"
          v-for="(item, index) in category_arr[index].commodity"
          :key="index"
        >
          <img :src="item.img" alt="" width="40" height="40px" />
          <span>{{ item.c_title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category_arr: [
        {
          title: "手机",
          titles: "电话卡",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
          ],
        },
        {
          title: "电视",
          titles: "盒子",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
          ],
        },
        {
          title: "笔记本",
          titles: "显示器",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
          ],
        },
        {
          title: "家电",
          titles: "插线板",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
          ],
        },
        {
          title: "出行",
          titles: "穿戴",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
          ],
        },
        {
          title: "智能",
          titles: "路由器",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
          ],
        },
        {
          title: "电源",
          titles: "配件",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
          ],
        },
        {
          title: "健康",
          titles: "儿童",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
          ],
        },
        {
          title: "耳机",
          titles: "音箱",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊纪念版",
            },
          ],
        },
        {
          title: "生活",
          titles: "箱包",
          active: false,
          commodity: [
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至念版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米1尊版",
            },
            {
              img: require("@/assets/img/nav/fl1.png"),
              c_title: "小米10至念版",
            },
          ],
        },
      ],
      show: false,
      index: 0,
      width: 265,
      widths: 0,
      dis: false,
    };
  },
  mounted() {
    if (this.$route.path == "/") {
      this.dis = true;
    } else {
      this.dis = false;
    }
  },
  methods: {
    diss() {
      this.dis = true;
    },
    disx() {
      this.dis = false;
    },
    display(index) {
      this.dis = true;
      this.show = true;
      this.index = index;
      this.category_arr.forEach((row) => (row.active = false));
      this.category_arr[index].active = true;
      if (this.category_arr[index].commodity.length <= 6) {
        this.widths = this.width * 1;
      } else if (this.category_arr[index].commodity.length <= 12) {
        this.widths = this.width * 2;
      } else if (this.category_arr[index].commodity.length <= 18) {
        this.widths = this.width * 3;
      } else {
        this.widths = 992;
      }
    },
    hide() {
      this.category_arr.forEach((row) => (row.active = false));
      this.show = false;
      this.dis = false;
    },
  },
  watch: {
    dis(val) {
      console.log(val);
      if (this.$route.path == "/") {
        this.dis = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.category-wrap {
  width: 100%;
  height: 460px;
  position: absolute;
  .category-box {
    width: 1226px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .category-left {
      width: 234px;
      height: 100%;
      color: #fff;
      position: absolute;
      background: rgba(105, 101, 101, 0.6);
      padding: 20px 0;
      box-sizing: border-box;
      z-index: 2;
      .item-title {
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        font-size: 14px;
        cursor: pointer;
        box-sizing: border-box;
        &:hover {
          background-color: #ff6700;
        }
        div {
          span {
            & + span {
              margin-left: 5px;
            }
          }
        }
      }
      .active {
        background-color: #ff6700;
      }
    }
    .category-right {
      position: absolute;
      left: 234px;
      //   width: 992px;
      height: 100%;
      border: 1px solid #e0e0e0;
      border-left: 0;
      background: #fff;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
      z-index: 2;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      overflow: hidden;
      .item {
        width: 265px;
        height: 76px;
        padding: 18px 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        span {
          font-size: 14px;
          margin-left: 12px;
        }
        &:hover span {
          color: #ff6700;
        }
      }
    }
  }
}
</style>
