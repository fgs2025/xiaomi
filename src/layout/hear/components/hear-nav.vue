<template>
  <div class="hear-nav">
    <div
      :class="['nav', item.hov ? 'xjt' : '']"
      v-for="(item, index) in nav"
      :key="index"
    >
      {{ item.title }}
      <div class="nav-hov" v-if="item.hov">
        <img :src="item.img" alt="" width="90" height="90" />
        <span>{{ item.span }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          title: "小米商城",
        },
        {
          title: "MIUI",
        },
        {
          title: "loT",
        },
        {
          title: "云服务",
        },
        {
          title: "天星数科",
        },
        {
          title: "有品",
        },

        {
          title: "小爱开放平台",
        },
        {
          title: "企业团购",
        },
        {
          title: "资质证照",
        },
        {
          title: "协议规则",
        },
        {
          title: "下载app",
          hov: true,
          img: require("@/assets/img/hear/download.png"),
          span: "小米商城APP",
        },
        {
          title: "智能生活",
        },
        {
          title: "Select Location",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.hear-nav {
  float: left;
  display: flex;
  align-items: center;
  color: #b0b0b0;
  .nav {
    line-height: 40px;
    font-size: 12px;
    cursor: pointer;
    position: relative;
    & + .nav {
      margin-left: 15px;
    }
    &:hover {
      color: #fff;
    }
    & + .nav::after {
      content: "";
      width: 1px;
      height: 16px;
      left: -7px;
      top: 13px;
      position: absolute;
      background-color: #424242;
    }
    .nav-hov {
      position: absolute;
      width: 125px;
      height: 0;
      left: -50%;
      margin-left: -18px;
      box-shadow: 0 1px 5px #aaa;
      background-color: #fff;
      line-height: 0;
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      transition: all 0.3s;
      z-index: 4;
      img {
        margin-top: 18px;
      }
      span {
        margin: 15px 0;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .xjt {
    &:hover::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      bottom: -5px;
      left: 50%;
      margin-left: -5px;
      background-color: #fff;
      transform: rotate(-45deg);
    }
    &:hover .nav-hov {
      height: 160px;
    }
  }
}
</style>
