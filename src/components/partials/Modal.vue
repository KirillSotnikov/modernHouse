<template>
  <div class="modal" :class="{active : modalClass}">
      <form class="modal_container" id="formX" method="POST" action="javascript:void(null);">
        <p class="modal_title">СОЗДАДИМ ВАШ УЮТНЫЙ УГОЛОК?</p>
        <input type="text" class="modal_input required_input" id="name" name="name" placeholder="*Имя" />
        <input type="tel" class="modal_input required_input" id="phone" name="phone" placeholder="*Телефон" />
        <textarea
          class="modal_textarea required_input"
          id="comment"
          name="comment"
          placeholder="Комментарий"
        ></textarea>
        <button type="submit" class="modal_btn">Отправить</button>
        <i class="fas fa-times close_modal" @click="toggleModal"></i>
      </form>
    </div>
</template>

<script>
export default {
  props:['modalClass', 'toggleModal'],
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: all .4s ease-out;
    &.active{
        opacity: 1;
        visibility: visible;
        .modal_container{
            transform: none;
        }
    }
    &_container{
        background: #fff;
        width: 561px;
        padding: 50px 60px;
       display: flex;
       flex-direction: column;
       align-items: center; 
       position: relative;
       transform: scale(0.3);
       transition: all .4s ease-out;
    }
    &_title{
        color: #201600;
        font-family: "Museo Sans Cyrl 900";
        font-size: 32px;
        max-width: 313px;
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
    }
    &_input{
        color: #201600;
        font-family: "Museo Sans Cyrl 500";
        font-size: 18px;
        padding: 11px 16px;
        border: 1px solid #201600;
        max-width: 313px;
        width: 100%;
        margin-bottom: 20px;
    }
    &_textarea{
        color: #201600;
        font-family: "Museo Sans Cyrl 500";
        font-size: 18px;
        padding: 11px 16px;
        border: 1px solid #201600;
        max-width: 313px;
        width: 100%;
        height: 140px;
        resize: none;
        margin-bottom: 20px;
    }
    &_btn{
        color: #ffffff;
        font-family: "Museo Sans Cyrl 500";
        font-size: 18px;
        padding: 11px;
        text-align: center;
        max-width: 313px;
        width: 100%;
        background-color: #881212;
        border: none;
    }
    .close_modal{
        position: absolute;
        right: 30px;
        top: 30px;
        color: #201600;
        font-size: 26px;
        cursor: pointer;
    }
}

.error{
    border-bottom: 2px solid #f00;
}

@media screen and (max-width: 575px){
    .modal_title{
        font-size: 24px;
        margin-bottom: 20px;
    }
    .modal_input, .modal_textarea {
        font-size: 15px;
        padding: 8px 13px;
        margin-bottom: 15px;
    }
    .modal_textarea{
        height: 100px;
    }
}
</style>
