import axios from 'axios'
export default {
    state: {
        toke: null,
        user: {},
    },
    mutations: {
    },
    actions: {
        async login(commit, data) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', data);
                console.log(response.data)
            } catch (error) {
                console.log(error.response.data.msg)
            }
            
        }
    },
}