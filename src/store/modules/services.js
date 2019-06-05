import fb from 'firebase/app'

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
      // console.log(payload)
      state.podCategories.push(payload)
    },
    loadProducts (state, payload) {
      state.podCategories = payload
    },
    updateService (state, payload) {
      const service = state.podCategories.find(a => {
        return a.id === payload.id
      })
      service.title = payload.title
      service.description = payload.description
      service.promo = payload.promo
      service.advantages = payload.advantages
      if (payload.imgSrc) {
        // console.log(payload.imgSrc)
        service.imgSrc = payload.imgSrc
      }
      if (payload.gallery) {
        service.gallery = payload.gallery
      }
    }
    // updateService (state, {title, description, promo, advantages, imgSrc, gallery, id}) {
    //   const service = state.podCategories.find(a => {
    //     return a.id === id
    //   })
    //   service.title = title
    //   service.description = description
    //   service.promo = promo
    //   service.advantages = advantages
    //   service.imgSrc = imgSrc
    //   service.gallery = gallery
    // }
  },
  actions: {
    async fetchProducts ({commit}) {
      const resultProducts = []

      try {
        const serviceVal = await fb.database().ref('services').once('value')
        // console.log(serviceVal.val())
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
              service.gallery,
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
      const gallerySrc = payload.gallery

      const Promises = []

      function setImageStorage (array, service) {
        array.forEach(async (el, i) => {
          Promises.push(new Promise(async (resolve, reject) => {
            const imageExt = el.name.slice(el.name.lastIndexOf('.'))
            const fileData = await fb.storage().ref(`services/${service.key}/image${i}${imageExt}`).put(el)
            const img = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
            resolve({ img: img })
          }))
        })
      }
      try {
        const newService = new Service(
          payload.title,
          payload.description,
          '',
          payload.promo,
          payload.advantages,
          [{ img: '1234' }]
        )

        if (image === null) {
          throw new Error('Main image is required')
        } else {
          const service = await fb.database().ref('services').push(newService)
          await setImageStorage(gallerySrc, service)
          const gallery = await Promise.all(Promises)
          await fb.database().ref('services').child(service.key).update({ gallery })
          
          const imageExt = image.name.slice(image.name.lastIndexOf('.'))
          const fileData = await fb.storage().ref(`services/${service.key}/main${imageExt}`).put(image)
          const imgSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
          
          await fb.database().ref('services').child(service.key).update({imgSrc})
          commit('createService', {
            ...newService,
            id: service.key,
            imgSrc,
            gallery
          })
        }
      } catch (error) {
        alert(error.message)
        // throw error
      }
    },
    async updateService ({commit}, {title, description, promo, advantages, imgSrc, gallery, id}) {
      // console.log(imgSrc)
      const image = imgSrc
      const gallerySrc = gallery
      const Promises = []
      // console.log(image)       NULL
      // console.log(gallerySrc)  ARRAY(0)
      function setImageStorage (array, service) {
        array.forEach(async (el, i) => {
          // console.log(array)
          Promises.push(new Promise(async (resolve, reject) => {
            const imageExt = el.name.slice(el.name.lastIndexOf('.'))
            const fileData = await fb.storage().ref(`services/${service}/image${i}${imageExt}`).put(el)
            const img = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
            resolve({ img: img })
          }))
        })
      }
      try {
        let updateObject = {
          title: title,
          description: description,
          promo: promo,
          advantages: advantages
        }
        if (image === null && gallerySrc.length === 0) {
          // console.log('Not image and not gallery')
          await fb.database().ref('services').child(id).update(updateObject)
          commit('updateService', {
            ...updateObject,
            id
          })
        } else if (image !== null && gallerySrc.length === 0) {
          // console.log('True image and not gallery')
          const imageExt = image.name.slice(image.name.lastIndexOf('.'))
          const fileData = await fb.storage().ref(`services/${id}/main${imageExt}`).put(image)
          const imgSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
          // console.log(imgSrc)
          await fb.database().ref('services').child(id).update({
            ...updateObject,
            imgSrc
          })
          commit('updateService', {
            ...updateObject,
            imgSrc,
            id
          })
        } else if (image == null && gallerySrc.length !== 0) {
          // console.log('Not image and true gallery')
          await setImageStorage(gallerySrc, id)
          const gallery = await Promise.all(Promises)
          await fb.database().ref('services').child(id).update({
            ...updateObject,
            gallery
          })
          commit('updateService', {
            ...updateObject,
            gallery,
            id
          })
        } else {
          // console.log('All is true')
          const imageExt = image.name.slice(image.name.lastIndexOf('.'))
          const fileData = await fb.storage().ref(`services/${id}/main${imageExt}`).put(image)
          const imgSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
          await setImageStorage(gallerySrc, id)
          const gallery = await Promise.all(Promises)
          await fb.database().ref('services').child(id).update({
            ...updateObject,
            imgSrc,
            gallery
          })
          commit('updateService', {
            ...updateObject,
            imgSrc,
            gallery,
            id
          })
        }
      } catch (error) {
        alert(error.message)
        throw error
      }
    },
    async removeService ({commit, getters}, id) {
      // console.log(id)
      try {
        await fb.database().ref('services').child(id).remove()
        await fb.storage().ref('services').child(id).remove()
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
