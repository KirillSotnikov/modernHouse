import fb from 'firebase'

class Service {
  constructor (title, description, imgSrc = '', promo = false, advantages, gallery, id = null) {
    this.title = title
    this.description = description
    this.imgSrc = imgSrc
    this.promo = promo
    this.advantages = advantages
    this.gallery = gallery
    this.id = id
  }
}

export default {
  state: {
    podCategories: [
      // {
      //   id: 1,
      //   title: 'Окна',
      //   description: '1.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
      //   imgSrc: '/static/img/main_slider1.d7da8ad.png',
      //   promo: true,
      //   advantages: [
      //     {title: 'Лучшая звукоизоляция'},
      //     {title: 'Лучшая шумоизоляция'},
      //     {title: 'Лучшая Noизоляция'},
      //     {title: 'Лучшая пукоизоляция'},
      //     {title: 'Лучшая рукоизоляция'},
      //     {title: 'Лучшая рукоизоляция'}
      //   ],
      //   gallery: [
      //     {img: '/static/img/main_slider1.d7da8ad.png'},
      //     {img: '/static/img/about.df072d6.png'},
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/about.df072d6.png'},
      //     {img: '/static/img/main_slider1.d7da8ad.png'}
      //   ]
      // },
      // {
      //   id: 2,
      //   title: 'Двери',
      //   description: '2.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
      //   imgSrc: '/static/img/about.df072d6.png',
      //   promo: false,
      //   advantages: [
      //     {title: 'Лучшая звукоизоляция'},
      //     {title: 'Лучшая шумоизоляция'},
      //     {title: 'Лучшая пукоизоляция'},
      //     {title: 'Лучшая рукоизоляция'},
      //     {title: 'Лучшая Noизоляция'},
      //     {title: 'Лучшая Noизоляция'}
      //   ],
      //   gallery: [
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/main_slider1.d7da8ad.png'},
      //     {img: '/static/img/about.df072d6.png'},
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/about.df072d6.png'}
      //   ]
      // },
      // {
      //   id: 3,
      //   title: 'Окна 2',
      //   description: '3.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
      //   imgSrc: '/static/img/main_slider1.d7da8ad.png',
      //   promo: true,
      //   advantages: [
      //     {title: 'Лучшая пукоизоляция'},
      //     {title: 'Лучшая рукоизоляция'},
      //     {title: 'Лучшая звукоизоляция'},
      //     {title: 'Лучшая шумоизоляция'},
      //     {title: 'Лучшая Noизоляция'},
      //     {title: 'Лучшая Noизоляция'}
      //   ],
      //   gallery: [
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/about.df072d6.png'},
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/about.df072d6.png'},
      //     {img: '/static/img/main_slider1.d7da8ad.png'}
      //   ]
      // },
      // {
      //   id: 4,
      //   title: 'Двери 2',
      //   description: '4.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
      //   imgSrc: '/static/img/about.df072d6.png',
      //   promo: false,
      //   advantages: [
      //     {title: 'Лучшая рукоизоляция'},
      //     {title: 'Лучшая Noизоляция'},
      //     {title: 'Лучшая звукоизоляция'},
      //     {title: 'Лучшая шумоизоляция'},
      //     {title: 'Лучшая пукоизоляция'},
      //     {title: 'Лучшая пукоизоляция'}
      //   ],
      //   gallery: [
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/about.df072d6.png'},
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/main_slider1.d7da8ad.png'}
      //   ]
      // },
      // {
      //   id: 5,
      //   title: 'Окна 3',
      //   description: '5.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
      //   imgSrc: '/static/img/main_slider1.d7da8ad.png',
      //   promo: false,
      //   advantages: [
      //     {title: 'Лучшая звукоизоляция'},
      //     {title: 'Лучшая рукоизоляция'},
      //     {title: 'Лучшая шумоизоляция'},
      //     {title: 'Лучшая пукоизоляция'},
      //     {title: 'Лучшая Noизоляция'},
      //     {title: 'Лучшая Noизоляция'}
      //   ],
      //   gallery: [
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/about.df072d6.png'},
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/about.df072d6.png'}
      //   ]
      // },
      // {
      //   id: 6,
      //   title: 'Двери 3',
      //   description: '6.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
      //   imgSrc: '/static/img/about.df072d6.png',
      //   promo: true,
      //   advantages: [
      //     {title: 'Преимущество нет :('}
      //   ],
      //   gallery: [
      //     {img: '/static/img/main_slider1.d7da8ad.png'},
      //     {img: '/static/img/podservices.c6790b6.png'},
      //     {img: '/static/img/main_slider1.d7da8ad.png'},
      //     {img: '/static/img/about.df072d6.png'},
      //     {img: '/static/img/main_slider1.d7da8ad.png'}
      //   ]
      // }
    ]
  },
  mutations: {
    createService (state, payload) {
      console.log(payload)
      state.podCategories.push(payload)
    },
    loadProducts (state, payload) {
      state.podCategories = payload
    },
    updateService (state, {title, description, promo, advantages, id}) {
      const service = state.podCategories.find(a => {
        return a.id === id
      })
      service.title = title
      service.description = description
      service.promo = promo
      service.advantages = advantages
    }
  },
  actions: {
    async fetchProducts ({commit}) {
      const resultProducts = []

      try {
        const serviceVal = await fb.database().ref('services').once('value')
        const services = serviceVal.val()
        Object.keys(services).forEach(key => {
          const service = services[key]
          resultProducts.push(
            new Service(
              service.title,
              service.description,
              service.imgSrc,
              service.promo,
              service.advantages,
              key
            )
          )
          commit('loadProducts', resultProducts)
        })
      } catch (error) {
        // alert(error.message)
        throw error
      }
    },
    async createService ({commit, getters}, payload) {
      const image = payload.image
      const gallery = payload.gallery
      let gallerySrc = []
      function setImageStorage (array, service) {
        array.forEach(async (el, i) => {
          const imageExt = el.name.slice(el.name.lastIndexOf('.'))
          const fileData = await fb.storage().ref(`services/${service.key}/image${i}${imageExt}`).put(el)
          const img = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
          gallerySrc.push({img: img})
        })
      }
      try {
        const newService = new Service(
          payload.title,
          payload.description,
          '',
          payload.promo,
          payload.advantages,
          payload.gallery
        )
        console.log(newService.gallery)
        const service = await fb.database().ref('services').push(newService)
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        const fileData = await fb.storage().ref(`services/${service.key}/main${imageExt}`).put(image)
        const imgSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
        await fb.database().ref('services').child(service.key).update({imgSrc})
        await setImageStorage(gallery, service)
        await fb.database().ref('services').child(service.key).update({gallery: gallerySrc})
        commit('createService', {
          ...newService,
          id: service.key,
          imgSrc,
          gallery: gallerySrc
        })
      } catch (error) {
        alert(error.message)
        // throw error
      }
    },
    async updateService ({commit}, {title, description, promo, advantages, id}) {
      // console.log(promo)
      try {
        await fb.database().ref('services').child(id).update({
          title,
          description,
          promo,
          advantages
        })
        commit('updateService', {
          title,
          description,
          promo,
          advantages,
          id
        })
      } catch (error) {
        alert(error.message)
        throw error
      }
    },
    async removeService ({commit, getters}, id) {
      console.log(id)
      try {
        await fb.database().ref('services').child(id).remove()
      } catch (error) {
        alert(error.message)
        throw error
      }
    }
  },
  getters: {
    podCategories (state) {
      return state.podCategories.map((category) => {
        return ({
          ...category,
          backgroundStyle: `background:url('${category.imgSrc}') center/cover no-repeat`
        })
      })
    },
    // services (state) {
    //   return state.podCategories
    // },
    servicePromo (state) {
      return state.podCategories.filter(service => {
        return service.promo
      })
    },
    serviceById (state) {
      return serviceId => {
        return state.podCategories.find(service => {
          return service.id === serviceId
        })
      }
    }
  }
}
