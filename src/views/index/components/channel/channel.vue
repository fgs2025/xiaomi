<template>
  <div class="channel-wrap">
    <div class="left">
      <div class="box" v-for="(item, index) in channel_arr" :key="index">
        <div>
          <img :src="item.img" alt="" width="24" height="24" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div v-for="(item, index) in gg" :key="index" >
        <img :src="item" alt="" width="100%" height="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channel_arr: [
        {
          title: "小米秒杀",
          img: require("@/assets/img/channel/icon1.png"),
        },
        {
          title: "企业团购",
          img: require("@/assets/img/channel/icon2.png"),
        },
        {
          title: "F码通道",
          img: require("@/assets/img/channel/icon3.png"),
        },
        {
          title: "米粉卡",
          img: require("@/assets/img/channel/icon4.png"),
        },
        {
          title: "以旧换新",
          img: require("@/assets/img/channel/icon5.png"),
        },
        {
          title: "话费充值",
          img: require("@/assets/img/channel/icon6.png"),
        },
      ],
      gg: [
        require("@/assets/img/channel/gg1.jpg"),
        require("@/assets/img/channel/gg2.jpg"),
        require("@/assets/img/channel/gg3.jpg"),
      ],
    };
  },
  methods: {
    // info(index){
    //   this.$router.push({
    //     name:'login',
    //     query:{img:this.gg[index]}
    //   })
    // }
  },
};
</script>

<style lang="less" scoped>
.channel-wrap {
  width: 1226px;
  height: 170px;
  margin: 0 auto;
  margin-top: 14px;
  display: flex;
  margin-bottom: 20px;
  .left {
    width: 234px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    // align-items: center;
    padding: 0 3px;
    box-sizing: border-box;
    background-color: #5f5750;
    .box {
      width: 76px;
      height: 82px;
      font-size: 12px;
      padding: 0 3px;
      box-sizing: border-box;
      position: relative;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        cursor: pointer;
        opacity: 0.7;
        box-sizing: border-box;
        p {
          margin-top: 5px;
          color: #fff;
        }
        &:hover {
          opacity: 1;
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 70px;
        background: #665e57;
        left: 0;
        top: 6px;
      }
      &::before {
        content: "";
        position: absolute;
        background: #665e57;
        top: 3px;
        left: 6px;
        width: 64px;
        height: 1px;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    margin-left: 14px;
    div {
      width: 316px;
      height: 170px;
      cursor: pointer;
      & + div {
        margin-left: 15px;
      }
    }
  }
}
</style>
