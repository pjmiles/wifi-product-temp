<template>
    <aside class="flex flex-col w-24 p-4 overflow-hidden min-h-screen border">
        <div class="logo">
            <img :src="vmo2Logo" alt="vmo2 logo"/>
        </div>
        <ul class="flex flex-col space-y-1 py-1 ml-2">
            <router-link to="/">
                <li class="sidebar-item"><DashboardIcon/></li>
            </router-link>
            <li class="sidebar-item"><ReportIcon /></li>
            <li class="sidebar-item"><BrandIconn /></li>
            <li class="sidebar-item"><VenueIcon /></li>
            <router-link to="/products">
                <li class="sidebar-item"><ProductIcon /></li>
            </router-link>
            <li class="sidebar-item"><VoucherIcon /></li>
        </ul>
        <div class="flex items-center justify-center mt-auto">
           <ToggleButton />
        </div>
    </aside>
</template>

<script setup>
import vmo2Logo from '../assets/vmo2nlogo.png'
import DashboardIcon from '../assets/icons/Dashboard-default.svg'
import ReportIcon from '../assets/icons/Report-default.svg'
import BrandIconn from '../assets/icons/Brand-default.svg'
import VenueIcon from '../assets/icons/Venue-default.svg'
import ProductIcon from '../assets/icons/Products-default.svg'
import VoucherIcon from '../assets/icons/Voucher-default.svg'
import ToggleButton from './common/ToggleButton.vue'
</script>

<style scoped>
.logo{
    margin-bottom: 2rem;
}
img {
    width: 3rem;
    height: auto;
    margin-left: 0.5rem;
}

.sidebar-item {
    padding: 0.7rem;
    transition: all 0.2s;
    border-radius: 0.5rem;
    cursor: pointer;
}

.sidebar-item:hover {
    background-color: #e5e7eb; 
    color: #374151; 
    transform: scale(1.1);
}

</style>