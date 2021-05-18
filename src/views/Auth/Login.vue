<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2">
                    <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src="../../assets/img/login-office.jpeg" alt="Office" />
                    <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block" src="../../assets/img/login-office-dark.jpeg" alt="Office" />
                    </div>
                    <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <form v-on:submit.prevent="handleLogin">
                        <div class="w-full">
                            <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login {{ form.email }} - {{ form.password }}</h1>
                            <label class="block text-sm"><span class="text-gray-700 dark:text-gray-400">Email</span>
                            <input  v-model="form.email" class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none bg-gray-100 py-2 rounded-md focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" placeholder="user@user.com" type="email" />
                            <small v-if="getError" class="text-red-500">{{ getError }}</small>
                            </label>
                            <label class="block mt-4 text-sm"><span class="text-gray-700 dark:text-gray-400">Password</span>
                            <input  v-model="form.password" class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none bg-gray-100 py-2 rounded-md focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="password" type="password" /></label>
                            <!-- You should use a button here, as the anchor is only used for the example  -->
                            <button class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {    
    name:'Login',
    data() {
        return {
            form: {}
        }
    },
    computed:{
        // Cara 1 Getters
        // getError(){
        //     return this.$store.getters.getError
        // }
        // Cara 2
        ...mapGetters([
            'getError'
        ])
    },
    methods: {
        // Cara 1 Action
        // handleLogin(){
        //     this.$store.dispatch('login', this.form)
        // },
        // Cara 2
        ...mapActions([
            'login'
        ]),
        handleLogin(){
            if (this.login(this.form)) {
                // this.$router.push('/dashboard')
                console.log('dashboard')
            }
                console.log('login')
            // this.$router.push('/login')
        },
    },
}
</script>