<template>
  <div>
    <app-navbar v-if="podCategories.length != 0"></app-navbar>
    <div v-if="podCategories.length != 0">
      <section class="main_slider">
        <div class="mouse_box">
          <div class="mouse_box_line"></div>
          <img src="../assets/img/mouse_icon.png" alt class="mouse_box_icon">
        </div>
        <slick ref="slick" :options="mainSliderOptions">
          <div
            v-for="(service, index) in podCategories"
            :key="index"
            class="slide"
            :style="service.backgroundStyle"
          >
            <div
              class="wrapper main_slider_container"
              style="background:url('/static/img/main_slider1.d7da8ad.png') center/cover no-repeat"
            >
              <div class="main_slider_box">
                <p class="main_slider_title">{{service.title}}</p>
                <p class="main_slider_text">
                  {{service.description}}
                </p>
                <router-link :to="'/pod-services/' + service.id">
                  <a class="main_slider_btn">Узнать больше</a>
                </router-link>
              </div>
            </div>
          </div>
        </slick>
      </section>
      <section class="services">
        <div class="wrapper">
          <div class="services_title">Услуги</div>
          <div class="services_container row">
            <div 
            class="services_container_box col-12 col-sm-6 col-lg-4" 
            v-for="(service, index) in podCategories"
            :key="index"
            >
              <a class="services_container_card">
                <router-link :to="'/pod-services/' + service.id">
                  <img :src="service.imgSrc" alt class="services_container_card_img">
                  <p class="services_container_card_title">{{service.title}}</p>
                  <div class="services_line"></div>
                  <p
                    class="services_container_card_text"
                  >
                    {{service.description}}
                  </p>
                </router-link>
              </a>
            </div>
          </div>
        </div>
      </section>
      <app-advantages></app-advantages>
      <app-partners></app-partners>
      <app-feedback></app-feedback>
    </div>
    <app-loader v-else></app-loader>
    <app-footer v-if="podCategories.length != 0"></app-footer>
  </div>
</template>

