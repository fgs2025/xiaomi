<template>
  <div class="flashsale-box">
    <div class="top">
      <span>小米闪购</span>
      <div class="btn-box">
        <div :class="['left-btn', l_btn ? 'action' : '']" @click="page()">
          &lt;
        </div>
        <div :class="['right-btn', r_btn ? 'action' : '']" @click="next()">
          &gt;
        </div>
      </div>
    </div>
    <div class="bottom">
      <countdown></countdown>
      <div class="right">
        <div
          class="item-box"
          :style="{ transform: `translatex(-${translatex}px)` }"
        >
          <div class="item" v-for="(item, index) in merchandise" :key="index">
            <img :src="item.img" alt="" />
            <div class="name">{{ item.name }}</div>
            <div class="introduction">{{ item.introduction }}</div>
            <div class="rate">
              <span>{{ item.rate }}元</span><del>{{ item.del }}元</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "./components/countdown.vue";

export default {
  data() {
    return {
      merchandise: [
        {
          img: require("@/assets/img/flashsale/item1.png"),
          name: "小米无线鼠标Lite黑色",
          introduction: "简约设计，轻盈握感",
          rate: "29",
          del: "39",
        },
        {
          img: require("@/assets/img/flashsale/item2.png"),
          name: "米家手持无线吸尘器1C 白色",
          introduction: "吸力续航双强劲，清洁小怪兽",
          rate: "899",
          del: "999",
        },
        {
          img: require("@/assets/img/flashsale/item3.png"),
          name: "米家全自动波轮洗衣机 5.5kg 灰色",
          introduction: "10挡水位调节，满足日常所需",
          rate: "599",
          del: "799",
        },
        {
          img: require("@/assets/img/flashsale/item4.png"),
          name: "RedmiBook Air 13 I5/16G/512G/2.5K100%sRGB 灰色",
          introduction: "轻盈便携 | 轻松办公",
          rate: "4799",
          del: "5199",
        },
        {
          img: require("@/assets/img/flashsale/item5.png"),
          name: "小米移动电源3 10000mAh超级闪充版（50W）​ 黑色",
          introduction: "大容量，超级闪充",
          rate: "179",
          del: "249",
        },
        {
          img: require("@/assets/img/flashsale/item1.png"),
          name: "小米无线鼠标Lite黑色",
          introduction: "简约设计，轻盈握感",
          rate: "29",
          del: "39",
        },
        {
          img: require("@/assets/img/flashsale/item2.png"),
          name: "米家手持无线吸尘器1C 白色",
          introduction: "吸力续航双强劲，清洁小怪兽",
          rate: "899",
          del: "999",
        },
        {
          img: require("@/assets/img/flashsale/item3.png"),
          name: "米家全自动波轮洗衣机 5.5kg 灰色",
          introduction: "10挡水位调节，满足日常所需",
          rate: "599",
          del: "799",
        },
        {
          img: require("@/assets/img/flashsale/item4.png"),
          name: "RedmiBook Air 13 I5/16G/512G/2.5K100%sRGB 灰色",
          introduction: "轻盈便携 | 轻松办公",
          rate: "4799",
          del: "5199",
        },
        {
          img: require("@/assets/img/flashsale/item1.png"),
          name: "小米无线鼠标Lite黑色",
          introduction: "简约设计，轻盈握感",
          rate: "29",
          del: "39",
        },
        {
          img: require("@/assets/img/flashsale/item2.png"),
          name: "米家手持无线吸尘器1C 白色",
          introduction: "吸力续航双强劲，清洁小怪兽",
          rate: "899",
          del: "999",
        },
        {
          img: require("@/assets/img/flashsale/item3.png"),
          name: "米家全自动波轮洗衣机 5.5kg 灰色",
          introduction: "10挡水位调节，满足日常所需",
          rate: "599",
          del: "799",
        },
        {
          img: require("@/assets/img/flashsale/item4.png"),
          name: "RedmiBook Air 13 I5/16G/512G/2.5K100%sRGB 灰色",
          introduction: "轻盈便携 | 轻松办公",
          rate: "4799",
          del: "5199",
        },
        {
          img: require("@/assets/img/flashsale/item2.png"),
          name: "米家手持无线吸尘器1C 白色",
          introduction: "吸力续航双强劲，清洁小怪兽",
          rate: "899",
          del: "999",
        },
        {
          img: require("@/assets/img/flashsale/item3.png"),
          name: "米家全自动波轮洗衣机 5.5kg 灰色",
          introduction: "10挡水位调节，满足日常所需",
          rate: "599",
          del: "799",
        },
      ],
      translatex: 0, //移动
      distance: 992, //每次移动的距离,4个div的框宽
      l_btn: false, //左边按钮
      r_btn: true, //右边按钮
    };
  },
  mounted() {
    this.width = +(248 * this.merchandise.length - 248 * 4); //总共可以移动的距离
    this.auto();
  },
  methods: {
    auto() {
      //定时器
      this.trimer = setTimeout(() => {
        if (this.translatex >= this.width) {
          //移动到最后的时候回到开头
          this.translatex = 0;
        } else {
          this.translatex += this.distance;
          if (this.translatex >= this.width) {
            //限制右边可以移动的距离
            this.translatex = this.width;
          }
        }
        this.auto();
      }, 6000);
    },
    page() {
      //左边按钮事件
      if (this.l_btn) {
        clearTimeout(this.trimer);
        this.translatex -= this.distance; //-每次移动的距离
        if (this.translatex <= 0) {
          //限制距离
          this.translatex = 0;
        }
        this.auto();
      } else {
        return;
      }
    },
    next() {
      //右边按钮事件
      if (this.r_btn) {
        clearTimeout(this.trimer);
        this.translatex += this.distance; //+每次移动的距离
        if (this.translatex >= this.width) {
          //限制距离
          this.translatex = this.width;
        }
        this.auto();
      } else {
        return;
      }
    },
  },
  watch: {
    translatex(val) {
      //监听当前的位置
      if (val == 0) {
        //0的时候左边按钮不能点击
        this.l_btn = false;
      } else {
        this.l_btn = true;
      }
      if (val >= this.width) {
        //到总可移动距离的时候右按钮不能点击
        this.r_btn = false;
      } else {
        this.r_btn = true;
      }
    },
  },
  components: { Countdown },
};
</script>

