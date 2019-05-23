<template>
<div>
    <header class="header">
      <div class="header_container">
        <div class="wrapper">
          <router-link to="/">
            <a class="header_box">
              <div class="box">
                <img src="/static/img/logo.b7a37ba.png" alt="" class="header_box_img" />
                <div class="header_border_right"></div>
                <div class="header_border_left"></div>
              </div>
              <img src="data:image/png;base64,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" alt="" class="header_box_img_text" />
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
