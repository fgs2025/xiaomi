<template>
  <div class="home-video">
    <div class="top">
      <div class="title">视频</div>
      <div class="more">
        查看全部
        <span class="icon"><i class="iconfont icon-mjiantou-copy"></i></span>
      </div>
    </div>
    <div class="buutom">
      <div class="video-item" v-for="(item, index) in home_video" :key="index">
        <div class="img-box">
          <img :src="item.img" alt="" width="100%" height="100%" />
          <div class="play-icon"><i class="iconfont icon-bofang"></i></div>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home_video: [
        {
          img: require("@/assets/img/home-video/home-video1.jpg"),
          title: "Redmi 10X系列发布会",
          desc: "Redmi 10X系列发布会",
        },
        {
          img: require("@/assets/img/home-video/home-video1.jpg"),
          title: "Redmi 10X",
        },
        {
          img: require("@/assets/img/home-video/home-video1.jpg"),
          title: "Redmi 10X发布会",
        },
        {
          img: require("@/assets/img/home-video/home-video1.jpg"),
          title: "Redmi 10X系列发布会",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home-video {
  width: 1226px;
  // height: 686px;
  // border: 1px solid red;
  margin: 0 auto;
  box-sizing: border-box;
  padding-bottom: 20px;

  .top {
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid red;
    .title {
      font-size: 22px;
    }
    .more {
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        background: #b0b0b0;
        color: #fff;
        border-radius: 16px;
        margin-left: 8px;
        transition: all 0.3s;
        i {
          font-size: 12px;
        }
      }
      &:hover {
        color: #ff6700;
      }
      &:hover .icon {
        background-color: #ff6700;
      }
    }
  }
  .buutom {
    display: flex;
    .video-item {
      width: 296px;
      height: 285px;
      background-color: #fff;
      transition: all 0.3s;
      cursor: pointer;
      .img-box {
        width: 296px;
        height: 180px;
        position: relative;
        margin-bottom: 28px;
        .play-icon {
          width: 36px;
          height: 24px;
          position: absolute;
          left: 10px;
          bottom: 10px;
          border: 2px solid #fff;
          border-radius: 12px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        &:hover .play-icon {
          background-color: #ff6700;
          border-color: #ff6700;
        }
      }
      .title {
        text-align: center;
        font-size: 14px;
        margin-bottom: 6px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .desc {
        text-align: center;
        font-size: 12px;
        color: #b0b0b0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      & + .video-item {
        margin-left: 14px;
      }
      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }
    }
  }
}
</style>
