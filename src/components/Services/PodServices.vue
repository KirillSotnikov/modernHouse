<template>
  <div>
        <app-navbar></app-navbar>
        <section class="serve_container podServices_section">
          <div class="wrapper">
            <!-- <router-link to="/"> -->
              <a class="arrow_back" @click="$router.go(-1)">
                <i class="fas fa-chevron-left"></i>
              </a>
            <!-- </router-link> -->
            <div class="row justify-content-center d-flex d-md-none">
              <div class="serve_container_item col-12">
                <p class="serve_container_title mobile_container_title mt-0">
                  <!-- Окно с длинным названием -->
                  {{service.title}}
                </p>
              </div>
            </div>
            <div class="row podServices_container">
              <div class="serve_container_item  col-12 col-md-6">
                <div>
                  <p class="serve_container_title d-none d-md-block">
                    {{service.title}}
                    <!-- Окно с длинным названием -->
                  </p>
                  <p class="serve_container_text">
                    {{service.description}}
                    <!-- Значимость этих проблем настолько очевидна, что реализация
                    намеченных плановых заданий играет важную роль в формировании
                    позиций, занимаемых участниками в отношении поставленных
                    задач. Задача организации, в особенности же Значимость этих
                    проблем настолько очевидна, что реализация -->
                  </p>
                </div>
                <div class="row podServices_points">
                  <div class="podServices_points_box col-12 col-sm-6"
                  v-for="(advantage, index) in service.advantages"
                  :key="index"
                  >
                    <i class="fas fa-check"></i>
                    <p class="podServices_points_text">{{advantage.title}}</p>
                  </div>
                </div>
              </div>
              <div
                class="serve_container_item serve_container_item_image mb-3 col-12 col-md-6"
              >
                <img :src="service.imgSrc" alt="" class="serve_container_img" />
              </div>
            </div>
            <div class="podServices_slider">
              <slick ref="slick" :options="podServicesOptions">
                <div class="slide" v-for="(slide, index) in service.gallery"
                  :key="index"
                >
                  <img
                    :src="slide.img"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <!-- <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div> -->
              </slick>
              <!-- <div class="slider">
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
                <div class="slide">
                  <img
                    src="/static/img/podservices.c6790b6.png"
                    alt=""
                    class="podServices_slider_img"
                  />
                </div>
              </div> -->
            </div>
          </div>
          <div class="shadow_container"></div>
        </section>
        <app-feedback></app-feedback>
        <app-footer></app-footer>
  </div>
</template>

<script>
import $ from "jquery"
import Slick from 'vue-slick'
import Feedback from "@/components/partials/Feedback";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { 
    Slick,
    'app-feedback': Feedback,
    'app-navbar': Navbar,
    'app-footer': Footer
  },
  data() {
    return {  
      podServicesOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 901,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 701,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              dots: false,
              arrows: true,
              prevArrow: '<i class="fas fa-chevron-left podservices_arrow arrow-left"></i>',
              nextArrow: '<i class="fas fa-chevron-right podservices_arrow arrow-right"></i>'
            }
          }
        ]
      }
    };
  },
  props: ['id'],
  computed: {
    service() {
      const id = this.id
      return this.$store.getters.serviceById(id)
    }
  }
}
</script>

<style lang="scss" scoped>

.podServices_points{
    margin-top: 50px;
    &_box{
        display: flex;
        align-items: center;
        margin: 12px 0;
        i{
            opacity: 0.9;
            color: #0c6704;
            font-size: 30px;
            margin-right: 15px;
        }
    }
    &_text{
        opacity: 0.9;
        color: #000000;
        font-family: "Museo Sans Cyrl -300";
        font-size: 20px;
    }
}
.podServices_container{
    align-items: unset !important;
    .serve_container_img{
        max-height: 420px;
        object-fit: contain;
    }
    .serve_container_item{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
}
.podServices_slider{
    margin-top: 30px;
    &_img{
        width: 90%;
        display: block;
        margin: 0 auto;
        height: 150px;
        object-fit: cover;
    }
    .slick-dots li button{
        width: 20px;
        height: 20px;
        border: 1px solid #910e0e;
        border-radius: 100%;
        transition: all .4s ease-out;
        &::before{
            display: none;
        }
    }
    .slick-dots .slick-active button{
        background: #910e0e;
    }
    .slick-dots{
        bottom: -40px;
        li{
            margin: 0 15px;
        }
    }
}

.podservices_arrow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #910e0e;
    font-size: 32px;
    z-index: 2;
    &.arrow-left{
        left: 15px;
    }
    &.arrow-right{
        right: 15px;
    }
}

@media screen and (max-width: 575px){
    .podServices_points{
        background: #f9f9f9;
        margin-top: 20px;
    }
    .podServices_points_box{
        justify-content: center;
    }
    .podServices_slider_img{
        width: 100%;
    }
    .podServices_slider{
        margin-left: -15px;
        margin-right: -15px;
        margin-top: 0;
        margin-bottom: -6px;
    }
    .podServices_section{
        padding-bottom: 0;
    }
}


.serve_container{
    padding-top: 60px;
    padding-bottom: 50px;
    position: relative;
    overflow: hidden;
    .shadow_container{
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
        height: 6px;
    }
    .wrapper{
        position: relative;
    }
    .row{
        align-items: center;
    }
    &_title{
        color: #3d3d3d;
        font-family: "Museo Sans Cyrl 500";
        font-size: 40px;
        margin-bottom: 20px;
        b{
            color: #910e0e;
        }
    }
    &_text{
        color: #3d3d3d;
        font-family: "Museo Sans Cyrl -300";
        font-size: 18px;
    }
    &_img{
        width: 100%;
    }
}
.about_container{
    background: #f9f9f9;
}

.arrow_back{
    position: absolute;
    top: 12px;
    left: -20px;
    z-index: 10;
    i{
        color: #910e0e;
        font-size: 35px;
    }
}
@media screen and (max-width: 1040px){
    .podcategory_section{
        .sales_card{
            flex-wrap: wrap;
            .box{
                width: 100%;
            }
            &_text{
                width: 100%;
            }
        }
    }
}
@media screen and (max-width:575px){
    .portfolio_section{
        padding-top: 25px;
        background: #f9f9f9;
    }
    .serve_container{
        padding-top: 25px;
    }
    .serve_container .shadow_container{
        display: none;
    }
}
</style>
