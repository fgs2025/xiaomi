<template>
  <div class="bo-left">
    <div class="round">14:00场</div>
    <div class="img-box"><img src="@/assets/img/flashsale/下载.png" alt="" /></div>
    <div class="desc">距离结束还有</div>
    <div class="countdown">
      <span class="time">{{ hours }}</span>
      <span class="colon">:</span>
      <span class="time">{{ minutes }}</span>
      <span class="colon">:</span>
      <span class="time">{{ seconds }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: 1,
      minute: 1,
      second: 60,
      trmer: null,
    };
  },
  mounted() {
    this.auto();
  },
  methods: {
    auto() {
      this.trmer = setTimeout(() => {
        this.second--;
        this.auto();
      }, 1000);
    },
  },
  computed: {
    hours() {
      if (this.hour < 10) {
        return "0" + this.hour;
      } else {
        return this.hour;
      }
    },
    minutes() {
      if (this.minute < 10) {
        return "0" + this.minute;
      } else {
        return this.minute;
      }
    },
    seconds() {
      if (this.second < 10) {
        return "0" + this.second;
      } else {
        return this.second;
      }
    },
  },
  watch: {
    second(val) {
      if (val < 0) {
        this.minute--;
        this.second = 59;
      }
    },
    minute(val) {
      if (val < 0) {
        this.minute = 59;
        this.hour--;
      }
    },
    hour(val) {
      if (val < 0) {
        clearTimeout(this.trmer);
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.bo-left {
  width: 234px;
  height: 300px;
  border-top: 1px solid #e53935;
  padding-top: 35px;
  box-sizing: border-box;
  text-align: center;
  background: #f1eded;
  flex-shrink: 0;
  .round {
    color: red;
    font-size: 21px;
  }
  .img-box {
    margin: 25px 0;
  }
  .desc {
    color: rgba(0, 0, 0, 0.54);
    font-size: 15px;
  }
  .countdown {
    margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .time {
    width: 46px;
    height: 46px;
    display: inline-block;
    background: #605751;
    color: #fff;
    font-size: 24px;
    line-height: 46px;
  }
  .colon {
    display: inline-block;
    width: 15px;
    height: 46px;
    line-height: 46px;
    color: #605751;
    font-size: 28px;
  }
}
</style>
