<template>
  
      <section class="sales podcategory_section">
        <div class="wrapper">
          <div class="services_title">{{title}}</div>
          <div class="sales_container row">
            <app-service-card 
            v-for="(service, index) in objectPage"
            :key="index"
            :title="service.title" 
            :id="service.id"
            :description="service.description" 
            :imgSrc="service.imgSrc"></app-service-card>
          </div>
        </div>
      </section>
</template>

<script>
import ServiceCard from '@/components/partials/ServiceCard'
export default {
  props: ['title', 'objectPage'],
  components: {
    'app-service-card': ServiceCard
  },
//   computed: {
//     podCategories () {
//       return this.$store.getters.podCategories
//     },
//     servicePromo () {
//       return this.$store.getters.servicePromo
//     }
//   }
}
</script>


<style lang="scss">
.services_title {
    color: #3d3d3d;
    font-family: Museo Sans Cyrl\ 500;
    font-size: 40px;
    margin-bottom: 60px;
    text-align: center;
}
@media screen and (max-width: 575px){
  .services_title {
      font-size: 30px;
      margin-bottom: 30px;
  }
}
.sales{
    padding: 60px 0;
    padding-bottom: 20px;
    background: #f9f9f9;
    &_container{
        &_item{
            text-decoration: none !important;
            margin-bottom: 40px;
            &:hover{
                .sales_card{
                    box-shadow: 0 0 10px rgba(0,0,0,0.50);
                }
            }
        }
    }
    &_card{
        display: flex;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.13);
        transition: all .4s ease-out;
        &_title{
            opacity: 0.9;
            color: #3d3d3d;
            font-family: "Museo Sans Cyrl 500";
            font-size: 24px;
            padding-left: 15px;
            border-left: 4px solid #910e0e;
            margin-bottom: 16px;
        }
        &_text{
            color: #505050;
            font-family: "Museo Sans Cyrl -300";
            font-size: 16px;
            padding: 15px;
            width: 57%;
        }
        .box{
            width: 43%;
        }
        &_img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (max-width: 575px){
    .sales_container_item{
        background: #fff;
        padding-top: 15px;
        padding-bottom: 15px;
        &:last-child{
            margin-bottom: 0;
        }
    }
    .sales_card{
        box-shadow: none;
        flex-wrap: wrap;
    }
    .sales_card .box{
        width: 100%;
    }
    .sales_card_text{
        width: 100%;
    }
    .sales{
        padding-top: 30px;
        padding-bottom: 0;
    }
}
</style>
