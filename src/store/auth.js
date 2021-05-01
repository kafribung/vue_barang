import axios from 'axios'
export default {
    state:  {
        token: null,
        user: null,
    },
    mutations: {
        SET_NAME(state, name) {
            state.user = name  
        },
        SET_TOKEN(state, token) {
            state.token = token
        }
    },
    actions: {
        async login({ commit, dispatch }, data) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', data);

                // Mengirim daata ke method attemp
                dispatch('attemp', response.data.data.token)
            } catch (error) {
                console.log(error)
            }
        },
        attemp({commit}, token) {
            commit('SET_TOKEN', token)
        }
    },
}