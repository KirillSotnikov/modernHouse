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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA/CAMAAACclMsnAAAAAXNSR0IB2cksfwAAATtQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PD06KAAAAGl0Uk5TAAwQX4BHAhIfKS0uDwQlSWZ8eUAaGU1vPgsDQwgbXXtKDVhqUn96PVVsKHZpFwFoB0VlU0ExV3AdRFxIVnUvTEIkc0ZPa0s/FX5geA4RNQo7cjB3FE44WnEFYR5RZH1ZZzcJY14nbjk8b68UrQAAAuhJREFUeJzllm1D2jAQx6OETp34ADKk4lRkQ+vWqaAiIm4w59AiQ+c2GEMp+PD9P8HCJa1p2tK82pv93/Ryd7/2ek2aIOTS2LigMXeOh0JYUOi/x8IhQWEp7N9LeTExOfVycmJaHonMzM7NW+2IhmILMlD8VVTsZGIxaUXVpZQXtPxaZEArq2u09jRed8/QZOaNJ0X0NqsSaoNYm0mB0rb8oKHevdczYHzY5iF9h69qNxfO58O53RXOZ02fPb5/+3b8YKmgWG6lsHQgPPaQo9Si5Z3TdGftujbHU0d8qMScx2WvBpePbeqE939kzqLYJqvHVjEhvpRPrPFHujdFyjmiGfPxZ1+qQn15Lq/6majKOfI051S1PV+oZ5W/fWLoSfCeVZp1Zo2/1mB8rozGlHP6+dbYeAOGFwYajSHjgi+qTh92iYIwdEkf14DBIQw2lWBM2YTUbzBogn2FgjG0B6nrQ3MBzOuIDBa5huTvxMyCdYNkMHQDyT+I9RMsTQ7TILlErF9gNeSwBmbuFkzHphj3wWj/ahFUB74ti7Uhvc4aWZLF6LpcQL/h2pHFOpA+gQpwzchiGUgvoDhc07JYGtLjyIDrH1e8nSByd2oX0g2kdGFuueI+gtnVJdP+lLVUSvRznRIrB9ZeIAGiSyCHrLV3K4fd2it6HKyuzw/SqSQ0Ao8P7TswYzJYDFLvwO7RdWoGUyZdpT0YpOiuOxuMzUJilO3DdGOrFYKoAv3F7TifnQgo00wIb0PfDofUUZTKNtOe7dH71JMewal0EuM+tynV2Vlk4FunOaAZUccsvKdvix+WvanlBxqv3Tv9j5j5q9tuaLvK7oofxdAZC+DjrFCpmbV37kX3LXvWHfF8qWyf7KbLJfvYVuu5KYRmrvGztvr7nc5+nz8Xbc14v7cxwCM0MLwpoquKH1QRNzKHWk+eYOWpNYoiikwVu06mW5wSNz9PpbTqoAl9rTUHVc3zvOon3TQM0/dQ9BdTEF2ZkfTt4AAAAABJRU5ErkJggg=="
            alt
            class="advantages_box_img"
          >
          <img
            src="data:image/png;base64,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"
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
