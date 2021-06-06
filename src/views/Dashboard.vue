<template>
    <div id="app">
        <!-- Side -->
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            <Sidebar/>
            <Dashboardcomponent/>
            <!-- END Headar & Main -->
        </div>
    </div>
</template>

<script>
import Sidebar from './../components/Sidebar'
import Dashboardcomponent from './../components/Dashboardcomponent'
export default {
    name: "Dashboard",
    data() {
        return {
        isSideMenuOpen: false,
        // Side Bar
        togglePagesMenu: false,
        closeSideMenu: false,
        // Header
        toggleTheme: true,
        toggleNotificationsMenu: false,
        toggleProfileMenu: false,
        toggleSideMenuMobile: false,
        };
    },
    methods: {
        // Dark Mode
        clickToggleTheme(){
            if (this.toggleTheme) {
                document.documentElement.classList.add('dark')
                this.toggleTheme = !this.toggleTheme
            } else {
                document.documentElement.classList.remove('dark')
                this.toggleTheme = !this.toggleTheme
            }
        }
    },
    components: {
        Sidebar,
        Dashboardcomponent,
    },
};
</script>
