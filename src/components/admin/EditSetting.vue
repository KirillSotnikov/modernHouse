<template>
<div>
  <admin-navbar></admin-navbar>
  <div v-if="service" class="container form_container mt-5">
    <h2 class="h2">Edit Service</h2>
    <form>
      <div class="form-group">
        <label for="Title">Title</label>
        <input type="text" class="form-control" v-model="edited.title" id="Title" aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="Description">Description</label>
        <textarea type="text" class="form-control" v-model="edited.description" id="Description"></textarea>
      </div>
      <div class="d-flex flex-column align-items-start mb-3">
        <a class="btn btn-success color-white" @click="upload">
            Upload
            <i class="fas fa-cloud-upload-alt"></i>
        </a>
        <input 
        @change="onFileChange"
        ref="fileInput" 
        type="file" 
        style="display: none" 
        accept="image/*">
        <img class="mt-3 fileImgInput" :src="edited.imgSrc" height="200px" v-if="edited.imgSrc">
      </div>
      <div class="form-check mb-3">
        <input type="checkbox" :checked="edited.promo" @click="promoChange  " class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Is it Promo?</label>
      </div>

      <div class="form-group advantages_arr">
        <label>Advantages</label>
        <i class="fas fa-plus" @click="addAdvantage"></i>
        <div class="input_box">
          <input type="text" v-for="(advantage, index) in edited.advantages" :key="index" v-model="advantage.title" class="form-control advantageInput w-50 mt-2">
        </div>
      </div>
      <div class="form-group mb-0">
        <label>Gallery</label>
        <br>
        <div class="galleryImages">
          <img v-for="(img, index) in edited.gallery" :key="index" :src="img.img" style="width: 80px; margin: 5px 10px;">
        </div>
        <!-- <label class='__lk-fileInput'>
          <span data-default='Choose file'>Choose file</span>
          <input type="file">
        </label>
        <label class='__lk-fileInput'>
          <span data-default='Choose file'>Choose file</span>
          <input type="file">
        </label>
        <label class='__lk-fileInput'>
          <span data-default='Choose file'>Choose file</span>
          <input type="file">
        </label>
        <label class='__lk-fileInput'>
          <span data-default='Choose file'>Choose file</span>
          <input type="file">
        </label>
        <label class='__lk-fileInput'>
          <span data-default='Choose file'>Choose file</span>
          <input type="file">
        </label> -->
        <br>
        <input type="file" id="file" ref="myFiles" class="" 
        @change="previewFiles" multiple>
      </div>
      <hr>
      <span @click="onSave" class="btn btn-primary">{{submitText}}</span>
    </form>
  </div>
  <app-loader v-else></app-loader>
</div>
</template>

