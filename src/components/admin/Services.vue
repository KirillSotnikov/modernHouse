<template>
  <div>
    <admin-navbar></admin-navbar>
    <div class="container services_container">
      <h4 class="h4">Services</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Main Image</th>
            <th scope="col">Promo</th>
            <th scope="col">Advantages</th>
            <th scope="col">Gallery</th>
            <th scope="col">
              <router-link class="btn btn-outline-dark" to="/admin/new-service">Add New</router-link>
              <!-- <button @click="openServiceModal" type="button" class="btn btn-outline-dark">Add New</button> -->
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(service, index) in podCategories" :key="index">
            <th scope="row">{{service.id}}</th>
            <td>{{service.title}}</td>
            <td class="table_description">{{service.description}}</td>
            <td><img :src="service.imgSrc" alt=""></td>
            <td><input type="checkbox" :checked="service.promo" disabled></td>
            <td>
              <ul>
                <li v-for="(advantage, index) in service.advantages" :key="index">{{advantage.title}}</li>
              </ul>
            </td>
            <td class="img_gallery">
              <img 
              v-for="(galleryItem, index) in service.gallery" 
              :key="index" 
              width="100px" 
              :src="galleryItem.img" alt="">
              <!-- <img width="100px" src="/static/img/main_slider1.d7da8ad.png" alt="">
              <img width="100px" src="/static/img/main_slider1.d7da8ad.png" alt="">
              <img width="100px" src="/static/img/main_slider1.d7da8ad.png" alt=""> -->
            </td>
            <td>
              <router-link class="btn btn-outline-dark mb-2 d-block" :to="'/admin/edit-setting/' + service.id">Edit</router-link>
              <!-- <button type="button" class="btn btn-outline-dark mb-2" :data-service="service.id">Edit</button> -->
              <button type="button" class="btn btn-outline-dark mb-2 d-block" :data-serviceId="service.id" @click="removeService(service.id)">Delete</button>
              <router-link class="btn btn-outline-dark d-block" :to="'/pod-services/' + service.id">Show</router-link>
              <!-- <button type="button" class="btn btn-outline-dark">Show</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <edit-setting :activeClass="activeClass" :closeMethod="closeServiceModal"></edit-setting> -->
  </div>
</template>
<script>
import AdminNavbar from '@/components/admin/AdminNavbar';
// import EditSetting from '@/components/admin/EditSetting'
export default {
  data () {
    return {
      activeClass: false
    }
  },
  components: {
    'admin-navbar': AdminNavbar
    // 'edit-setting': EditSetting
  },
  methods: {
    openServiceModal () {
      this.activeClass = true
    },
    closeServiceModal () {
      this.activeClass = false
    },
    removeService (id) {
      console.log(id)
      this.$store.dispatch('removeService', id)
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    podCategories () {
      return this.$store.getters.podCategories
    },
  }
}
</script>

<style lang="scss" scoped>
  .services_container{
    border: 3px solid #f8f9fa;
    border-radius: 30px;
    margin: 0 auto;
    margin-top: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .table_description{
    width: 250px;
  }
  .table td, .table th{
    // border-top: none;
  }
  .table{
    .btn{
      width: 100px;
    }
    td{
      li{
        list-style: disc;
      }
      img{
        width: 100px;
        display: block;
        margin: 5px;
      }
    }
    .img_gallery{
      display: flex;
      flex-wrap: wrap;
      max-width: 300px;
      align-items: center;
    }
  }
</style>
