<template>
  <div>
    <hear> </hear>
    <navs></navs>
    <div class="seckill-head"></div>
    <div class="seckill-box">
      <div class="seckill-banner">
        <div class="item active">
          <span>10:00</span>
          <div>
            <p>抢购中</p>
            <p>距结束 03:28:29</p>
          </div>
        </div>
        <div class="item">
          <span>10:00</span>
          <div>
            <p>即将开始</p>
          </div>
        </div>
        <div class="item">
          <span>10:00</span>
          <div>
            <p>即将开始</p>
          </div>
        </div>
        <div class="item">
          <span>10:00</span>
          <div>
            <p>即将开始</p>
          </div>
        </div>
        <div class="item">
          <span>10:00</span>
          <div>
            <p>即将开始</p>
          </div>
        </div>
      </div>
      <div class="seckill-con">
        <div class="item">
          <div class="img-box">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ec35a9d36a0a75bd899b9401658d56c.jpg"
              alt=""
            />
          </div>
          <div class="txt">
            <div class="name">日常元素抽纸 青春版 24包/箱</div>
            <div class="desc">精选原生竹浆，健康环保</div>
            <div class="process-box">
              <span class="process">
                <span class="progress"></span>
              </span>
              <span class="tx">21%</span>
            </div>
            <div class="rate-box">
              <span>27.90元</span>
              <del>32.9元</del>
            </div>
            <div class="btn">1</div>
          </div>
        </div>
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item">1</div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import hear from "../../layout/hear/hear.vue";
import Navs from "../../layout/nav/nav.vue";
import SiteFooter from "../../layout/site-footer/site-footer.vue";
export default {
  components: {
    hear,
    Navs,
    SiteFooter,
  },
};
</script>

<style lang="less" scoped>
.seckill-head {
  height: 170px;
  background: #f5f5f5
    url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cba013aa492551729f3a42e1668b9d9.jpg)
    50% 0 no-repeat;
  position: relative;
}
.seckill-box {
  background-color: #f5f5f5;
  .seckill-banner {
    position: relative;
    width: 1226px;
    margin: 0 auto;
    margin-top: -68px;
    margin-bottom: 22px;
    display: flex;
    background: #414141;
    .item {
      display: flex;
      width: 20%;
      height: 68px;
      background: #414141;
      color: #fff;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      span {
        font-size: 18px;
        margin-left: 20px;
        font-weight: 700;
      }
      div {
        margin-left: 10px;
        p {
          font-size: 14px;
        }
      }
    }
    .active {
      background: #f1393a;
    }
  }
  .seckill-con {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      justify-content: space-between;
      background: #fff;
      width: 400px;
      height: 190px;
      padding-right: 5px;
      margin-left: 13px;
      margin-bottom: 13px;
      transition: all 0.3s;
      box-sizing: border-box;
      cursor: pointer;
      &:nth-child(3n + 1) {
        margin-left: 0;
      }
      .img-box {
        width: 190px;
        height: 190px;
        img {
          width: 190px;
          height: 190px;
        }
      }
      .txt {
        padding-top: 30px;
        width: 180px;
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .desc {
          color: rgba(0, 0, 0, 0.54);
          margin-top: 7px;
          font-size: 12px;
          height: 32px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .process-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .process {
            width: 146px;
            height: 5px;
            background: #f5f5f5;
            position: relative;
            .progress {
              width: 21%;
              height: 100%;
              background: #f1393a;
              position: absolute;
              transition: all 1s;
            }
          }
          .tx {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.54);
          }
        }
        .rate-box {
          margin-top: 14px;
          span {
            font-size: 16px;
            color: #f1393a;
          }
          del {
            color: rgba(0, 0, 0, 0.54);
            font-size: 12px;
            margin-left: 10px;
          }
        }
      }
      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }
    }
  }
}
</style>
