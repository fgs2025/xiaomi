<template>
  <homeBrickBox>
    <template v-slot:title>
      <div class="title">手机</div>
    </template>
    <template v-slot:more>
      <div class="more">
        查看全部<i class="iconfont icon-mjiantou-copy"></i>
      </div>
    </template>
    <template v-slot:left>
      <div class="left">
        <img
          src="@/assets/img/phone/pnone1.jpg"
          width="100%"
          height="100%"
          alt=""
        />
      </div>
    </template>
    <template v-slot:right>
      <div class="right">
        <div
          class="item"
          v-for="(item, index) in merchandise"
          :key="index"
          @click="info(index)"
        >
          <img :src="item.img[0]" alt="" />
          <div class="name">{{ item.name }}</div>
          <div class="introduction">{{ item.introduction }}</div>
          <div class="rate">{{ item.rate }}元起</div>
        </div>
      </div>
    </template>
  </homeBrickBox>
</template>

<script>
export default {
  data() {
    return {
      merchandise: [
        {
          img: [require("@/assets/img/phone/phoneItem1.jpg")],
          name: "Note 9 Pro",
          introduction: "一亿像素夜景相机，120Hz六档变速高刷屏",
          rate: "1599",
        },
        {
          img: require("@/assets/img/phone/phoneItem1.jpg"),
          name: "小米无线鼠标Le黑色",
          introduction: "简约设计，轻感",
          rate: "29",
        },
        {
          img: require("@/assets/img/phone/phoneItem1.jpg"),
          name: "小米无线鼠标Lie黑色",
          introduction: "简约设，盈握感",
          rate: "290",
        },
        {
          img: require("@/assets/img/phone/phoneItem1.jpg"),
          name: "小米无线鼠标Lite黑色",
          introduction: "简约设计，轻盈握感",
          rate: "294",
        },
        {
          img: require("@/assets/img/phone/phoneItem1.jpg"),
          name: "小米无线鼠标Lite黑色",
          introduction: "简约设计，轻盈握感",
          rate: "295",
        },
        {
          img: require("@/assets/img/phone/phoneItem1.jpg"),
          name: "小米无线鼠标Lite黑色",
          introduction: "简约设计，轻盈握感",
          rate: "298",
        },
        {
          img: require("@/assets/img/phone/phoneItem1.jpg"),
          name: "小米无线鼠标Lit黑色",
          introduction: "简约设计，盈握感",
          rate: "297",
        },
        {
          img: require("@/assets/img/phone/phoneItem1.jpg"),
          name: "小米无线鼠标Lit色",
          introduction: "简约设计轻盈握感",
          rate: "299",
        },
      ],
    };
  },
  methods: {
    info(index) {
      this.$router.push({
        path: "/details",
        query: {
          sj: this.merchandise[index],
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  font-size: 22px;
}
.more {
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  i {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #b0b0b0;
    border-radius: 16px;
    color: #fff;
    padding: 4px;
    font-size: 12px;
    box-sizing: border-box;
    transition: all 0.3s;
    margin-left: 5px;
  }
  &:hover {
    color: #ff6700;
  }
  &:hover i {
    background-color: #ff6700;
  }
}
.left {
  cursor: pointer;
  height: 614px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: translate3d(0, -2px, 0);
  }
}
.right {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  // align-content: space-between;
  height: 100%;
  .item {
    width: 234px;
    height: 300px;
    text-align: center;
    background-color: #fff;
    padding: 20px 0;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.3s;
    margin-left: 14px;
    margin-bottom: 14px;
    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -2px, 0);
    }
    img {
      width: 160px;
      height: 160px;
    }
    .name {
      font-size: 14px;
      margin-top: 12px;
      margin-bottom: 2px;
    }
    .introduction {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #b0b0b0;
      margin-bottom: 10px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .rate {
      color: #ff6700;
      font-size: 14px;
    }
  }
}
</style>
