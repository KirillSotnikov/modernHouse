<template>
<div>
    <header class="header">
      <div class="header_container">
        <div class="wrapper">
          <router-link to="/">
            <a class="header_box">
              <div class="box">
                <img src="https://firebasestorage.googleapis.com/v0/b/modern-house.appspot.com/o/common%2Flogo.png?alt=media&token=277337cb-0979-4d17-8ba7-5825b1db1c08" alt="" class="header_box_img" />
                <div class="header_border_right"></div>
                <div class="header_border_left"></div>
              </div>
              <img src="https://firebasestorage.googleapis.com/v0/b/modern-house.appspot.com/o/common%2Flogo_text.png?alt=media&token=85c64480-3506-4499-8dc0-53f22e4d104d" alt="" class="header_box_img_text" />
            </a>
          </router-link>
          <div class="header_box header_box_info">
            <p class="header_box_name">Богдан:</p>
            <a href="tel:(063) 848 22 10" class="header_box_row">
              <i class="fas fa-mobile-alt"></i>
              <p class="header_box_row_link">(063) 848 22 10</p>
            </a>
          </div>
          <div class="header_box header_box_info">
            <p class="header_box_name">Viber</p>
            <a href="tel:(063) 848 22 10" class="header_box_row">
              <i class="fas fa-mobile-alt"></i>
              <p class="header_box_row_link">(063) 848 22 10</p>
            </a>
          </div>
          <div class="header_box header_box_info">
            <p class="header_box_name">Дмитрий:</p>
            <a href="tel:(050) 611 57 56" class="header_box_row">
              <i class="fas fa-mobile-alt"></i>
              <p class="header_box_row_link">(050) 611 57 56</p>
            </a>
          </div>
          <div class="header_box header_box_info">
            <p class="header_box_name">Viber</p>
            <a href="tel:(093) 823 94 53" class="header_box_row">
              <i class="fas fa-mobile-alt"></i>
              <p class="header_box_row_link">(093) 823 94 53</p>
            </a>
          </div>
          <a class="header_box header_box_tube">
            <img src="img/youtube.png" alt="" class="header_box_info_youtube" />
          </a>
          <a 
            @click="toggleMenuClass"
            :class="{active: menuClass}"
            class="burger_btn"
          >
            <!-- <img src="img/menu_burger.svg" alt="" class="burger_btn_item"> -->
            <span class="burger_btn_item"></span>
            <span class="burger_btn_item"></span>
            <span class="burger_btn_item"></span>
          </a>
        </div>
      </div>
      <div class="header_container header_list">
        <div class="header_list_shadow"></div>
        <div class="wrapper space_ar">
          <div class="header_container_link">
            Услуги
            <i class="fas fa-sort-down"></i>
            <div class="dropdown_menu">
              <router-link  v-for="(link, index) in podCategories" :key="index"
              class="dropdown_menu_item" 
              :to="'/pod-services/' + link.id">{{link.title}}</router-link>
              <!-- <router-link  class="dropdown_menu_item" to="/pod-services">Двери</router-link>
              <router-link  class="dropdown_menu_item" to="/pod-services">Ворота</router-link>
              <router-link  class="dropdown_menu_item" to="/pod-services">Роллеты</router-link>
              <router-link  class="dropdown_menu_item" to="/pod-services">Кровля</router-link>
              <router-link  class="dropdown_menu_item" to="/pod-services">Потолки и штукатурки</router-link> -->
            </div>
          </div>
          <router-link to="/about">
            <a class="header_container_link">О нас</a>
          </router-link>
          <router-link to="/portfolio">
            <a class="header_container_link">Портфолио</a>
          </router-link>
          <router-link to="/sales">
            <a class="header_container_link">Акции</a>
          </router-link>
        </div>
      </div>
    </header>
    <app-menu :menuClass="menuClass"></app-menu>
</div>
</template>

