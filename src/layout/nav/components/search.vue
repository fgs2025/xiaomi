<template>
  <div class="search">
    <input
      type="text"
      :class="[border ? 'border' : '', focus ? 'focus' : '']"
      :placeholder="recommend[index]"
      @mouseenter="border = true"
      @mouseleave="border = false"
      @focus="(focus = true), (border = false)"
      @blur="(focus = false), (border = true)"
    />
    <div :class="['search-btn', border ? 'border' : '', focus ? 'focus' : '']">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="history" v-if="focus">
      <div v-for="(item, index) in history" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommend: ["家电", "手机", "电脑"],
      history: ["小米10", "小米9", "小米8", "小米7"],
      border: false,
      focus: false,
      index: 0,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.index == this.recommend.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    }, 3000);
  },

};
</script>

<style lang="less" scoped>
.search {
  display: flex;
  position: relative;
  input {
    background: none;
    outline: none;
    border: 1px solid #e0e0e0;
    width: 245px;
    font-size: 14px;
    padding-left: 10px;
    transition: all 0.3s;
    box-sizing: border-box;
  }
  .search-btn {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    box-sizing: border-box;
    border: 1px solid #e0e0e0;
    border-left: transparent;
    cursor: pointer;
    transition: all 0.3s;
    i{
      font-weight: 800;
      font-size: 20px;
    }
    &:hover {
      background-color: #ff6700;
      color: #fff;
    }
  }
  .border {
    border-color: #b0b0b0;
  }
  .focus {
    border-color: #ff6700;
  }
  .history {
    width: 245px;
    position: absolute;
    top: 49px;
    border: 1px solid #ff6700;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 2;
    div {
      line-height: 30px;
      font-size: 12px;
      padding-left: 10px;
      color: #424242;
      box-sizing: border-box;
      &:hover {
        background-color: #ccc;
        cursor: pointer;
        transition: all 0.3s;
      }
    }
  }
}
</style>
