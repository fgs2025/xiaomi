<template>
  <div>
    <hear></hear>
    <navs></navs>
    <index></index>
    <div class="top-wrap">
      <div class="top">
        <span>首页</span>
        <span>/</span>
        <span>个人中心</span>
      </div>
    </div>
    <div class="mi-user">
      <div class="container">
        <div class="left">
          <div class="menu-box" v-for="(item, index) in menu_box" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="item" v-for="(ite, inde) in item.item_list" :key="inde">
              <router-link :to="ite.link">
                {{ ite.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="right">
          <router-view></router-view>
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
import SiteFooter from "../../layout/site-footer/site-footer.vue";
export default {
  data() {
    return {
      menu_box: [
        {
          title: "订单中心",
          item_list: [
            {
              name: "我的订单",
              link: "/",
            },
            {
              name: "评价晒单",
              link: "/",
            },
            {
              name: "话费充值订单",
              link: "/",
            },
            {
              name: "以旧换新订单",
              link: "/",
            },
          ],
        },
        {
          title: "个人中心",
          item_list: [
            {
              name: "我的个人中心",
              link: "/user/portal",
            },
            {
              name: "消息通知",
              link: "/user/message",
            },
            {
              name: "话费充值订单",
              link: "/",
            },
            {
              name: "以旧换新订单",
              link: "/",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    // this.$router.push("/user/portal");
  },
  components: { hear, Navs, index, SiteFooter },
};
</script>

<style lang="less" scoped>
.top-wrap {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  background: #f5f5f5;
  color: #757575;
  .top {
    width: 1226px;
    margin: 0 auto;
    span {
      & + span {
        margin-left: 10px;
      }
    }
  }
}
.mi-user {
  background: #f5f5f5;
  padding-bottom: 40px;
  .container {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    .left {
      width: 234px;
      background-color: #fff;
      padding: 36px 48px;
      box-sizing: border-box;
      .menu-box {
        .title {
          font-size: 16px;
          font-weight: 400;
          line-height: 52px;
          color: #333;
        }
        .item {
          font-size: 14px;
          padding: 6px 0;
          color: #757575;
        }
        .router-link-exact-active {
          color: #ff6700;
        }
      }
    }
    .right {
      flex: 1;
      margin-left: 14px;
      background-color: #fff;
    }
  }
}
</style>