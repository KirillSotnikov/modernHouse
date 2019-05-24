<template>
    <div>
      <app-navbar></app-navbar>
      <section class="serve_container work_page_container">
        <div class="wrapper">
          <router-link to="/portfolio">
            <a class="arrow_back">
              <i class="fas fa-chevron-left"></i>
            </a>
          </router-link>
          <div class="row justify-content-center d-flex d-md-none">
            <div class="serve_container_item col-12">
              <p class="serve_container_title mobile_container_title">
                <!-- Какой-то объект -->
                {{portfolio.title}}
              </p>
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="serve_container_item d-none d-md-block">
              <p class="serve_container_title">
                <!-- Какой-то объект -->
                {{portfolio.title}}</p>
            </div>
          </div>
          <div class="work_container">
            <div id="slider" class="d-none d-sm-block">
              <input type="radio" name="slider" id="s1" checked />
              <input type="radio" name="slider" id="s2" />
              <input type="radio" name="slider" id="s3" />
              <input type="radio" name="slider" id="s4" />
              <input type="radio" name="slider" id="s5" />
              <label for="s1" id="slide1">
                <img :src="portfolio.gallery[0].img" alt="" class="slider_image" />
              </label>
              <label for="s2" id="slide2">
                <img :src="portfolio.gallery[1].img" alt="" class="slider_image" />
              </label>
              <label for="s3" id="slide3">
                <img :src="portfolio.gallery[2].img" alt="" class="slider_image" />
              </label>
              <label for="s4" id="slide4">
                <img :src="portfolio.gallery[3].img" alt="" class="slider_image" />
              </label>
              <label for="s5" id="slide5">
                <img :src="portfolio.gallery[4].img" alt="" class="slider_image" />
              </label>
            </div>
            <div class="mobile_slider d-block d-sm-none">
              <slick ref="slick" :options="workPortfolioOptions">
                <div class="slide" style="width: 100%">
                  <img src="/static/img/main_slider1.d7da8ad.png" alt="" />
                </div>
                <div class="slide" style="width: 100%">
                  <img src="/static/img/main_slider1.d7da8ad.png" alt="" />
                </div>
                <div class="slide" style="width: 100%">
                  <img src="/static/img/main_slider1.d7da8ad.png" alt="" />
                </div>
                <div class="slide" style="width: 100%">
                  <img src="/static/img/main_slider1.d7da8ad.png" alt="" />
                </div>
                <div class="slide" style="width: 100%">
                  <img src="/static/img/main_slider1.d7da8ad.png" alt="" />
                </div>
                <div class="slide" style="width: 100%">
                  <img src="/static/img/main_slider1.d7da8ad.png" alt="" />
                </div>
                <div class="slide" style="width: 100%">
                  <img src="/static/img/main_slider1.d7da8ad.png" alt="" />
                </div>
              </slick>
            </div>
            <div class="mobile_pagin d-flex d-sm-none">
              <i class="fas fa-chevron-left prev_slide"></i>
              <span class="pagingInfo">1/5</span>
              <i class="fas fa-chevron-right next_slide"></i>
            </div>
          </div>
        </div>
        <div class="pagination d-none d-sm-block">
          <div class="wrapper">
            <div class="row justify-content-between align-items-center">
              <i class="fas fa-chevron-left prev_slide"></i>
              <div class="box">
                <span class="current">1</span>
                <span>/</span>
                <span class="total">1</span>
              </div>
              <i class="fas fa-chevron-right next_slide"></i>
            </div>
          </div>
        </div>
      </section>
      <section class="about_description">
        <div class="wrapper">
          <p class="about_description_title">{{portfolio.title}}</p>
          <p class="about_description_text">
            Значимость этих проблем настолько очевидна, что реализация
            намеченных плановых заданий играет важную роль в формировании
            позиций, занимаемых участниками в отношении поставленных задач.
            Задача организации, в особенности же Значимость этих проблем
            настолько очевидна, что реализация Значимость этих проблем настолько
            очевидна, что реализация намеченных плановых заданий играет важную
            роль в формировании позиций, занимаемых участниками в отношении
            поставленных задач. Задача организации, в особенности же Значимость
            этих проблем настолько очевидна, что реализация Значимость этих
            проблем настолько очевидна, что реализация намеченных плановых
            заданий играет важную роль в формировании позиций, занимаемых
            участниками в отношении поставленных задач. Задача организации, в
            особенности же Значимость этих проблем
          </p>
        </div>
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
  data () {
    return {
      workPortfolioOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: '<i class="fas fa-chevron-left work_slider_arrow arrow-left"></i>',
        // nextArrow: '<i class="fas fa-chevron-right work_slider_arrow arrow-right"></i>'
        prevArrow: '.mobile_pagin .prev_slide',
        nextArrow: '.mobile_pagin .next_slide',
      }
    }
  },
  props: ['id'],
  computed: {
    portfolio () {
      const id = this.id
      return this.$store.getters.portfolioById(id)
    }
  },
  mounted() {
    const $slideArr = $('#slider').find('input');
    let totalSlide = $slideArr.length;

    $('input[name=slider]').on('change', function() {
        initPagination();
    })
    initPagination();

    function initPagination(){
        let currentSlide;
        $slideArr.each((index, item) => {
            
            if (item.checked) {
                currentSlide = index + 1;
            }

            return currentSlide;
            
        })
        // console.log(currentSlide);
        
        $('.total').html(totalSlide);
        $('.current').html(currentSlide);
    }


    $('.next_slide').on('click', function(){
        nextSlide();
    });
    $('.prev_slide').on('click', function(){
        prevSlide();
    });

    function nextSlide(){
        let currentSlide;

        $slideArr.each((index, item) => {
            
            if (item.checked) {
                currentSlide = index + 1;
            }
            
            return currentSlide;
            
        })
        let firstItem = $('#slider input').get(0);
        $('#slider input').each(function(i, item){    
            // console.log(i);
            if ( i === currentSlide){
                $(item).prop('checked', true)
                $('.current').html(currentSlide + 1); 
                
            } 
            if( currentSlide === totalSlide){
                $(firstItem).prop('checked', true)
                $('.current').html(1); 
            }
        });
    }

    function prevSlide(){
        let currentSlide;

        $slideArr.each((index, item) => {
            
            if (item.checked) {
                currentSlide = index + 1;
            }
            
            return currentSlide;
            
        })
        let lastItem = $('#slider input').get(totalSlide - 1 );
        $('#slider input').each(function(i, item){    
            if ( i === currentSlide - 2){
                $(item).prop('checked', true)
                $('.current').html(currentSlide - 1); 
            }
            // console.log(currentSlide);
            
            if( currentSlide === 1){
                $(lastItem).prop('checked', true)
                $('.current').html(5); 
            }
        });

    }

    var $status = $('.pagingInfo');
    var $slickElement = $('.mobile_slider .slider');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html(i + '<p> / </p>' + slick.slideCount);
    });
  }
}
</script>

