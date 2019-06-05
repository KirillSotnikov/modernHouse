import fb from 'firebase/app'

class Portfolio {
  constructor (title, description, imgSrc = '', gallery, id = null) {
    this.title = title
    this.description = description
    this.imgSrc = imgSrc
    this.gallery = gallery
    this.id = id
  }
}

export default {
  state: {
    portfolioList: [
      // {
      //   id: 1,
      //   title: 'Окна',
      //   description: `1.Значимость этих проблем настолько очевидна, что реализация
      //   намеченных плановых заданий играет важную роль в формировании
      //   позиций, занимаемых участниками в отношении поставленных задач.
      //   Задача организации, в особенности же Значимость этих проблем
      //   настолько очевидна, что реализация Значимость этих проблем настолько
      //   очевидна, что реализация намеченных плановых заданий играет важную
      //   роль в формировании позиций, занимаемых участниками в отношении
      //   поставленных задач. Задача организации, в особенности же Значимость
      //   этих проблем настолько очевидна, что реализация Значимость этих
      //   проблем настолько очевидна, что реализация намеченных плановых
      //   заданий играет важную роль в формировании позиций, занимаемых
      //   участниками в отношении поставленных задач. Задача организации, в
      //   особенности же Значимость этих проблем`,
      //   imgSrc: '/static/img/main_slider2.c6bb605.png',
      //   gallery: [
      //     {img: '/static/img/main_slider2.c6bb605.png'},
      //     {img: '/static/img/main_slider1.d7da8ad.png'},
      //     {img: '/static/img/main_slider2.c6bb605.png'},
      //     {img: '/static/img/main_slider2.c6bb605.png'},
      //     {img: '/static/img/main_slider1.d7da8ad.png'}
      //   ]
      // }
    ]
  },
  mutations: {
    createPortfolio (state, payload) {
      // console.log(payload)
      state.portfolioList.push(payload)
    },
    loadPortfolio (state, payload) {
      state.portfolioList = payload
    },
    updatePortfolio (state, payload) {
      const portfolio = state.portfolioList.find(a => {
        return a.id === payload.id
      })
      portfolio.title = payload.title
      portfolio.description = payload.description
      if (payload.imgSrc) {
        // console.log(payload.imgSrc)
        portfolio.imgSrc = payload.imgSrc
      }
      if (payload.gallery) {
        portfolio.gallery = payload.gallery
      }
    }
  },
  actions: {
    async fetchPortfolio ({commit}) {
      const resultPortfolio = []

      try {
        const portfolioVal = await fb.database().ref('portfolio').once('value')
        const portfolios = portfolioVal.val()
        Object.keys(portfolios).forEach(key => {
          const portfolio = portfolios[key]
          resultPortfolio.push(
            new Portfolio(
              portfolio.title,
              portfolio.description,
              portfolio.imgSrc,
              portfolio.gallery,
              key
            )
          )
          // console.log(resultPortfolio)
          commit('loadPortfolio', resultPortfolio)
        })
      } catch (error) {
        // alert(error.message)
        throw error
      }
    },
    async createPortfolio ({commit, getters}, payload) {
      const image = payload.image
      const gallerySrc = payload.gallery

      const Promises = []

      function setImageStorage (array, service) {
        array.forEach(async (el, i) => {
          Promises.push(new Promise(async (resolve, reject) => {
            const imageExt = el.name.slice(el.name.lastIndexOf('.'))
            const fileData = await fb.storage().ref(`portfolio/${service.key}/image${i}${imageExt}`).put(el)
            const img = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
            resolve({ img: img })
          }))
        })
      }
      try {
        const newPortfolio = new Portfolio(
          payload.title,
          payload.description,
          '',
          [{img: '1234'}]
        )
        if (image === null) {
          throw new Error('Main image is required')
        } else {
          const portfolio = await fb.database().ref('portfolio').push(newPortfolio)
          await setImageStorage(gallerySrc, portfolio)
          const gallery = await Promise.all(Promises)
          await fb.database().ref('portfolio').child(portfolio.key).update({ gallery })
          
          const imageExt = image.name.slice(image.name.lastIndexOf('.'))
          // console.log('imageExt - ' + imageExt)
          const fileData = await fb.storage().ref(`portfolio/${portfolio.key}/main${imageExt}`).put(image)
          const imgSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
          // console.log('imgSrc - ' + imgSrc)
          
          await fb.database().ref('portfolio').child(portfolio.key).update({imgSrc})
          commit('createPortfolio', {
            ...newPortfolio,
            id: portfolio.key,
            imgSrc,
            gallery
          })
        }
      } catch (error) {
        alert(error.message)
        // throw error
      }
    },
    async removePortfolio ({commit, getters}, id) {
      try {
        await fb.database().ref('portfolio').child(id).remove()
        await fb.storage().ref('portfolio').child(id).remove()
      } catch (error) {
        alert(error.message)
        throw error
      }
    },
    async updatePortfolio ({commit}, {title, description, imgSrc, gallery, id}) {
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
          description: description
        }
        if (image === null && gallerySrc.length === 0) {
          // console.log('Not image and not gallery')
          await fb.database().ref('portfolio').child(id).update(updateObject)
          commit('updatePortfolio', {
            ...updateObject,
            id
          })
        } else if (image !== null && gallerySrc.length === 0) {
          // console.log('True image and not gallery')
          const imageExt = image.name.slice(image.name.lastIndexOf('.'))
          const fileData = await fb.storage().ref(`portfolio/${id}/main${imageExt}`).put(image)
          const imgSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
          // console.log(imgSrc)
          await fb.database().ref('portfolio').child(id).update({
            ...updateObject,
            imgSrc
          })
          commit('updatePortfolio', {
            ...updateObject,
            imgSrc,
            id
          })
        } else if (image == null && gallerySrc.length !== 0) {
          // console.log('Not image and true gallery')
          await setImageStorage(gallerySrc, id)
          const gallery = await Promise.all(Promises)
          await fb.database().ref('portfolio').child(id).update({
            ...updateObject,
            gallery
          })
          commit('updatePortfolio', {
            ...updateObject,
            gallery,
            id
          })
        } else {
          // console.log('All is true')
          const imageExt = image.name.slice(image.name.lastIndexOf('.'))
          const fileData = await fb.storage().ref(`portfolio/${id}/main${imageExt}`).put(image)
          const imgSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
          await setImageStorage(gallerySrc, id)
          const gallery = await Promise.all(Promises)
          await fb.database().ref('portfolio').child(id).update({
            ...updateObject,
            imgSrc,
            gallery
          })
          commit('updatePortfolio', {
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
    }
  },
  getters: {
    portfolioList (state) {
      return state.portfolioList
    },
    portfolioById (state) {
      return portfolioId => {
        return state.portfolioList.find(portfolio => {
          return portfolio.id === portfolioId
        })
      }
    }
  }
}
