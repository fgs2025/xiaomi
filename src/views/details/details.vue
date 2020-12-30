<template>
  <div>
    <hear></hear>
    <navs></navs>
    <div :class="['xm-product-box', menus ? 'menu' : '']">
      <div class="xm-product">
        <div class="product-left">
          <span class="title">{{ this.$route.query.sj.name }}</span>
          <div class="con">
            <span>|</span>
            <span class="txt">小米10至尊纪念版</span>
            <span>|</span>
            <span class="txt">小米10青春版5G</span>
          </div>
        </div>
        <div class="product-right">
          <span class="txt">概述</span>
          <span class="shu">|</span>
          <span class="txt">F码通道</span>
          <span class="shu">|</span>
          <span class="txt">咨询客服</span>
          <span class="shu">|</span>
          <span class="txt">用户评价</span>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div
        class="img-box"
        :style="{
          backgroundImage: `url(${this.$route.query.sj.img})`,
        }"
      >
        <div class="letf-btn"><i class="iconfont icon-zuo1"></i></div>
        <div class="right-btn">
          <i class="iconfont icon-mjiantou-copy"></i>
        </div>
        <div class="dian-box">
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
          <div class="dian"></div>
        </div>
      </div>
      <div class="product-con">
        <div class="top-title">{{ this.$route.query.sj.name }}</div>
        <div class="sale-desc">
          <span
            >「1月1号0点开始预售付尾款及首卖；最高享12期免息；标配不提供充电器和数据线，如需请选择套装版」</span
          >
          骁龙888｜2K AMOLED 四曲面柔性屏｜1亿像素三摄｜时尚轻薄机身｜55W
          有线闪充｜50W 无线闪充｜10W
          无线反充｜LPDDR5｜WiFi6（增强版）｜视频「超级夜景」｜哈曼卡顿音频认证｜立体声双扬声器
        </div>
        <p class="company-info">小米自营</p>
        <div class="price-info">1599元</div>
        <div class="line"></div>
        <div class="address-box">
          <div class="icon-box"><i class="iconfont icon-sousuo"></i></div>
          <div class="address-con">
            <div class="top">
              <span>广东</span>
              <span>湛江市</span>
              <span>雷州市</span>
              <span>乌石镇</span>
              <span class="edit">修改</span>
            </div>
            <div class="desc">有现货</div>
          </div>
        </div>
        <div class="buy-option">
          <div class="buy-box-child">
            <div class="title">选择版本</div>
            <div class="clearfix-box">
              <div class="active">6GB+128GB</div>
              <div>8GB+128GB</div>
              <div>8GB+256GB</div>
            </div>
          </div>
          <div class="buy-box-child">
            <div class="title">选择颜色</div>
            <div class="clearfix-box">
              <div class="active">静默星空</div>
              <div>碧海星辰</div>
              <div>湖光秋色</div>
            </div>
          </div>
          <div class="buy-box-child">
            <div class="title">选择套餐</div>
            <div class="clearfix-box">
              <div class="active">标准版</div>
              <div>手机保护壳套餐</div>
            </div>
          </div>
        </div>

        <div class="service-box">
          <div
            class="service-item-box"
            v-for="(item, index) in this.$route.query.sj.service_lits"
            :item="item"
            :key="index"
          >
            <div class="top">
              <span class="title">{{ item.title }}</span>
              <span class="link-txt">{{ item.link_txt }}></span>
            </div>
            <div
              :class="['item', ite.active ? 'active' : '']"
              v-for="(ite, inde) in item.txt"
              :key="inde"
              :ite="ite"
              @click="choice(item, ite)"
            >
              <div class="btn">
                <span>√</span>
              </div>
              <img
                src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1605594163.22542401.png"
                alt=""
              />
              <div class="txt">
                <div class="titles">
                  {{ ite.titles }} <span>{{ ite.ts }}元</span>
                </div>
                <div class="desc">{{ ite.desc }}</div>
                <div class="buttom">
                  <div class="agreement-box">
                    <div class="icon">
                      <span>√</span>
                    </div>
                    <div class="text">
                      我已阅读
                      <span>{{ ite.fuwu }}</span>
                      <span class="shu">|</span>
                      <span>{{ ite.wj }}</span>
                    </div>
                  </div>
                  <span class="price">{{ ite.price }}元</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="selected-list">
          <div class="merchandise-box">
            <span class="merchandise-name"
              >Redmi Note 9 Pro 5G 8GB+128G 静默星空</span
            >
            <span class="merchandise-rate">1799元</span>
          </div>
          <div class="total-price">总计：1805元</div>
        </div>
        <div class="btn-box">
          <div class="sale-btn">加入购物车</div>
          <div class="btn-like">喜欢</div>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import hear from "../../layout/hear/hear.vue";
