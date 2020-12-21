<template>
  <div class="site-footer-wrap">
    <div class="service">
      <div v-for="(item, index) in service" :key="index">
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="links">
      <div class="col-links" v-for="(item, index) in colLinks" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="link" v-for="(ite, ind) in item.link_arr" :key="ind">
          <span>{{ ite.link_title }}</span>
        </div>
      </div>
      <div class="col-contact">
        <div class="phone">400-100-5678</div>
        <div class="time">8:00-18:00（仅收市话费）</div>
        <div class="customer">人工客服</div>
        <div class="follow">
          关注小米:
          <span>新浪</span>
          <span class="wx"
            >微信<img src="@/assets/img/hear/download.png" alt=""
          /></span>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="top">
        <div class="logo">
          <img src="@/assets/img/logo/mi-logo.png" alt="" />
        </div>
        <div class="text">
          <div class="sites">
            <span>小米商城</span>
            <span>MIUI</span>
            <span>米家</span>
            <span>米聊</span>
            <span>多看</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: [
        {
          title: "预约维修服务",
        },
        {
          title: "7天无理由退货",
        },
        {
          title: "15天免费换货",
        },
        {
          title: "满99元包邮",
        },
        {
          title: "520余售后网点",
        },
      ],
      colLinks: [
        {
          title: "帮助中心",
          link_arr: [
            {
              link_title: "账号管理",
            },
            {
              link_title: "购物指南",
            },
            {
              link_title: "订单操作",
            },
          ],
        },
        {
          title: "服务支持",
          link_arr: [
            {
              link_title: "售后政策",
            },
            {
              link_title: "自助服务",
            },
            {
              link_title: "相关下载",
            },
          ],
        },
        {
          title: "线下门店",
          link_arr: [
            {
              link_title: "小米之家",
            },
            {
              link_title: "服务网店",
            },
            {
              link_title: "授权体验店",
            },
          ],
        },
        {
          title: "关于小米",
          link_arr: [
            {
              link_title: "了解小米",
            },
            {
              link_title: "加入小米",
            },
            {
              link_title: "投资者关系",
            },
            {
              link_title: "企业社会责任",
            },
            {
              link_title: "廉洁举报",
            },
          ],
        },
        {
          title: "关于我们",
          link_arr: [
            {
              link_title: "新浪微博",
            },
            {
              link_title: "官方微信",
            },
            {
              link_title: "联系我们",
            },
            {
              link_title: "公益基金会",
            },
          ],
        },
        {
          title: "特色服务",
          link_arr: [
            {
              link_title: "F码通道",
            },
            {
              link_title: "礼物码",
            },
            {
              link_title: "防伪查询",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.site-footer-wrap {
  width: 1226px;
  margin: 0 auto;
  .service {
    padding: 27px 0;
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    div {
      flex: 1;
      text-align: center;

      span {
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          color: #ff6700;
        }
      }
      & + div {
        border-left: 1px solid #e0e0e0;
      }
    }
  }
  .links {
    display: flex;
    padding: 40px 0;
    .col-links {
      width: 160px;
      .title {
        margin-bottom: 26px;
        font-size: 14px;
      }
      .link {
        font-size: 12px;
        margin-top: 10px;
        span {
          color: #757575;
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
    .col-contact {
      width: 245px;
      border-left: 1px solid #e0e0e0;
      margin-left: 18px;
      text-align: center;
      .phone {
        font-size: 22px;
        color: #ff6700;
      }
      .time {
        font-size: 12px;
        margin-bottom: 5px;
      }
      .customer {
        width: 118px;
        height: 28px;
        font-size: 12px;
        line-height: 28px;
        border: 1px solid #ff6700;
        background: #fff;
        color: #ff6700;
        margin: 0 auto;
        cursor: pointer;
        transition: all 0.3s;
        margin-bottom: 5px;
        &:hover {
          color: #fff;
          background-color: #f25807;
          border-color: #f25807;
        }
      }
      .follow {
        font-size: 12px;

        span {
          cursor: pointer;
          & + span {
            margin-left: 5px;
          }
          &:hover {
            color: #ff6700;
          }
        }
        .wx {
          position: relative;
          img {
            position: absolute;
            width: 126px;
            height: 126px;
            top: 20px;
            left: -45px;
            display: none;
          }
          &:hover img {
            display: block;
          }
        }
      }
    }
  }
  .info {
    .top {
      display: flex;
      .logo {
        width: 57px;
        height: 57px;
        background-color: #ff6700;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .text {
        margin-left: 10px;
        .sites {
          span {
            font-size: 12px;
            position: relative;
            cursor: pointer;
            & + span {
              margin-left: 8px;
            }
            & + span::after {
              content: "";
              width: 1px;
              height: 16px;
              left: -4px;
              top: 0px;
              position: absolute;
              background-color: #424242;
            }
          }
        }
      }
    }
  }
}
</style>
