
export default {
  state: {
    podCategories: [
      {
        id: 1,
        title: 'Окна',
        description: '1.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
        imgSrc: '/static/img/main_slider1.d7da8ad.png',
        promo: true,
        advantages: [
          {title: 'Лучшая звукоизоляция'},
          {title: 'Лучшая шумоизоляция'},
          {title: 'Лучшая Noизоляция'},
          {title: 'Лучшая пукоизоляция'},
          {title: 'Лучшая рукоизоляция'},
          {title: 'Лучшая рукоизоляция'}
        ],
        gallery: [
          {img: '/static/img/main_slider1.d7da8ad.png'},
          {img: '/static/img/about.df072d6.png'},
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/about.df072d6.png'},
          {img: '/static/img/main_slider1.d7da8ad.png'}
        ]
      },
      {
        id: 2,
        title: 'Двери',
        description: '2.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
        imgSrc: '/static/img/about.df072d6.png',
        promo: false,
        advantages: [
          {title: 'Лучшая звукоизоляция'},
          {title: 'Лучшая шумоизоляция'},
          {title: 'Лучшая пукоизоляция'},
          {title: 'Лучшая рукоизоляция'},
          {title: 'Лучшая Noизоляция'},
          {title: 'Лучшая Noизоляция'}
        ],
        gallery: [
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/main_slider1.d7da8ad.png'},
          {img: '/static/img/about.df072d6.png'},
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/about.df072d6.png'}
        ]
      },
      {
        id: 3,
        title: 'Окна 2',
        description: '3.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
        imgSrc: '/static/img/main_slider1.d7da8ad.png',
        promo: true,
        advantages: [
          {title: 'Лучшая пукоизоляция'},
          {title: 'Лучшая рукоизоляция'},
          {title: 'Лучшая звукоизоляция'},
          {title: 'Лучшая шумоизоляция'},
          {title: 'Лучшая Noизоляция'},
          {title: 'Лучшая Noизоляция'}
        ],
        gallery: [
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/about.df072d6.png'},
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/about.df072d6.png'},
          {img: '/static/img/main_slider1.d7da8ad.png'}
        ]
      },
      {
        id: 4,
        title: 'Двери 2',
        description: '4.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
        imgSrc: '/static/img/about.df072d6.png',
        promo: false,
        advantages: [
          {title: 'Лучшая рукоизоляция'},
          {title: 'Лучшая Noизоляция'},
          {title: 'Лучшая звукоизоляция'},
          {title: 'Лучшая шумоизоляция'},
          {title: 'Лучшая пукоизоляция'},
          {title: 'Лучшая пукоизоляция'}
        ],
        gallery: [
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/about.df072d6.png'},
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/main_slider1.d7da8ad.png'}
        ]
      },
      {
        id: 5,
        title: 'Окна 3',
        description: '5.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
        imgSrc: '/static/img/main_slider1.d7da8ad.png',
        promo: false,
        advantages: [
          {title: 'Лучшая звукоизоляция'},
          {title: 'Лучшая рукоизоляция'},
          {title: 'Лучшая шумоизоляция'},
          {title: 'Лучшая пукоизоляция'},
          {title: 'Лучшая Noизоляция'},
          {title: 'Лучшая Noизоляция'}
        ],
        gallery: [
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/about.df072d6.png'},
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/about.df072d6.png'}
        ]
      },
      {
        id: 6,
        title: 'Двери 3',
        description: '6.Идейные соображения высшего порядка, а также начало повседневной соображения высшего порядка',
        imgSrc: '/static/img/about.df072d6.png',
        promo: true,
        advantages: [
          {title: 'Преимущество нет :('}
        ],
        gallery: [
          {img: '/static/img/main_slider1.d7da8ad.png'},
          {img: '/static/img/podservices.c6790b6.png'},
          {img: '/static/img/main_slider1.d7da8ad.png'},
          {img: '/static/img/about.df072d6.png'},
          {img: '/static/img/main_slider1.d7da8ad.png'}
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    podCategories (state) {
      return state.podCategories.map((category) => {
        return ({
          ...category,
          backgroundStyle: `background:url('${category.imgSrc}') center/cover no-repeat`
        })
      })
    },
    servicePromo (state) {
      return state.podCategories.filter(service => {
        return service.promo
      })
    },
    serviceById (state) {
      return serviceId => {
        return state.podCategories.find(service => {
          return service.id === Number(serviceId)
        })
      }
    }
  }
}
