<template>
  <div class="address-box">
          <div class="icon-box"><i class="iconfont icon-sousuo"></i></div>
          <div class="address-con">
            <div class="top">
              <span>广东</span>
              <span>湛江市</span>
              <span>雷州市</span>
              <span class="edit">修改</span>
            </div>
            <div class="desc">有现货</div>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.address-box {
      padding: 30px 50px 30px 20px;
      margin: 20px 0;
      background: #fafafa;
      border: 1px solid #e0e0e0;
      display: flex;
      .address-con {
        margin-left: 20px;
        .top {
          span {
            font-size: 14px;
            margin-right: 14px;
          }
          .edit {
            color: #ff6700;
            cursor: pointer;
          }
        }
        .desc {
          font-size: 14px;
          color: #ff6700;
        }
      }
    }
</style>