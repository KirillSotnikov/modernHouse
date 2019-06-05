<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/"><img style="width: 70px" src="https://firebasestorage.googleapis.com/v0/b/modern-house.appspot.com/o/common%2Flogo.png?alt=media&token=277337cb-0979-4d17-8ba7-5825b1db1c08" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav d-flex align-items-center justify-content-between w-100">
        <div class="d-flex align-items-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/portfolio">Portfolio</router-link>
          </li>
        </div>
        <li class="nav-item">
          <a class="nav-link" @click="logOutUser">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOutUser() {
      this.$store.dispatch('logOutUser')
      window.localStorage.setItem('checkedUser', false)
      window.location.reload()
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-link.router-link-exact-active{
    color: rgba(0,0,0,.9)
  }
</style>
