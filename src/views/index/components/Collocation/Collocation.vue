<template>
  <homeBrickBox>
    <template v-slot:title>
      <div class="title">搭配</div>
    </template>
    <template v-slot:more>
      <div class="more">
        <div
          :class="[item.active ? 'active' : '']"
          v-for="(item, index) in Collocation"
          :key="index"
          @mouseenter="touch(index)"
          @mouseleave="leave()"
        >
          {{ item.title }}
        </div>
      </div>
    </template>
    <template v-slot:left>
      <div class="left">
        <div>
          <img
            src="@/assets/img/appliance/appliance_left1.jpg"
            alt=""
            height="100%"
          />
        </div>
        <div>
          <img
            src="@/assets/img/appliance/appliance_left2.jpg"
            alt=""
            height="100%"
          />
        </div>
      </div>
    </template>
    <template v-slot:right>
      <div class="right">
        <div
          class="item"
          v-for="(item, index) in Collocation[index].merchandise.slice(0, 7)"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <div class="name">{{ item.name }}</div>
          <div class="introduction">{{ item.introduction }}</div>
          <div class="rate">{{ item.rate }}元</div>
        </div>

        <div class="item-more">
          <div
            class="more-top"
            v-if="Collocation[index].merchandise.length > 7"
          >
            <div class="txt">
              <p>{{ Collocation[index].merchandise[7].name }}</p>
              <p class="rate">{{ Collocation[index].merchandise[7].rate }}元</p>
            </div>
            <div class="img">
              <img
                :src="Collocation[index].merchandise[7].img"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div class="more-bottom">
            <div>
              浏览更多
              <p>热门</p>
            </div>
            <i>1</i>
          </div>
        </div>
      </div>
    </template>
  </homeBrickBox>
</template>

<script>
export default {
  data() {
    return {
      Collocation: [
        {
          title: "热门",
          active: true,
          merchandise: [
            {
              img: require("@/assets/img/phone/phoneItem1.jpg"),
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
        },
        {
          title: "耳机音箱",
          active: false,
          merchandise: [
            {
              img: require("@/assets/img/phone/phoneItem1.jpg"),
              name: "Note 9 Pro",
              introduction: "一亿像素夜景相机",
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
        },
      ],
      index: 0,
    };
  },
  methods: {
    touch(index) {
      this.Collocation.forEach((row) => (row.active = false));
      this.Collocation[index].active = true;
      this.index = index;
    },
    leave() {},
  },
};
</script>

<style lang="less" scoped>
.title {
  font-size: 22px;
}
.more {
  display: flex;
  div {
    cursor: pointer;
    line-height: 24px;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
    & + div {
      margin-left: 30px;
    }
  }
  .active {
    color: #ff6700;
    border-bottom: 2px solid #ff6700;
  }
}
.left {
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    height: 300px;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -2px, 0);
    }
  }
}
.right {
  display: flex;
  flex-wrap: wrap;
  //   justify-content: space-between;
  //   align-content: space-between;
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
  .item-more {
    width: 234px;
    height: 300px;

    margin-left: 14px;
    margin-bottom: 14px;
    .more-top {
      height: 143px;
      margin-bottom: 14px;
      display: flex;
      padding: 30px 20px 0 30px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.3s;
      background-color: #fff;
      .txt {
        width: 94px;
        font-size: 14px;
        line-height: 20px;
        .rate {
          margin-top: 5px;
          color: #ff6700;
        }
      }
      .img {
        width: 80px;
        height: 80px;
        margin-left: 8px;
      }
      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }
    }
    .more-bottom {
      height: 143px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.3s;
      background-color: #fff;
      div {
        font-size: 18px;
        p {
          font-size: 12px;
          margin-top: 5px;
          color: #757575;
        }
      }
      i {
        width: 48px;
        height: 48px;
        line-height: 46px;
        border: 1px solid #ff6700;
        border-radius: 50%;
        text-align: center;
      }
      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }
    }
  }
}
</style>