<script>
import Menu from '@/components/partials/Menu'
export default {
  data () {
    return {
      menuClass: false
    }
  },
  components: {
    'app-menu': Menu
  },
  methods: {
    toggleMenuClass () {
      this.menuClass = !this.menuClass
    }
  },
  computed: {
    podCategories() {
      return this.$store.getters.podCategories
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    position: relative;
    z-index: 99;
    background: #fff;
    &.fixed_head{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }
    &_container{
        &.header_list{
            background-color: #fdf4f5;
            position: relative;
            .header_list_shadow{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 4px;
                box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
                z-index: 5;
                pointer-events: none;
            }
        }
        &_link{
            color: #3d3d3d;
            font-family: "Museo Sans Cyrl 500";
            font-size: 16px;
            padding: 8px;
            display: flex;
            position: relative;
            cursor: pointer;
            &:hover{
                color: #3d3d3d;
                text-decoration: none;
                .dropdown_menu{
                    opacity: 1;
                    visibility: visible;
                }
                i{
                    transform: rotate(-180deg);
                }
            }
            i{
                margin-left: 5px;
                color: #3d3d3d;
                transition: all .3s ease-out;
            }
            .dropdown_menu{
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                width: 200px;
                padding-top: 4px;
                z-index: 2;
                background: #fdf4f5;
                opacity: 0;
                visibility: hidden;
                transition: all .3s ease-out;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-bottom: 3px solid #910e0e;
                &_item{
                    color: #3d3d3d;
                    font-family: "Museo Sans Cyrl 500";
                    font-size: 16px;
                    padding: 5px 8px;
                    text-decoration: none !important;
                    position: relative;
                    &:hover{
                        &::after{
                            width: 60px;
                        }
                    }
                    &:last-child::after{
                        display: none;
                    }
                    &::after{
                        position: absolute;
                        content: '';
                        height: 1px;
                        width: 30px;
                        background: #3d3d3d;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        transition: all .4s ease-out;
                    }
                }
            }
        }
    }
    &_border_right{
        position: absolute;
        bottom: 0;
        left: 100%;
        transform: translateX(-20px);
        width: 100vw;
        height: 15px;
        background-color: #910e0e;
        z-index: 1;
    }
    &_border_left{
        position: absolute;
        bottom: 0;
        right: 100%;
        transform: translateX(20px);
        width: 100vw;
        height: 15px;
        background-color: #910e0e;
        z-index: 1;
    }
    .wrapper{
        display: flex;
        align-items: flex-start;
        max-width: 1600px;
        justify-content: space-between;
        padding-top: 15px;
    }
    &_box{
        display: flex;
        align-items: flex-start;
        .box{
            position: relative;
        }
        &_tube{
            align-items: center;
            height: 45px;
        }
        &_img{
            width: 163px;
            position: relative;
            z-index: 2;
            &_text{

            }
        }
        &_info{
            flex-direction: column;
            &_youtube{
                
            }
        }
        &_name{
            color: #3d3d3d;
            font-family: "Museo Sans Cyrl 100";
            font-size: 14px;
        }
        &_row{
            display: flex;
            align-items: center;
            i{
                color: #910e0e;
                font-size: 20px;
                margin-right: 10px;
            }
            &_link{
                color: #000000;
                font-family: "Museo Sans Cyrl 100";
                font-size: 16px;
            }
        }
    }
}
.burger_btn{
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 22px;
    height: 12px;
    overflow: hidden;
    transition: all .5s ease-out;
    &.active{
        overflow: visible;
        height: 16px;
        .burger_btn_item{
            background-color: #3d3d3d;
            &:nth-child(1){
                transform: rotate(45deg);
                transform-origin: left top;
                width: 21px;
            }
            &:nth-child(2){
                opacity: 0;
                visibility: hidden;
                transform: translateX(-40px);
            }
            &:nth-child(3){
                transform: rotate(-45deg);
                transform-origin: left bottom;
                width: 21px;
            }
        }
    }
    &_item{
        height: 2px;
        background: #910e0e;
        transform: skewX(-45deg) translateX(0);
        transition: all .5s ease-out;
        &:nth-child(1){
            width: 21px;
        }
        &:nth-child(2){
            width: 19px;
        }
        &:nth-child(3){
            width: 17px;
        }
    }
}

@media screen and (max-width:1300px){
    .header_box_img_text{
        max-width: 200px;
        width: 100%;
        margin-top: 15px;
    }
}

@media screen and (max-width: 1040px){
    .header_box_info, .header_box_tube, .header_container.header_list{
        display: none;
    }
    .header_box_img_text{
        max-width: 250px;
        margin-top: 10px;
    }
    .burger_btn{
        display: flex;
        margin-top: 15px;
        &_item{
            width: 30px;
        }
    }
}

@media screen and (min-width: 769px){
    .burger_btn{
        width: 30px;
        height: 14px;
        &_item{
            &:nth-child(1){
                width: 27px;
            }
            &:nth-child(2){
                width: 24px;
            }
            &:nth-child(3){
                width: 21px;
            }
        }
    }
}
@media screen and (max-width: 575px){
  .header_box_img_text {
    max-width: 160px;
  }
  .header_box_img {
    width: 110px;
  }
  .burger_btn {
      margin-top: 10px;
  }
  .header_border_left, .header_border_right {
    height: 11px;
  }
}
@media screen and (max-width: 360px){
  .header_box_img_text {
    max-width: 140px;
  }
  .header_box_img {
    width: 90px;
  }
  .header_border_left, .header_border_right {
    height: 9px;
  }
}
</style>
