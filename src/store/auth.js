import axios from 'axios'
export default {
    state:  {
        token: null,
        user: null,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        }
    },
    actions: {
        async login({ dispatch }, data) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', data);
                // Mengirim daata ke method attemp
                dispatch('attemp', response.data.token)
            } catch (error) {
                console.log(error.response.data.msg)
            }
        },
        attemp() {
            
        }
    },
}