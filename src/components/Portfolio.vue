<template>
  <div>
    <app-navbar></app-navbar>
    <section class="serve_container portfolio_section">
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
          <div class="row justify-content-between d-none d-md-flex">
            <div class="serve_container_item">
              <p class="serve_container_title">Современный дом <b>это:</b></p>
            </div>
            <div class="portfolio_container_list">
              <a href="" class="portfolio_arrow">
                <i class="fas fa-chevron-left"></i>
              </a>
              <a href="" class="portfolio_container_list_item active">1</a>
              <a href="" class="portfolio_container_list_item">2</a>
              <a href="" class="portfolio_container_list_item">3</a>
              <a href="" class="portfolio_container_list_item">...</a>
              <a href="" class="portfolio_container_list_item">25</a>
              <a href="" class="portfolio_arrow active">
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div class="services_container row">
            <div class="services_container_box col-12 col-sm-6 col-lg-3"
                v-for="(work, index) in portfolioList"
                :key="index">
              <a class="services_container_card"
              >
                <router-link :to="'/portfolio-work/' + work.id">
                  <img
                    :src="work.imgSrc"
                    alt=""
                    class="services_container_card_img"
                  />
                  <p class="services_container_card_title">{{work.title}}</p>
                  <div class="services_line"></div>
                  <p class="services_container_card_text">
                    {{work.description}}
                  </p>
                </router-link>
              </a>
            </div>
          </div>
          <div class="portfolio_container_list text-center d-block d-md-none">
            <a href="" class="portfolio_arrow">
              <i class="fas fa-chevron-left"></i>
            </a>
            <a href="" class="portfolio_container_list_item active">1</a>
            <a href="" class="portfolio_container_list_item">2</a>
            <a href="" class="portfolio_container_list_item">3</a>
            <a href="" class="portfolio_container_list_item">...</a>
            <a href="" class="portfolio_container_list_item">25</a>
            <a href="" class="portfolio_arrow active">
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div class="shadow_container"></div>
      </section>
    <app-feedback></app-feedback>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Feedback from "@/components/partials/Feedback";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    "app-feedback": Feedback,
    'app-navbar': Navbar,
    'app-footer': Footer
  },
  computed: {
    portfolioList() {
      return this.$store.getters.portfolioList
    }
  }
}
</script>

<style lang="scss" scoped>
.serve_container .row {
    align-items: center;
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
.portfolio_container_list{
    .portfolio_arrow{
        margin: 0 10px;
        i{
            color: #3d3d3d;
            font-size: 20px;
        }
        &.active{
            i{
                color: #910e0e;
            }
        }
    }
    &_item{
        opacity: 0.9;
        color: #3d3d3d;
        font-family: "Museo Sans Cyrl 500";
        font-size: 20px;
        margin: 0 10px;
        &:hover{
            color: #3d3d3d;
        }
        &.active{
            color: #910e0e;
        }
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
        -webkit-line-clamp: 3;
      }
    }
  }
}
</style>
