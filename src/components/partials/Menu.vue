<template>
  <div class="menu_container" :class="{active: menuClass}">
        <div class="menu_container_list">
          <router-link class="menu_container_link" to="/services">Услуги</router-link>
          <router-link class="menu_container_link" to="/about">О нас</router-link>
          <router-link class="menu_container_link" to="/portfolio">Портфолио</router-link>
          <router-link class="menu_container_link" to="/sales">Акции</router-link>
            <!-- <a href="services.html" class="menu_container_link">Услуги</a>
            <a href="about.html" class="menu_container_link">О нас</a>
            <a href="portfolio.html" class="menu_container_link">Портфолио</a>
            <a href="sales.html" class="menu_container_link">Акции</a> -->
            <a href="https://www.youtube.com" target="_blank" class="menu_container_link">
                <img src="img/youtube.png" alt="" class="header_box_info_youtube">
                Наш канал
            </a>
        </div>
        <div class="menu_container_info">
            <div class="row">
                <div class="menu_container_info_item col-6">
                        <div class="footer_container_info">
                            <p class="footer_container_name">Богдан:</p>
                            <a  href="tel:(063) 848 22 10" class="footer_container_info_box">
                                <i class="fas fa-mobile-alt"></i>
                                <p class="footer_container_info_box_text">(063) 848 22 10</p>
                            </a>
                            <a  href="tel:(063) 848 22 10" class="footer_container_info_box">
                                <i class="fab fa-viber"></i>
                                <p class="footer_container_info_box_text">(063) 848 22 10</p>
                            </a>
                        </div>
                </div>
                <div class="menu_container_info_item col-6">
                        <div class="footer_container_info">
                            <p class="footer_container_name">Богдан:</p>
                            <a  href="tel:(063) 848 22 10" class="footer_container_info_box">
                                <i class="fas fa-mobile-alt"></i>
                                <p class="footer_container_info_box_text">(063) 848 22 10</p>
                            </a>
                            <a  href="tel:(063) 848 22 10" class="footer_container_info_box">
                                <i class="fab fa-viber"></i>
                                <p class="footer_container_info_box_text">(063) 848 22 10</p>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['menuClass']
}
</script>

<style lang="scss" scoped>
.footer_container_name {
    color: #3d3d3d;
    font-family: Museo Sans Cyrl\ 100;
    font-size: 14px;
}
.menu_container_info .footer_container_info_box {
    margin: 5px 0;
}

.footer_container_info_box {
    display: flex;
    align-items: center;
    text-decoration: none;
}
.footer_container_info_box i {
    color: #910e0e;
    font-size: 20px;
    margin-right: 8px;
}
.footer_container_info_box_text {
    color: #000;
    font-family: Museo Sans Cyrl\ 100;
    font-size: 16px;
}
@media screen and (max-width: 360px){
  .menu_container .footer_container_info_box_text {
      font-size: 14px;
  }
}
.menu_container{
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    width: 100%;
    background-color: #fdf4f5;
    z-index: 88;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-100vh);
    transition: all .5s ease-out;
    &.active{
        transform: none;
    }
    &_list{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background: #fff;
        width: 100%;
        padding: 20px 15px;
    }
    &_link{
        color: #3d3d3d;
        font-family: "Museo Sans Cyrl 500";
        font-size: 28px;
        display: flex;
        align-items: center;
        img{
            margin-right: 15px;
        }
    }
    &_info{
        max-height: 130px;
        height: 130px;
        margin-top: 15px;
        background: #fff;
        width: 100%;
        padding: 0 15px;
        display: flex;
        align-items: center;
        .row{
            width: 100%;
        }
        .footer_container_info_box{
            margin: 5px 0;
        }
    }
}
@media screen and (min-width: 576px){
    .menu_container{
        top: 90px;
    }
}
@media screen and (max-width: 375px){
    .menu_container_info_item{
        padding: 0 5px;
    }
    .menu_container_info .row{
        margin: 0 -5px;
    }
}
@media screen and (max-width: 360px){
    .menu_container{
        top: 50px;
    }
    .menu_container .footer_container_info_box_text{
        font-size: 14px;
    }
}
</style>
