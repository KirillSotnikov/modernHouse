
export default {
  state: {
    advantages: [
      {
        title: 'Преимущества 1',
        description: '1.Идейные соображения высшего порядка, а также начало повседневной…'
      },
      {
        title: 'Преимущества 2',
        description: '2.Идейные соображения высшего порядка, а также начало повседневной…'
      },
      {
        title: 'Преимущества 3',
        description: '3.Идейные соображения высшего порядка, а также начало повседневной…'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    advantages (state) {
      return state.advantages
    }
  }
}
