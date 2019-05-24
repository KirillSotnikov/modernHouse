<template>
  <div id="app">
    <!-- <app-navbar v-if="notAdminPage"></app-navbar> -->
    <router-view></router-view>
    <!-- <app-footer v-if="notAdminPage"></app-footer> -->
  </div>
</template>

<script>
import $ from "jquery";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',
  data () {
    return {
      notAdminPage: true
    }
  },
  components: {
    // 'app-footer': Footer,
    // 'app-navbar': Navbar
  },
  // mounted() {
  //   let hrefStr = window.location.pathname
  //   if (hrefStr.search('/admin') != -1){
  //     this.notAdminPage = false
  //   }
  // },
  // watch: {
  //   '$route' (to, from) {
  //     if (to.path.search('/admin') == -1) {
  //       this.notAdminPage = true
  //     }
  //   }
  // }
}
</script>

<style lang="scss">

@font-face {
	font-family: "Museo Sans Cyrl 100";
	font-style: normal;
	font-weight: normal;
	src: url(./assets/fonts/MuseoSansCyrl-100.ttf);
}
@font-face {
	font-family: "Museo Sans Cyrl -300";
	font-style: normal;
	font-weight: normal;
	src: url(./assets/fonts/MuseoSansCyrl-300.ttf);
}
@font-face {
	font-family: "Museo Sans Cyrl 500";
	font-style: normal;
	font-weight: normal;
	src: url(./assets/fonts/MuseoSansCyrl-500.ttf);
}
@font-face {
	font-family: "Museo Sans Cyrl 700";
	font-style: normal;
	font-weight: normal;
	src: url(./assets/fonts/MuseoSansCyrl-700.ttf);
}
@font-face {
	font-family: "Museo Sans Cyrl 900";
	font-style: normal;
	font-weight: normal;
	src: url(./assets/fonts/MuseoSansCyrl-900.ttf);
}
* {
    outline: none;
  }
  a{
    cursor: pointer;
  }
  html,
  body {
    font-family: "Museo Sans Cyrl 500";
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  a,
  div,
  p {
    margin: 0;
    padding: 0;
    font-family: "Museo Sans Cyrl 500";
    font-size: 14px;
    color: #000;
    font-weight: normal;
    list-style: none;
    text-decoration: none;
  }
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
  }

.space_ar{
    justify-content: space-around !important;
    padding-top: 0 !important;
}

</style>

