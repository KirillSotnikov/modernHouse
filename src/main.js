// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'
import store from './store'
import * as fb from 'firebase'

Vue.config.productionTip = false

Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyDN6D4NJ6ud-fWLykjdmfk78FnKXigYI6k',
      authDomain: 'modern-house.firebaseapp.com',
      databaseURL: 'https://modern-house.firebaseio.com',
      projectId: 'modern-house',
      storageBucket: 'modern-house.appspot.com',
      messagingSenderId: '338914232127',
      appId: '1:338914232127:web:350396570527fd0b'
    }
    // Initialize Firebase
    fb.initializeApp(firebaseConfig)
  }
})
