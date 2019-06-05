<template>
  <div>
    <admin-navbar></admin-navbar>
    <div class="container portfolios_container">
      <h4 class="h4">Protfolio</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Main Image</th>
            <th scope="col">Gallery</th>
            <th scope="col">
              <router-link class="btn btn-outline-dark" to="/admin/new-portfolio">Add New</router-link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(portfolio, index) in portfolioList" :key="index">
            <td scope="row">{{index + 1}}</td>
            <td>{{portfolio.title}}</td>
            <td class="table_description">{{portfolio.description}}</td>
            <td>
              <img :src="portfolio.imgSrc" alt>
            </td>
            <td class="img_gallery">
              <img
                v-for="(galleryItem, index) in portfolio.gallery"
                :key="index"
                width="100px"
                :src="galleryItem.img"
                alt
              >
              <!-- <img width="100px" src="/static/img/main_slider1.d7da8ad.png" alt="">
              <img width="100px" src="/static/img/main_slider1.d7da8ad.png" alt="">
              <img width="100px" src="/static/img/main_slider1.d7da8ad.png" alt="">-->
            </td>
            <td>
              <router-link class="btn btn-outline-dark mb-2 d-block" :to="'/admin/edit-portfolio/' + portfolio.id">Edit</router-link>
              <!-- <button type="button" class="btn btn-outline-dark mb-2" :data-service="service.id">Edit</button> -->
              <button type="button" class="btn btn-outline-dark mb-2 d-block" :data-serviceId="portfolio.id" @click="removePortfolio(portfolio.id)">Delete</button>
              <router-link class="btn btn-outline-dark d-block" :to="'/portfolio-work/' + portfolio.id">Show</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "@/components/admin/AdminNavbar";
export default {
  components: {
    "admin-navbar": AdminNavbar
  },
  methods: {
    removePortfolio (id) {
      this.$store.dispatch('removePortfolio', id)
      document.location.reload()
    }
  },
  computed: {
    portfolioList() {
      return this.$store.getters.portfolioList
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolios_container {
  border: 3px solid #f8f9fa;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.table_description {
  width: 400px;
}
.table td,
.table th {
  // border-top: none;
}
.table {
  .btn {
    width: 100px;
  }
  td {
    li {
      list-style: disc;
    }
    img {
      width: 50px;
      display: block;
      margin: 5px;
    }
  }
  .img_gallery {
    display: flex;
    flex-wrap: wrap;
    max-width: 300px;
    align-items: center;
  }
}
</style>