<style lang="less" scoped>
.flashsale-box {
  width: 1226px;
  margin: 0 auto;
  .top {
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 22px;
    }
    .btn-box {
      display: flex;
      .left-btn,
      .right-btn {
        width: 36px;
        height: 24px;
        text-align: center;
        line-height: 22px;
        border: 1px solid #e0e0e0;
        font-size: 24px;
        font-weight: 800;
        color: #ccc;
        box-sizing: border-box;
      }
      .action {
        color: black;
        cursor: pointer;
      }
    }
  }
  .bottom {
    display: flex;
    .right {
      flex: 1;
      margin-left: 14px;
      overflow: hidden;
      .item-box {
        height: 100%;
        display: flex;
        // transform: translatex(-992px);
        transition: all 1s;
        .item {
          width: 234px;
          height: 100%;
          // border: 1px solid red;
          box-sizing: border-box;
          text-align: center;
          padding-top: 20px;
          background: #fff;
          flex-shrink: 0;
          margin-right: 14px;
          cursor: pointer;
          img {
            width: 160px;
            height: 160px;
          }
          .name {
            font-size: 14px;
            margin-top: 20px;
            padding: 0 20px;
            box-sizing: border-box;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .introduction {
            font-size: 12px;
            color: #b0b0b0;
            margin-top: 5px;
            margin-bottom: 10px;
          }
          .rate {
            font-size: 14px;
            color: #ff6709;
            del {
              margin-left: 5px;
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
