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
    },
    savePersona({commit},{params, onComplete}){
      axios.post('http://localhost:3000/', params).then(onComplete).catch(err => {
        console.log(err)
      })
    }
  },
  getters: {
    allPersonas: state => {
      return state.personas
    }
  }
})
