<template>
  <div class="bo-left">
    <div class="round">10:00场</div>
    <div class="img-box"><img src="@/assets/img/下载.png" alt="" /></div>
    <div class="desc">距离结束还有</div>
    <div class="countdown">
      <span class="time">{{ Time }}</span>
      <span class="colon">:</span>
      <span class="time">{{ branch }}</span>
      <span class="colon">:</span>
      <span class="time">{{ second }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Time: 2,
      branch: 2,
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

  watch: {
    second(val) {
      if (val < 0) {
        this.branch--;
        this.second = 59;
      }
    },
    branch(val) {
      if (val < 0) {
        this.branch = 59;
        this.Time--;
      }
    },
    Time(val) {
      if (val < 0) {
        clearTimeout(this.trmer);
        this.Time = 0;
        this.branch = 0;
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
  padding-top: 55px;
  box-sizing: border-box;
  text-align: center;
  background: #f1eded;
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
