import axios from 'axios'
export default {
    state:  {
        token: null,
        user: null,
    },
    mutations: {
    },
    actions: {
        async login(commit, data) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', data);
                // this.user  = response.data.name
                // this.token = response.data.token
                console.log(response.data.token);
            } catch (error) {
                console.log(error.response.data.msg)
            }
            
        }
    },
}