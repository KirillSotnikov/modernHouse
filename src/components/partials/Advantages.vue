<template>
  <section :class="['advantages', color]">
    <div class="advantages_title">
      <div class="advantages_title_line"></div>
      <p class="advantages_title_text">Преимущества</p>
      <div class="advantages_title_line"></div>
    </div>
    <div class="wrapper">
      <div class="advantages_container row">
        <div
          class="advantages_box col-12 col-sm-6 col-lg-4"
          v-for="(advantage, index) in advantages"
          :key="index"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/modern-house.appspot.com/o/common%2Ftimer.png?alt=media&token=ed9d50b6-26bf-478d-8419-4da333876f16"
            alt
            class="advantages_box_img"
          >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/modern-house.appspot.com/o/common%2Ftimer_black.png?alt=media&token=8b4b5d37-87e1-4cdb-9cb9-1ad57ce90147"
            alt
            class="advantages_box_img about_advantages_img"
          >
          <p class="advantages_box_title">{{advantage.title}}</p>
          <div class="advantages_line"></div>
          <p class="advantages_box_text">{{advantage.description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    color: String
  },
  computed: {
    advantages() {
      return this.$store.getters.advantages;
    }
  }
};
</script>

<style lang="scss" scoped>
.advantages {
  background-color: #3d3d3d;
  padding: 30px 0;
  padding-bottom: 60px;
  .about_advantages_img {
    display: none;
  }
  &.about_advantages {
    background: #fff;
    .advantages_box_img {
      display: none;
    }
    .about_advantages_img {
      display: block;
    }
    .advantages_title_text {
      color: #3d3d3d;
    }
    .advantages_box_title {
      color: #3d3d3d;
    }
    .advantages_box_text {
      color: #3d3d3d;
    }
  }
  &_line {
    width: 110px;
    height: 2px;
    background-color: #910e0e;
  }
  &_title {
    display: flex;
    align-items: center;
    &_text {
      max-width: 350px;
      width: 100%;
      color: #ffffff;
      font-family: "Museo Sans Cyrl -300";
      font-size: 40px;
      text-align: center;
    }
    &_line {
      width: 100%;
      height: 3px;
      background-color: #910e0e;
      opacity: 0.9;
    }
  }
  &_container {
    margin-top: 40px;
  }
  &_box {
    // @include flex(column, center, center);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    &_img {
      margin-bottom: 14px;
    }
    &_title {
      color: #ffffff;
      font-family: "Museo Sans Cyrl -300";
      font-size: 24px;
      margin-bottom: 16px;
    }
    &_text {
      margin-top: 13px;
      text-align: center;
      opacity: 0.9;
      color: #ffffff;
      font-family: "Museo Sans Cyrl -300";
      font-size: 20px;
    }
  }
}
</style>
