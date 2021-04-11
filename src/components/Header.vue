<template>
    <div>
    <Sidebar/>
    <div class="flex flex-col flex-1 w-full">
        
    </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'
export default {
    name: "Header",
    data() {
        return {
            // Header
            toggleSideMenuMobile: false,
            toggleTheme: false,
            toggleNotificationsMenu: false,
            toggleProfileMenu: false,
        }
    },
    components:{
        Sidebar
    }
}
</script>

<style>

</style>