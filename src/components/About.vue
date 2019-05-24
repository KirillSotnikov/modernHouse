<template>
  <div>
      <app-navbar></app-navbar>
      <section class="serve_container about_container">
        <div class="wrapper">
          <router-link to="/">
            <a class="arrow_back">
              <i class="fas fa-chevron-left"></i>
            </a>
          </router-link>
          <div class="row justify-content-center d-flex d-md-none">
            <div class="serve_container_item col-12">
              <p class="serve_container_title mobile_container_title">
                Современный дом <b>это:</b>
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="serve_container_item col-12 col-md-6">
              <p class="serve_container_title  d-none d-md-block">
                Современный дом <b>это:</b>
              </p>
              <p class="serve_container_text">
                Значимость этих проблем настолько очевидна, что реализация
                намеченных плановых заданий играет важную роль в формировании
                позиций, занимаемых участниками в отношении поставленных задач.
                Задача организации, в особенности же Значимость этих проблем
                настолько очевидна, что реализация Значимость этих проблем
                настолько очевидна, что реализация намеченных плановых заданий
                играет важную роль в формировании позиций, занимаемых
                участниками в отношении поставленных задач. Задача организации,
                в особенности же Значимость этих проблем настолько очевидна, что
                реализация Значимость этих проблем настолько очевидна, что
                реализация намеченных плановых заданий играет важную роль в
                формировании позиций, занимаемых участниками в отношении
                поставленных задач. Задача организации, в особенности же
                Значимость этих проблем
              </p>
            </div>
            <div
              class="serve_container_item serve_container_item_image mb-4 col-12 col-md-6"
            >
              <img src="/static/img/about.df072d6.png" alt="" class="serve_container_img" />
            </div>
          </div>
        </div>
      </section>
    <app-advantages color="about_advantages"></app-advantages>
    <app-feedback></app-feedback>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Advantages from "@/components/partials/Advantages";
import Feedback from "@/components/partials/Feedback";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    "app-advantages": Advantages,
    "app-feedback": Feedback,
    'app-navbar': Navbar,
    'app-footer': Footer
  },
}
</script>

<style lang="scss" scoped>
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
@media screen and (max-width: 1260px){
    .about_container{
        padding-left: 30px;
    }
}
@media screen and (max-width:767px){
    .serve_container_item_image{
        order: -1;
    }
    .about_container{
        padding-left: 0;
    }
    .mobile_container_title{
        margin-left: 30px;
    }
    .arrow_back{
        left: 20px;
    }
}

@media screen and (max-width: 575px){
    .serve_container_title{
        font-size: 24px;
        margin-top: 10px;
        text-align: center;
    }
    .about_container{
        padding-top: 20px;
    }
}
</style>
