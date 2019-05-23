<template>
    <div>
      <section class="feedback">
        <div class="feedback_container row">
          <div class="feedback_box feedback_box_form col-12 col-md-6">
            <div class="feedback_card">
              <p class="feedback_card_title">ПОЧЕМУ ВЫБИРАЮТ НАС ?</p>
              <p class="feedback_card_text">
                Не следует, однако забывать, что сложившаяся структура организации играет важную роль в формировании
              </p>
              <a class="feedback_card_link" @click="toggleModal">Обратная связь</a>
            </div>
          </div>
          <div class="feedback_box col-12 col-md-6">
            <div class="feedback_box_overlay"></div>
            <img src="/static/img/feedback.250d187.png" alt="" class="feedback_box_img" />
          </div>
        </div>
      </section>
      <app-feedback-modal :modalClass="modalClass" :toggleModal="toggleModal"></app-feedback-modal>
    </div>
</template>

<script>
import Modal from '@/components/partials/Modal'
export default {
  data () {
    return {
      modalClass: false
    }
  },
  components: {
    'app-feedback-modal': Modal
  },
  methods: {
    toggleModal () {
      this.modalClass = !this.modalClass
    }
  }
}
</script>


<style lang="scss" scoped>

.feedback {
  background-color: #3d3d3d;
  &_container {
  }
  &_box {
    position: relative;
    &_form {
      display: flex;
      justify-content: center;
    }
    &_img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    &_overlay {
      position: absolute;
      top: 0;
      left: 15px;
      bottom: 0;
      right: 0;
      background-color: #000000;
      opacity: 0.3;
    }
  }
  &_card {
    padding-top: 48px;
    padding-bottom: 30px;
    max-width: 440px;
    width: 100%;
    padding-left: 15px;
    &_title {
      color: #ffffff;
      font-family: "Museo Sans Cyrl 700";
      font-size: 30px;
      margin-bottom: 24px;
    }
    &_text {
      color: #ffffff;
      font-family: "Museo Sans Cyrl 500";
      font-size: 20px;
      margin-bottom: 34px;
    }
    &_link {
      color: #ffffff !important;
      font-family: "Museo Sans Cyrl 700";
      font-size: 20px;
      text-align: center;
      padding: 15px;
      background-color: #881212;
      width: 100%;
      display: block;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      &:hover {
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 768px){
  .feedback_card_title {
    font-size: 24px;
  }
  .feedback_card_text {
    font-size: 18px;
  }
  .feedback_card_link {
    font-size: 18px;
    padding: 10px;
  }
  .feedback_card{
      padding-right: 15px;
  }
}
@media screen and (max-width: 767px) {
  .feedback_box_overlay {
    display: none;
  }
  .feedback_box_img {
    display: none;
  }
}
@media screen and (max-width: 575px){

  .feedback_card_title{
      text-align: center;
      font-family: "Museo Sans Cyrl 500";
      text-align: center;
  }
  .feedback_card_text{
    font-family: "Museo Sans Cyrl -300";
    font-size: 18px;
    text-align: center;
  }
}
</style>
