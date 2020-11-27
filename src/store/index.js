import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: []
  },
  mutations: {
    Set_Personas(state, personas){
      state.personas=personas
    }
  },
  actions: {
    setPersonas({commit}){
      axios.get('http://localhost:3000/').then(response =>{
        console.log(response)
        commit('Set_Personas', response.data)
      })
    }
  },
  getters: {
    allPersonas: state => {
      return state.personas
    }
  }
})
