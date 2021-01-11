<template>
  <div>
    <hear></hear>
    <navs></navs>
    <index></index>
    <!-- 顶栏 -->
    <xmProduct
      :class="[merchandise.menus ? 'menu' : '']"
      :title="merchandise.title"
    ></xmProduct>
    <div class="product-box">
      <swiper :img_arr="merchandise.img_arr"></swiper
      ><!-- 左边图片 -->

      <div class="product-con">
        <div class="top-title">{{ merchandise.title }}</div>
        <div class="sale-desc">
          <span>{{ merchandise.sale }}</span
          >{{ merchandise.desc }}
        </div>
        <p class="company-info">小米自营</p>
        <div class="price-info">{{ merchandise.price }}元</div>
        <div class="line"></div>

        <addresss></addresss>
        <div class="buy-option">
          <div
            class="buy-box-child"
            v-for="(item, index) in merchandise.revision_lits"
            :key="index"
          >
            <div class="title">{{ item.title }}</div>
            <div class="clearfix-box">
              <div
                :class="[ite.active ? 'active' : '']"
                v-for="(ite, inde) in item.clearfix"
                :key="inde"
                @click="revision_change(item, ite)"
              >
                {{ ite.title }}
              </div>
            </div>
          </div>
          <!-- <div class="buy-box-child">
            <div class="title">选择颜色</div>
            <div class="clearfix-box">
              <div class="active">静默星空</div>
              <div>碧海星辰</div>
              <div>湖光秋色</div>
            </div>
          </div> -->
        </div>

        <div class="service-box">
          <div
            class="service-item-box"
            v-for="(item, index) in merchandise.service_lits"
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
            <ul>
              <li>
                <span class="merchandise-name"
                  >Redmi Note 9 Pro 5G {{ merchandise.cc }}
                  {{ merchandise.color }}</span
                >
                <span class="merchandise-rate">{{ merchandise.price }}元</span>
              </li>
            </ul>
          </div>

          <div
            class="merchandise-box"
            v-for="(item, index) in merchandise.service_lits"
            :key="index"
          >
            <ul v-for="(ite, index) in item.txt" :key="index">
              <li v-if="ite.active">
                <span class="merchandise-name">{{ ite.titles }}</span>
                <span class="merchandise-rate">{{ ite.price }}元</span>
              </li>
            </ul>
          </div>

          <div class="total-price">总计：{{ aaa }}元</div>
        </div>
        <div class="btn-box">
          <div class="sale-btn" @click="add">加入购物车</div>
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
import index from "../../layout/right-nav/index.vue";
import xmProduct from "./components/xm-product";
import swiper from "./components/swiper";
import addresss from "./components/address";
import SiteFooter from "../../layout/site-footer/site-footer.vue";
export default {
  data() {
    return {
    
      merchandise: {
        menus: false,
        title: "Note 9 Pro 5G",
        price: "",
        aa: "",
        bb: "",
        cc: "",
        color: "",
        fgs: 601000,
        sale:
          "「购机享多看阅读免费VIP季卡；赠价值798元双人定制体检卡；1.1-1.4购机得2倍米金；+1元得200G云空间月卡」",
        desc: `一亿像素夜景相机 / 120Hz六档变速高刷屏 / 国内首发骁龙750G / 6.67"小孔径全面屏 / 立体声双扬声器 / 4820mAh+33W闪充 / 多功能NFC / 线性马达 / 红外遥控 / 全新MIUI 12系统`,
        img_arr: [
          {
            img: require("@/assets/img/phone/phoneItem1.jpg"),
            // active: true,
          },
        ],
        revision_lits: [
          {
            title: "选择版本",
            clearfix: [
              {
                title: "6GB+128GB",
                active: true,
                price: "1599",
              },
              {
                title: "8GB+128GB",
                active: false,
                price: "1799",
              },
              {
                title: "8GB+256GB",
                active: false,
                price: "1999",
              },
            ],
          },
          {
            title: "选择颜色",
            clearfix: [
              {
                title: "静默星空",
                active: true,
              },
              {
                title: "碧海星辰",
                active: false,
              },
              {
                title: "湖光秋色",
                active: false,
              },
            ],
          },
        ],
        service_lits: [
          {
            title: "选择小米提供的意外保护",
            link_txt: "了解意外保护",
            txt: [
              {
                active: false,
                titles: "意外保障服务",
                ts: "1",
                desc: "手机意外碎屏/进水/碾压等损坏",
                fuwu: "服务条款",
                wj: "常见问题",
                price: "1",
              },
              {
                active: false,
                titles: "意外保障",
                ts: "2",
                desc: "手机意外碎屏/进水等损坏",
                fuwu: "服务",
                wj: "常见",
                price: "2",
              },
            ],
          },
          {
            title: "选择小米提供的意外维修",
            link_txt: "了解意外维修",
            txt: [
              {
                active: false,
                titles: "意外保障服务",
                ts: "3",
                desc: "手机意外碎屏/进水/碾压等损坏",
                fuwu: "服务条款",
                wj: "常见问题",
                price: "3",
              },
            ],
          },
          {
            title: "选择小米",
            link_txt: "了解意外维修",
            txt: [
              {
                active: false,
                titles: "意服务",
                ts: "4",
                desc: "手机意外碎屏/进水/碾压等损坏",
                fuwu: "服务条款",
                wj: "常见问题",
                price: "4",
              },
              {
                active: false,
                titles: "意外保障服务",
                ts: "5",
                desc: "手机意外碎屏/进水/碾压等损坏",
                fuwu: "服务条款",
                wj: "常见问题",
                price: "5",
              },
              {
                active: false,
                titles: "意外保障服务",
                ts: "6",
                desc: "手机意外碎屏/进水/碾压等损坏",
                fuwu: "服务条款",
                wj: "常见问题",
                price: "6",
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    
    window.addEventListener("scroll", this.menu);
    // this.price = this.revision_lits[0].clearfix[0].price;

    this.merchandise.revision_lits.forEach((row) => {
      row.clearfix.forEach((ro) => {
        if (ro.active) {
          if (ro.price) {
            this.merchandise.price = ro.price;
            this.merchandise.aa = Number(this.merchandise.price);
            this.merchandise.cc = ro.title;
          } else {
            this.merchandise.color = ro.title;
          }
        }
      });
    });
  },
  computed: {
    aaa() {
      return this.merchandise.aa + this.merchandise.bb;
    },
  },
  methods: {
    menu() {
      if (document.documentElement.scrollTop >= 140) {
        this.merchandise.menus = true;
      } else {
        this.merchandise.menus = false;
      }
    },
    revision_change(item, ite) {
      item.clearfix.forEach((row) => (row.active = false));
      ite.active = true;
      if (ite.price) {
        this.merchandise.price = ite.price;
        this.merchandise.aa = Number(this.merchandise.price);
        this.merchandise.cc = ite.title;
      } else {
        this.merchandise.color = ite.title;
      }
    },
    choice(item, ite) {
      item.txt.forEach((row) => {
        if (row.active) {
          this.merchandise.bb = Number(this.merchandise.bb) - Number(row.price);
        }
      });
      if (ite.active) {
        item.txt.forEach((row) => {
          row.active = false;
        });
      } else {
        item.txt.forEach((row) => {
          row.active = false;
        });
        ite.active = !ite.active;
        this.merchandise.bb = Number(this.merchandise.bb) + Number(ite.price);
      }
    },
    add() {
      this.$store.commit("increment", this.merchandise);
    },
  },   
  // methods:{
  //       add(item){
  //           this.$store.dispatch('optionCar',(state)=>{
  //               let find = state.car.find(row=>row.good_id==item.good_id);
  //               find.num++
  //           })
  //       },
  //       sub(item){
  //           this.$store.dispatch('optionCar',(state)=>{
  //               let find = state.car.find(row=>row.good_id==item.good_id);
  //               find.num--
  //           })
  //       }
  //   },
  //   computed:{
  //       shop_car(){
  //           return this.$store.getters.getCar
  //       }
  //   }    
//  data(){
//         return{
//             classfily:[
//                 {
//                     name:'选择版本',
//                     list:[
//                         {
//                             lable:'8G',
//                             id:1,
//                             active:false
//                         },
//                          {
//                             lable:'16G',
//                             id:2,
//                             active:false
//                         }
//                     ]
//                 },
//                 {
//                     name:'选择颜色',
//                     list:[
//                         {
//                             lable:'红色',
//                             id:3,
//                             active:false
//                         },
//                          {
//                             lable:'蓝色',
//                             id:4,
//                             active:false
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     mounted(){
//         // console.log()
//     },
//     methods:{
//         to_active(item,ite){
//             item.list.forEach(el => {
//                 el.active = false
//             });
//             ite.active = true;
//         },
//         add_car(){
//             // console.log(this.$store)
//             // this.$store.dispatch('pushCar',{
//             //     num:1,
//             //     classfily:this.classfily.map(row=>{
//             //         const find = row.list.find(ro=>ro.active)
//             //         return find.id
//             //     }),
//             //     good_id:this.$route.params.id
//             // })
//             axios.get('/api/pc/classify-list').then(res=>{
//                 console.log(res);
//             })
//         }
//     },
  components: { hear, Navs, index, SiteFooter, xmProduct, swiper, addresss },
};
</script>

<style lang="less" scoped>
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
      line-height: 30px;
      color: #616161;
      li {
        list-style: none;
        display: flex;
        justify-content: space-between;
      }
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
