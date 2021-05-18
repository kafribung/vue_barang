import axios from 'axios'
export default {
    state:  {
        // Untuk tujuan belajar, data yang ada di state hanya dapat diakses di login
        // Sehingga data harus disimpan di localstorage
        token: null,
        errors: null,
    },
    getters: {
        getError: state => {
            return state.errors
        }
    },
    mutations: {
        SET_ERROR(state, name) {
            state.errors = name  
        },
        // Tidak dipakai
        SET_TOKEN(state, token) {
            state.token = token
        }
    },
    actions: {
        login({commit, dispatch }, data) {
            axios.post('http://127.0.0.1:8000/api/login', data)
            .then(response => {
                // Mengirim data ke method attemp
                dispatch('attemp', response.data.data.token)
                localStorage.setItem('token', response.data.data.token)
                window.location('dashboard');
            })
            .catch(error => {
                commit('SET_ERROR', error.response.data.msg)
            })
        },
        // async login({commit, dispatch }, data) {
        //     try {
        //         const response = await axios.post('http://127.0.0.1:8000/api/login', data);
        //         // Mengirim data ke method attemp
        //         dispatch('attemp', response.data.data.token)
        //         localStorage.setItem('token', response.data.data.token)
        //         window.location('dashboard');
        //     }
        //     catch (error) {
        //         // Langusung melakukan mutasi, tanpa mengirim data
        //         commit('SET_ERROR', error.response.data.msg)
        //     }
        // },
        // Method Attemp Set Token yang dikirim dari method login
        attemp({commit}, token) {
            commit('SET_TOKEN', token)
        }
    },
}