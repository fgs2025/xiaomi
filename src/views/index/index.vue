<template>
  <div>
    <index></index>
    <banner></banner>
    <hear></hear>
    <navs></navs>
    <swiper></swiper>
    <channel></channel>
    <div class="main">
      <flashsale></flashsale>
      <advertisement-1></advertisement-1>
      <phone></phone>
      <advertisement-2></advertisement-2>
      <ceshi
        v-for="(item, index) in ceshi_arr"
        :key="index"
        :item="item"
      ></ceshi>
      <home-video></home-video>
      <site-footer></site-footer>
    </div>
  </div>
</template>

<script>
import siteFooter from "../../layout/site-footer/site-footer.vue";
import hear from "../../layout/hear/hear.vue";
import navs from "../../layout/nav/nav.vue";
import Advertisement1 from "./components/advertisement/advertisement1.vue";
import Advertisement2 from "./components/advertisement/advertisement2.vue";
import Banner from "./components/Banner/Banner.vue";
import Channel from "./components/channel/channel.vue";
import Flashsale from "./components/flashsale/flashsale.vue";
import HomeVideo from "./components/home-video/home-video.vue";
import Phone from "./components/phone/phone.vue";
import Swiper from "./components/swiper/swiper.vue";
import index from "../../layout/right-nav/index.vue";
import Ceshi from "./components/ceshi/ceshi.vue";
export default {
  data() {
    return {
      ceshi_arr: [
        {
          title: "家电",
          left_img: "",
          left_img2: "",
          img: "",
          item_arr: [
            {
              titles: "热门",
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
              ],
            },
            {
              titles: "电视影音",
              active: false,
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
          ],
        },
        {
          title: "智能",
          left_img: "",
          left_img2: "",
          img: "",
          item_arr: [
            {
              titles: "热门",
              active: true,
              merchandise: [
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
              titles: "电视",
              active: false,
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
          ],
        },
        {
          title: "搭配",
          left_img: "",
          left_img2: "",
          img: "",
          item_arr: [
            {
              titles: "热门",
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
              titles: "电视",
              active: false,
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
          ],
        },
      ],
    };
  },
  components: {
    hear,
    navs,
    Advertisement1,
    Advertisement2,
    Swiper,
    Phone,
    Flashsale,
    Channel,
    Banner,
    HomeVideo,
    siteFooter,
    index,
    Ceshi,
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;
}
</style>