import Navs from "../../layout/nav/nav.vue";
import SiteFooter from "../../layout/site-footer/site-footer.vue";
export default {
  data() {
    return {
      menus: false,
      // service_lits: [
      //   {
      //     title: "选择小米提供的意外保护",
      //     link_txt: "了解意外保护",
      //     txt: [
      //       {
      //         active: false,
      //         titles: "意外保障服务",
      //         ts: "179",
      //         desc: "手机意外碎屏/进水/碾压等损坏",
      //         fuwu: "服务条款",
      //         wj: "常见问题",
      //         price: "179",
      //       },
      //       {
      //         active: false,
      //         titles: "意外保障",
      //         ts: "17",
      //         desc: "手机意外碎屏/进水等损坏",
      //         fuwu: "服务",
      //         wj: "常见",
      //         price: "17",
      //       },
      //     ],
      //   },
      //   {
      //     title: "选择小米提供的意外维修",
      //     link_txt: "了解意外维修",
      //     txt: [
      //       {
      //         active: false,
      //         titles: "意外保障服务",
      //         ts: "179",
      //         desc: "手机意外碎屏/进水/碾压等损坏",
      //         fuwu: "服务条款",
      //         wj: "常见问题",
      //         price: "179",
      //       },
      //     ],
      //   },
      //   {
      //     title: "选择小米",
      //     link_txt: "了解意外维修",
      //     txt: [
      //       {
      //         active: false,
      //         titles: "意外保障服务",
      //         ts: "179",
      //         desc: "手机意外碎屏/进水/碾压等损坏",
      //         fuwu: "服务条款",
      //         wj: "常见问题",
      //         price: "179",
      //       },
      //       {
      //         active: false,
      //         titles: "意外保障服务",
      //         ts: "179",
      //         desc: "手机意外碎屏/进水/碾压等损坏",
      //         fuwu: "服务条款",
      //         wj: "常见问题",
      //         price: "179",
      //       },
      //       {
      //         active: false,
      //         titles: "意外保障服务",
      //         ts: "179",
      //         desc: "手机意外碎屏/进水/碾压等损坏",
      //         fuwu: "服务条款",
      //         wj: "常见问题",
      //         price: "179",
      //       },
      //     ],
      //   },
      // ],
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
    choice(item, ite) {
      if (ite.active) {
        item.txt.forEach((row) => {
          row.active = false;
        });
      } else {
        item.txt.forEach((row) => {
          row.active = false;
        });
        ite.active = !ite.active;
      }
      console.log(this.$route.query.sj.service_lits);
    },
  },

  components: { hear, Navs, SiteFooter },
};
</script>

<style lang="less" scoped>
.xm-product-box {
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  // box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);i
  // transition: 0.5;
  .xm-product {
    width: 1226px;
    height: 63px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .product-left {
      display: flex;
      align-items: center;
      .title {
        font-size: 18px;
      }
      .con {
        font-size: 12px;
        margin-left: 10px;
        span {
          & + span {
            margin-left: 10px;
          }
        }
        .txt {
          cursor: pointer;
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
    .product-right {
      font-size: 14px;
      .shu {
        margin: 0 10px;
      }
      .txt {
        cursor: pointer;
        &:hover {
          color: #ff6700;
        }
      }
    }
  }
}
.menu {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
}
.product-box {
  width: 1226px;
  margin: 0 auto;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
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
  .product-con {
    width: 600px;

    .top-title {
      font-size: 24px;
      font-weight: 400;
      color: #212121;
    }
    .sale-desc {
      margin-top: 8px;
      font-size: 14px;
      color: #b0b0b0;
      span {
        color: rgb(255, 74, 0);
      }
    }
    .company-info {
      margin-top: 14px;
      color: #ff6700;
      font-size: 14px;
    }
    .price-info {
      padding: 12px 0;
      font-size: 18px;
      color: #ff6700;
    }
    .line {
      margin-top: 12px;
      border-bottom: 1px solid #e0e0e0;
    }
    .address-box {
      padding: 30px 50px 30px 20px;
      margin: 20px 0;
      background: #fafafa;
      border: 1px solid #e0e0e0;
      display: flex;
      .address-con {
        margin-left: 20px;
        .top {
          span {
            font-size: 14px;
            margin-right: 14px;
          }
          .edit {
            color: #ff6700;
            cursor: pointer;
          }
        }
        .desc {
          font-size: 14px;
          color: #ff6700;
        }
      }
    }
  }
  .buy-option {
    .buy-box-child {
      margin-bottom: 20px;
      .title {
        font-size: 18px;
      }
      .clearfix-box {
        display: flex;
        flex-wrap: wrap;
        div {
          width: 292px;
          height: 42px;
          line-height: 42px;
          border: 1px solid #e0e0e0;
          box-sizing: border-box;
          margin-right: 12px;
          margin-top: 10px;
          text-align: center;
          cursor: pointer;
          &:nth-child(2n) {
            margin-right: 0;
          }
          &:hover {
            color: #ff6700;
            border-color: #ff6700;
          }
        }
        .active {
          color: #ff6700;
          border-color: #ff6700;
        }
      }
    }
  }
  .service-box {
    .service-item-box {
      margin-bottom: 20px;
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .title {
          font-size: 18px;
        }
        .link-txt {
          font-size: 14px;
          color: #ff6700;
          cursor: pointer;
        }
      }
      .item {
        display: flex;
        cursor: pointer;
        padding: 30px 0;
        border: 1px solid #e0e0e0;
        .btn {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          font-size: 12px;
          justify-content: center;
          border: 1px solid #e0e0e0;
          margin-left: 30px;
          margin-top: 20px;
          color: #fff;
          flex-shrink: 0;
        }
        .active {
          border-color: #ff6700;
          background-color: #ff6700;
        }
        img {
          width: 50px;
          height: 50px;
          margin: 0 20px;
        }
        .txt {
          width: 100%;
          .titles {
            font-size: 18px;
            font-weight: 800;
            span {
              padding: 2px 6px;
              font-size: 14px;
              background: #ff6700;
              color: #fff;
              border-radius: 20px;
            }
          }
          .desc {
            margin-top: 14px;
            font-size: 14px;
            color: #b0b0b0;
          }
          .buttom {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            padding-right: 20px;
            .agreement-box {
              display: flex;
              align-items: center;

              .icon {
                width: 13px;
                height: 13px;
                display: flex;
                align-items: center;
                font-size: 12px;
                justify-content: center;
                border: 1px solid #e0e0e0;
                color: #fff;
                margin-right: 3px;
              }
              .text {
                font-size: 14px;
                span {
                  color: #ff6700;
                }
                .shu {
                  margin: 0 3px;
                }
              }
              .price {
                font-size: 14px;
              }
            }
          }
        }
      }
      .active {
        border-color: #ff6700;
        .btn,
        .icon {
          background-color: #ff6700 !important;
          border-color: #ff6700 !important;
        }
        .txt > .titles {
          color: #ff6700;
        }
      }
    }
  }
  .selected-list {
    padding: 30px;
    background: #f9f9fa;
    margin-bottom: 30px;
    .merchandise-box {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      color: #616161;
    }
    .total-price {
      color: #ff6700;
      font-size: 24px;
      padding-top: 20px;
    }
  }
  .btn-box {
    display: flex;
    margin-bottom: 30px;
    .sale-btn {
      width: 298px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      font-size: 16px;
      margin-right: 12px;
      background: #ff6700;
      border-color: #ff6700;
      color: #fff;
      cursor: pointer;
    }
    .btn-like {
      width: 140px;
      height: 52px;
      line-height: 52px;
      background: #b0b0b0;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
