<template>
  <div>
    <app-navbar></app-navbar>
    <app-podservices title="Акции" :objectPage="servicePromo"></app-podservices>
    <app-feedback></app-feedback>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Feedback from "@/components/partials/Feedback";
import Podservices from "@/components/Services/Podcategory";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    "app-feedback": Feedback,
    "app-podservices": Podservices,
    'app-footer': Footer,
    'app-navbar': Navbar
  },
  computed: {
    servicePromo () {
      return this.$store.getters.servicePromo
    }
  }
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