<style lang="scss" scoped>
[type=radio] {
    display: none;
  }
  
  #slider {
    height: 30vw;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  #slider label {
    margin: auto;
    width: 70%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    left: 0; right: 0;
    cursor: pointer;
    transition: transform 0.4s ease;
  }
  
  #s1:checked ~ #slide4, #s2:checked ~ #slide5,
  #s3:checked ~ #slide1, #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
    transform: translate3d(-30%,0,-200px);
  }
  
  #s1:checked ~ #slide5, #s2:checked ~ #slide1,
  #s3:checked ~ #slide2, #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2);
    transform: translate3d(-15%,0,-100px);
  }
  
  #s1:checked ~ #slide1, #s2:checked ~ #slide2,
  #s3:checked ~ #slide3, #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19);
    transform: translate3d(0,0,0);
  }
  
  #s1:checked ~ #slide2, #s2:checked ~ #slide3,
  #s3:checked ~ #slide4, #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2);
    transform: translate3d(15%,0,-100px);
  }
  
  #s1:checked ~ #slide3, #s2:checked ~ #slide4,
  #s3:checked ~ #slide5, #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
    transform: translate3d(30%,0,-200px);
  }
  
//   #slide1 { background: #00BCD4 }
//   #slide2 { background: #4CAF50 }
//   #slide3 { background: #CDDC39 }
//   #slide4 { background: #FFC107 }
//   #slide5 { background: #FF5722 }

  .slider_image{
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  .slide_frame{
      width: 100%;
      height: 100%;
  }

  .prev_slide, .next_slide{
      cursor: pointer;
      color: #910e0e;
    font-size: 35px;
  }

  .work_container {
      margin-top: 40px;
  }

  .serve_container.work_page_container{
      background: #f9f9f9;
      padding-bottom: 0;
      .wrapper{
          // overflow: hidden;
      }
  }
  .pagination{
      background: #fff;
      margin-top: 40px;
      .wrapper{
          width: 100%;
      }
      .box{
          span{
            font-family: "Museo Sans Cyrl 500";
            font-size: 20px;
            color: #910e0e;
            &.current{
                color: #3d3d3d;
            }
            &.total{
                color: #3d3d3d;
            }
          }
      }
  }

  .about_description{
      background: #f9f9f9;
      padding: 60px 0;
      &_title{
        margin-bottom: 60px;
        color: #3d3d3d;
        font-family: "Museo Sans Cyrl 500";
        font-size: 40px;
        text-align: center;
      }
      &_text{
        color: #3d3d3d;
        font-family: "Museo Sans Cyrl -300";
        font-size: 18px;
      }
  }

  .mobile_slider{
    margin-bottom: -6px;
    .slider{
      .slide{
        img{
          width: 100%;
        }
      }
    }
  }
  .mobile_pagin{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin: 0 -15px;
    padding: 5px   15px;
    .pagingInfo{
      color: #3d3d3d;
      font-family: "Museo Sans Cyrl -300";
      font-size: 18px;
      display: flex;
      align-items: center;
      p{
        color: #910e0e;
        margin: 0 5px;
        font-family: "Museo Sans Cyrl -300";
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 575px){
    .serve_container.work_page_container{
      padding-top: 20px;
    }
    .work_container{
      margin-top: 20px;
    }
    .about_description{
      padding-top: 30px;
      &_title{
        font-size: 24px;
        margin-bottom: 30px;
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
