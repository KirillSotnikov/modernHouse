<template>
  <a
    class="sales_container_item col-12 col-md-6"
  >
  <router-link :to="'/pod-services/' + id">
    <p class="sales_card_title">{{title}}</p>
    <div class="sales_card">
      <div class="box">
        <img
          :src="imgSrc"
          alt=""
          class="sales_card_img"
        />
      </div>
      <p class="sales_card_text">
        {{description}}
      </p>
    </div>
  </router-link>
  </a>
</template>

<script>
export default {
  props: [
    'title',
    'description',
    'imgSrc',
    'id'
  ]
}
</script>

<style lang="scss">
// .sales_card{
//   min-height: 80%
// }
</style>

