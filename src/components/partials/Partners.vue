<template>
      <section class="partners">
        <p class="partners_title">Наши партнеры</p>
        <div class="partners_slider">
          <slick ref="slick" :options="partnersSliderOptions">
            <div class="slide"
              v-for="(partner, index) in partners"
              :key="index"
            >
              <img :src="partner.imgSrc" alt="" class="partners_slider_img" />
            </div>
          </slick>
        </div>
        <div class="partners_slider_mobile">
          <slick ref="slick" :options="partnersMobileSliderOptions">
            <div class="slide">
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
            </div>
            <div class="slide">
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
            </div>
            <div class="slide">
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
            </div>
            <div class="slide">
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
            </div>
            <div class="slide">
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
            </div>
            <div class="slide">
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
              <img src="/static/img/partners.accaf6d.png" alt="" class="partners_slider_mobile_img" />
            </div>
          </slick>
        </div>
      </section>
</template>

<script>
import $ from "jquery"
import Slick from 'vue-slick'
export default {
  components: { 
    Slick
  },
  data() {
    return {
      partnersSliderOptions: {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
              breakpoint: 901,
              settings: {
                slidesToShow: 3,
              }
            }
        ]
      },
      partnersMobileSliderOptions: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    };
  },
  computed: {
    partners() {
      return this.$store.getters.partners
    }
  }
}
</script>

<style lang="scss" scoped>
.partners {
  padding: 60px 0;
  padding-bottom: 50px;
  &_title {
    margin-bottom: 60px;
    color: #3d3d3d;
    font-family: "Museo Sans Cyrl 500";
    font-size: 40px;
    text-align: center;
  }
  .partners_slider {
    cursor: ew-resize;
    &_img {
      width: 90%;
      margin: 0 auto;
    }
    &_mobile{
        display: none;
        &_img{
            width: 90%;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
        }
    }
  }
}
@media screen and (max-width: 575px){
  .partners_title{
      font-size: 30px;
  }
  .wrapper{
    padding-left: 15px;
    padding-right: 15px;
    }
    .partners_slider{
        display: none;
    }
    .partners .partners_slider_mobile{
        display: block;
    }
}
</style>
