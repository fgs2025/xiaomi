<template>
  <div class="site-footer-wrap">
    <div class="service">
      <div>预约维修服务</div>
      <div>7天无理由退货</div>
      <div>15天免费换货</div>
      <div>满99元包邮</div>
      <div>520余售后网点</div>
    </div>
    <div class="links">
      <div class="col-links">
        <div class="title">帮助中心</div>
        <div class="link"><span>账号管理</span></div>
        <div class="link"><span>购物指南</span></div>
        <div class="link"><span>订单操作</span></div>
      </div>
      <div class="col-links">
        <div class="title">帮助中心</div>
        <div class="link"><span>账号管理</span></div>
        <div class="link"><span>购物指南</span></div>
        <div class="link"><span>订单操作</span></div>
      </div>
      <div class="col-links">
        <div class="title">帮助中心</div>
        <div class="link"><span>账号管理</span></div>
        <div class="link"><span>购物指南</span></div>
        <div class="link"><span>订单操作</span></div>
      </div>
      <div class="col-links">
        <div class="title">帮助中心</div>
        <div class="link"><span>账号管理</span></div>
        <div class="link"><span>购物指南</span></div>
        <div class="link"><span>订单操作</span></div>
      </div>
      <div class="col-links">
        <div class="title">帮助中心</div>
        <div class="link"><span>账号管理</span></div>
        <div class="link"><span>购物指南</span></div>
        <div class="link"><span>订单操作</span></div>
      </div>
      <div class="col-links">
        <div class="title">帮助中心</div>
        <div class="link"><span>账号管理</span></div>
        <div class="link"><span>购物指南</span></div>
        <div class="link"><span>订单操作</span></div>
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
export default {};
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
      cursor: pointer;
      transition: all 0.3s;
      & + div {
        border-left: 1px solid #e0e0e0;
      }
      &:hover {
        color: #ff6700;
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