<script>
import $ from "jquery";
import Slick from "vue-slick";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Advantages from "@/components/partials/Advantages";
import Feedback from "@/components/partials/Feedback";
import Partners from "@/components/partials/Partners";
import Loader from "@/components/partials/Loader";
export default {
  components: {
    Slick,
    "app-advantages": Advantages,
    "app-feedback": Feedback,
    "app-partners": Partners,
    'app-navbar': Navbar,
    'app-footer': Footer,
    'app-loader': Loader
  },
  data() {
    return {
      mainSliderOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // vertical: true,
        // verticalSwiping: true,
        // dots: true,
        // customPaging: function(slider, i) {
        //   var thumb = $(slider.$slides[i]).data();
        //   return "<a>0" + (i + 1) + "</a>";
        // },
        responsive: [
          {
            breakpoint: 769,
            settings: {
              vertical: false,
              verticalSwiping: false
            }
          }
        ]
      }
    };
  },
  computed: {
    podCategories () {
      return this.$store.getters.podCategories
    },
    servicePromo () {
      return this.$store.getters.servicePromo
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$default-flex-direction: row !default;

@mixin flex($flex-direction, $justify-content, $align-items) {
  display: flex;
  flex-direction: $flex-direction;
  justify-content: $justify-content;
  align-items: $align-items;
}

body.nonScroll {
  overflow: hidden;
}

.mouse_box {
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  @include flex(column, center, center);
  z-index: 3;
  &_line {
    width: 2px;
    height: 68px;
    background-color: #7b1113;
    margin-bottom: 30px;
  }
  &_icon {
    animation: 2s ease-out infinite 0s mouseMove;
  }
}

@keyframes mouseMove {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.main_slider {
  position: relative;
  .slider {
    margin-bottom: 0;
  }
  .slick-slide {
    background: red;
    > div {
      display: flex;
      align-items: center;
    }
  }
  .slick-dots {
    bottom: unset;
    top: 50%;
    transform: translateY(-50%);
    right: 5vw;
    width: auto;
    @include flex(column, center, center);
    li {
      margin: 20px 0;
      &.slick-active {
        a {
          font-family: "Museo Sans Cyrl 500";
          &::after {
            height: 2px;
          }
        }
      }
      a {
        color: #910e0e;
        font-family: "Museo Sans Cyrl -300";
        font-size: 24px;
        position: relative;
        transition: all 0.3s ease-out;
        &:after {
          position: absolute;
          left: 100%;
          top: 50%;
          right: 0;
          transform: translate(10px, -50%);
          content: "";
          height: 1px;
          width: 10px;
          background: #910e0e;
          transition: all 0.3s ease-out;
        }
        &:hover {
          color: #910e0e;
        }
      }
    }
  }
  &_container {
    // min-height: calc(100vh - 131px);
    min-height: 100vh;
    @include flex(row, flex-start, center);
    padding-right: 10vw;
  }
  &_box {
    max-width: 460px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &_title {
    color: #3d3d3d;
    font-family: "Museo Sans Cyrl 500";
    font-size: 70px;
    margin-bottom: 20px;
  }
  &_text {
    color: #3d3d3d;
    font-family: "Museo Sans Cyrl -300";
    font-size: 24px;
    margin-bottom: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
  &_btn {
    opacity: 0.9;
    color: #ffffff;
    font-family: "Museo Sans Cyrl -300";
    font-size: 20px;
    padding: 13px 30px;
    background-color: #7b1113;
    &:hover {
      color: #fff;
    }
  }
}

.services {
  padding: 60px 0;
  &_line {
    width: 164px;
    height: 1px;
    margin: 0 5px;
    background-color: #910e0e;
  }
  &_title {
    color: #3d3d3d;
    font-family: "Museo Sans Cyrl 500";
    font-size: 40px;
    margin-bottom: 60px;
    text-align: center;
  }
  &_container {
    &_card {
      padding: 5px;
      padding-bottom: 10px;
      margin-bottom: 20px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      background-color: #ffffff;
      transition: all 0.4s ease-out;
      border: 1px solid transparent;
      cursor: pointer;
      display: block;
      text-decoration: none !important;
      &:hover {
        border: 1px solid #910e0e;
        box-shadow: none;
      }
      &_img {
        width: 100%;
        height: 226px;
        object-fit: cover;
        margin-bottom: 10px;
      }
      &_title {
        color: #3d3d3d;
        font-family: "Museo Sans Cyrl 500";
        font-size: 20px;
        margin: 0 5px;
        margin-bottom: 7px;
      }
      &_text {
        margin: 0 5px;
        margin-top: 10px;
        color: #3d3d3d;
        font-family: "Museo Sans Cyrl -300";
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .main_slider_container {
    align-items: flex-start;
    padding-top: 15vh;
    justify-content: center;
    padding-right: 15px;
  }
  .main_slider_title {
    font-size: 40px;
    // font-size: 32px;
    text-align: center;
  }
  .main_slider_text {
    font-size: 24px;
    // font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .main_slider_btn {
    padding: 10px 20px;
  }
  .main_slider_box {
    align-items: center;
  }
  .main_slider .slick-dots {
    bottom: 10vh;
    flex-direction: row;
    right: unset;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    top: unset;
    li {
      margin: 0 30px;
    }
  }
  .mouse_box {
    display: none;
  }
}

@media screen and (min-width: 769px) {
  .main_slider_container {
    background: none !important;
  }
}

@media screen and (max-width: 575px) {
  .advantages_box {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .main_slider_container {
    padding-top: 100px;
  }
  .main_slider_text {
    font-size: 18px;
  }
  .main_slider_title {
    font-size: 32px;
  }
  .services_title {
    font-size: 30px;
    margin-bottom: 30px;
  }
  .services {
    padding-top: 30px;
    padding-bottom: 0px;
  }
  .advantages_title_text {
    font-size: 30px;
    margin: 0 15px;
  }
  .header_box_img {
    width: 110px;
  }
  .header_border_left,
  .header_border_right {
    height: 11px;
  }
  .header_box_img_text {
    max-width: 160px;
  }
  .burger_btn_item {
    width: 21px;
  }
  .burger_btn {
    margin-top: 10px;
  }
  .header .wrapper {
    padding-top: 8px;
  }
}

@media screen and (max-width: 360px) {
  .header_box_img {
    width: 90px;
  }
  .header_box_img_text {
    max-width: 140px;
  }
  .header_border_left,
  .header_border_right {
    height: 9px;
  }
}
</style>