<script>
import $ from 'jquery'
import AdminNavbar from '@/components/admin/AdminNavbar';
import Loader from '@/components/partials/Loader';
export default {
  components: {
    'admin-navbar': AdminNavbar,
    'app-loader': Loader
  },
  data () {
    return {
      image: null,
      imgSrc: '',
      files: [],
      galleryFiles: [],
      submitText: 'Submit'
    }
  },
  props: ['id'],
  computed: {
    service() {
      const id = this.id
      return this.$store.getters.serviceById(id)
    },
    edited() {
      // console.log(this.service.imgSrc)
      return {
        title: this.service.title,
        description: this.service.description,
        promo: this.service.promo,
        advantages: this.service.advantages,
        gallery: this.service.gallery,
        imgSrc: this.service.imgSrc
      }
    }
  },
  mounted() {
    $(function(){  
      $('input[type="file"]').change(function(){
        var label = $(this).parent().find('span'); 
        if(typeof(this.files) !='undefined'){ // fucking IE      
          if(this.files.length == 0){
            label.removeClass('withFile').text(label.data('default'));
          }
          else{
            var file = this.files[0]; 
            var name = file.name;
            var size = (file.size / 1048576).toFixed(3); //size in mb 
            label.addClass('withFile').text(name + ' (' + size + 'mb)');
          }
        }
        else{
          var name = this.value.split("\\");
            label.addClass('withFile').text(name[name.length-1]);
        }
        return false;
      });  
    });
  },
  methods: {
    promoChange () {
      this.edited.promo = !this.edited.promo
    },
    onSave () {
      if(this.edited.title != '' && this.edited.description != '') {
        console.log(this.edited.promo)
        this.submitText = 'Loading...'
        let advantageArr = document.querySelectorAll('.advantageInput')
        let advantages = []
        advantageArr.forEach(element => {
          // console.log(element.value)
          let ArrItem = {title: element.value}
          // console.log(ArrItem)
          advantages.push(ArrItem)
        })
        this.$store.dispatch('updateService', {
          title: this.edited.title,
          description: this.edited.description,
          promo: this.edited.promo,
          advantages: advantages,
          imgSrc: this.image,
          gallery: this.galleryFiles,
          id: this.service.id
        })
          .then(() => {
            this.$router.push('/admin/services')
          })
      } else {
        this.submitText = 'Submit'
        alert('Please, fill the form correctly')
      }
    },
    previewFiles() {
      // if ($("#file")[0].files.length > 5) {
      //   alert("You can select only 5 images");
      //   $('#file').val('')
      // } else {
        const files = event.target.files
        for ( let i = 0; i < files.length; i++ ){
          this.galleryFiles.push(files[i])
        }
        let galleryImages = document.querySelector('.galleryImages')
        galleryImages.style.display = 'none'
      // }
    },
    upload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
          this.imgSrc = reader.result
          let img = document.querySelectorAll('.fileImgInput')[0]
          img.setAttribute('src', this.imgSrc)
        }
        reader.readAsDataURL(file)
        this.image = file
    },
    addAdvantage () {
      let inputItem = document.createElement('input');
      inputItem.setAttribute('type', 'text')
      inputItem.classList.add('form-control')
      inputItem.classList.add('mt-2')
      inputItem.classList.add('w-50')
      inputItem.classList.add('advantageInput')
      let advantageArr = document.getElementsByClassName('input_box')[0]
      // console.log(inputItem)
      advantageArr.appendChild(inputItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.__lk-fileInput{
  cursor: pointer;
  input{
    display: none;
  }
  span{
    color: #fff;
    margin: 0 0 10px;
    padding: .375rem .75rem;
    text-decoration: none;
    background-color: #28a745;
    font-size: 1rem;
    line-height: 1.5;
    transition: all .3s ease-out;
    border-radius: 2px;
    font: normal 14px/1.412 Helvetica;
    &:hover{
      background: #1b7c32;
    }
    &.withFile{
      &:after{
        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTA5OEU0M0REOUIwMTFFMzg4Q0VDNDEwMTU1QkU0MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTA5OEU0M0VEOUIwMTFFMzg4Q0VDNDEwMTU1QkU0MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMDk4RTQzQkQ5QjAxMUUzODhDRUM0MTAxNTVCRTQxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMDk4RTQzQ0Q5QjAxMUUzODhDRUM0MTAxNTVCRTQxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PolX3bIAAADWSURBVHjadNHNCkFBFMDxSYq9UsoCC4/gZqFEiXLZSKy8nJ2Pja6FB1A8i/KRuEjXfzSXY3DqV3Nnzpx7TqOCIMhjgAkSUJYkRugjG1VKFeGiBgdz9RmOObvgWWEWvOOMlqiu1745u2OsN9No42YOLqigbNbhXgMp2WsdW5NwE8kbVMM8e8ASrlaLjsyJWAPG1HfEP77+DOiLlo6m3VdLOXRFK3qOAoo4iAIdZPQFT/R8ktXQFH/VMVXmlfVL7qzkkIs9hujpl16G42D9Y+gVFvD0+iHAAMR9gu9PEii4AAAAAElFTkSuQmCC');
        display: inline-block;
        vertical-align: middle;
        margin-left: 8px;
      }
    }
  }
}
// --------------
  .form_container{
    border: 1px solid #242424;
        max-width: 800px;
        padding: 20px 30px;
  }
      form{
        max-width: 800px;
        width: 100%;
      }

    .advantages_arr{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .input_box{
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      label{
       width: calc(100% - 40px);
      }
      input{
        // width: calc(100% - 40px);
      }
      i{
        font-size: 20px;
        border: 1px solid #242424;
        border-radius: 100%;
        padding: 5px;
        cursor: pointer;
        opacity: .8;
        margin-left: 10px;
      }
    }
    .btn-success{
      color: #fff !important;
      cursor: pointer;
      &:hover{
        color: #fff;
      }
    }
    .btn{
      cursor: pointer;
    }
</style>
