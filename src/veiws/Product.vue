<template>
    <div class="flex-1 p-5">
        <div class="flex justify-between mb-2">
            <p>Products /</p>
            <img src="../assets/Avatar.png" alt="Avatar"/>
        </div>
        <h1 class="text-3xl mb-7">All products</h1>
        <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="mb-2 md:mb-0">14:10 Weds 14 August 2024 – 14:09 Fri 13 Sept 2024</p>
            <div class="flex flex-wrap space-x-2">
                <BaseButton label="Last Updated" />
                <BaseButton label="Last month" />
                <BaseButton label="Last week" />
                <BaseButton label="Last 24 hours" />
            </div>
            </div>

        `<div class="flex justify-start space-x-5 w-full mb-4">
            <div class="bg-gray-100 w-1/5 rounded-lg p-5">
                <h2 class="font-medium mb-2">Product report summary</h2>
                <p class="text-3xl font-semibold inline-flex items-center">
                    1,999 
                    <span class="ml-2">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.999 4.66667L21.8964 17.5L13.999 16.5128L6.10156 17.5L13.999 4.66667Z" fill="#00C908"/>
                        </svg>
                    </span>
                </p>
            </div>`
            <div class="bg-gray-100 w-1/5 rounded-lg p-5">
                <h2 class="font-medium mb-2">Product report summary</h2>
                <p class="text-3xl font-semibold inline-flex items-center">
                    595 
                    <span class="ml-2">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.999 23.3333L21.8964 10.5L13.999 11.4872L6.10156 10.5L13.999 23.3333Z" fill="#FF0000"/>
                        </svg>
                    </span>
                </p>
            </div>
        </div>
        <div class="bg-white rounded-lg border p-4 mb-5">
            <div class="flex justify-between mb-2">
                <p class="font-semibold">Top 10</p>
                <div class="flex space-x-2">
                    <span> 
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M16 20.4199L11.0192 15.4391L12.2489 14.1739L15.125 17.05V7.25H16.875V17.05L19.7511 14.1739L20.9808 15.4391L16 20.4199ZM9.35904 24.75C8.76968 24.75 8.27083 24.5458 7.8625 24.1375C7.45417 23.7292 7.25 23.2303 7.25 22.641V19.4775H9V22.641C9 22.7308 9.03743 22.813 9.11229 22.8877C9.18696 22.9626 9.26921 23 9.35904 23H22.641C22.7308 23 22.813 22.9626 22.8877 22.8877C22.9626 22.813 23 22.7308 23 22.641V19.4775H24.75V22.641C24.75 23.2303 24.5458 23.7292 24.1375 24.1375C23.7292 24.5458 23.2303 24.75 22.641 24.75H9.35904Z" fill="#151417"/>
                        </svg>
                    </span>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.058 23.0417C11.5347 23.0417 9.38727 22.1636 7.61569 20.4076C5.84391 18.6516 4.95802 16.5157 4.95802 14V13.0891L2.79969 15.2475L1.57031 14.0181L5.83302 9.75508L10.0957 14.0181L8.86635 15.2475L6.70802 13.0891V14C6.70802 16.0267 7.42144 17.7487 8.84827 19.166C10.2753 20.5831 12.0119 21.2917 14.058 21.2917C14.5412 21.2917 15.0239 21.239 15.5061 21.1336C15.9886 21.028 16.4594 20.8698 16.9187 20.659L18.2312 21.9715C17.5745 22.3245 16.8966 22.591 16.1974 22.7713C15.498 22.9515 14.7849 23.0417 14.058 23.0417ZM22.1664 18.2449L17.9036 13.9819L19.133 12.7525L21.2914 14.9109V14C21.2914 11.9733 20.5779 10.2513 19.1511 8.834C17.7241 7.41688 15.9875 6.70833 13.9414 6.70833C13.4582 6.70833 12.9755 6.76102 12.4932 6.86641C12.0108 6.97199 11.54 7.13018 11.0807 7.34095L9.76819 6.02845C10.4248 5.67554 11.1028 5.40895 11.802 5.2287C12.5014 5.04845 13.2145 4.95833 13.9414 4.95833C16.4647 4.95833 18.6121 5.83634 20.3837 7.59237C22.1555 9.3484 23.0414 11.4843 23.0414 14V14.9109L25.1997 12.7525L26.4291 13.9819L22.1664 18.2449Z" fill="#151417"/>
                        </svg>
                    </span>
                    <span>
                        <svg width="24" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1263 17.5417H12.8763V10.8333H11.1263V17.5417ZM12.0013 8.83659C12.2683 8.83659 12.4921 8.74627 12.6727 8.56563C12.8534 8.38499 12.9437 8.16118 12.9437 7.89421C12.9437 7.62724 12.8534 7.40344 12.6727 7.2228C12.4921 7.04235 12.2683 6.95213 12.0013 6.95213C11.7343 6.95213 11.5105 7.04235 11.3299 7.2228C11.1492 7.40344 11.0589 7.62724 11.0589 7.89421C11.0589 8.16118 11.1492 8.38499 11.3299 8.56563C11.5105 8.74627 11.7343 8.83659 12.0013 8.83659ZM12.0033 23.0833C10.4703 23.0833 9.02941 22.7924 7.68055 22.2107C6.33169 21.6289 5.15841 20.8394 4.16072 19.842C3.16302 18.8447 2.37309 17.6719 1.79093 16.3237C1.20895 14.9754 0.917969 13.5349 0.917969 12.002C0.917969 10.469 1.20886 9.02812 1.79064 7.67925C2.37241 6.33039 3.16196 5.15712 4.15926 4.15942C5.15657 3.16173 6.32936 2.3718 7.67764 1.78963C9.02591 1.20766 10.4665 0.916672 11.9993 0.916672C13.5323 0.916672 14.9732 1.20756 16.3221 1.78934C17.6709 2.37112 18.8442 3.16066 19.8419 4.15796C20.8396 5.15527 21.6295 6.32806 22.2117 7.67634C22.7936 9.02462 23.0846 10.4652 23.0846 11.998C23.0846 13.531 22.7937 14.9719 22.212 16.3208C21.6302 17.6696 20.8406 18.8429 19.8433 19.8406C18.846 20.8383 17.6732 21.6282 16.325 22.2104C14.9767 22.7924 13.5361 23.0833 12.0033 23.0833ZM12.0013 21.3333C14.6069 21.3333 16.8138 20.4292 18.6221 18.6208C20.4305 16.8125 21.3346 14.6056 21.3346 12C21.3346 9.39445 20.4305 7.18751 18.6221 5.37917C16.8138 3.57084 14.6069 2.66667 12.0013 2.66667C9.39575 2.66667 7.1888 3.57084 5.38047 5.37917C3.57214 7.18751 2.66797 9.39445 2.66797 12C2.66797 14.6056 3.57214 16.8125 5.38047 18.6208C7.1888 20.4292 9.39575 21.3333 12.0013 21.3333Z" fill="#151417"/>
                        </svg>
                    </span>
                </div>
            </div>
            <p class="mb-3">Top results from a time period</p>
            <div class="grid grid-cols-2 gap-6">
                <ul class="col-span-2 grid grid-cols-2 gap-x-20 gap-y-2">
                    <li class="flex justify-between items-center p-2" v-for="(product, index) in products" :key="product.id">
                        <span class="inline-flex items-center space-x-8">
                            <span class="text-sm text-gray-400 font-medium">{{ index + 1 }}</span>
                            <span class="">{{ product.name }}</span>
                        </span>
                        <span class="text-sm font-semibold">{{ product.percentage }}.00%</span>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center mb-2">
                <div class="flex item-center space-x-4"> 
                    <p class="mt-3">Sort by</p>
                    <button class="border font-medium rounded-full px-5 py-2.5 me-2 mb-2 text-center hover:bg-black hover:text-white transition">A-Z</button>
                    <button class="border font-medium rounded-full px-5 py-2.5 me-2 mb-2 text-center hover:bg-black hover:text-white transition">Active/Inactice</button>
                    <button class="border font-medium rounded-full px-5 py-2.5 me-2 mb-2 text-center hover:bg-black hover:text-white transition">Duration</button>
                </div>
                <div>
                    <input type="search" class="block w-full p-3 pl-5 text-sm rounded-full border" placeholder="Search" />
                </div>
            </div> 
            <hr />
            <div class="grid grid-cols-2 w-full gap-5">
            <div v-for="product in productDetails" :key="product.name" class="bg-gray-100 rounded-lg p-8">
                <p class="text-2xl mb-2">{{ product.name }} ></p>
                <ul class="text-gray-500">
                    <li class="mb-1">Upload speed: {{ product.uploadSpeed }}</li>
                    <li class="mb-1">Download speed: {{ product.downloadSpeed }}</li>
                    <li class="mb-1">Number of devices: {{ product.numberOfDevices }}</li>
                    <li class="mb-1">Data limit: {{ product.dataLimit }}</li>
                    <li class="mb-1">Number of reuses: {{ product.numberOfReuses }}</li>
                    <li class="mb-1">Valid: {{ product.validity }}</li>
                </ul>
            </div>
    </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue';

const products = reactive([
    { id: 1, name: 'Product', percentage: 0 },
    { id: 2, name: 'Product', percentage: 0 },
    { id: 3, name: 'Product', percentage: 0 },
    { id: 4, name: 'Product', percentage: 0 },
    { id: 5, name: 'Product', percentage: 0 },
    { id: 6, name: 'Product', percentage: 0 },
    { id: 7, name: 'Product', percentage: 0 },
    { id: 8, name: 'Product', percentage: 0 },
    { id: 9, name: 'Product', percentage: 0 },
    { id: 10, name: 'Product', percentage: 0 }
])

const productDetails = [
    {
        name: "Product 1",
        uploadSpeed: "20mbps",
        downloadSpeed: "60mbps",
        numberOfDevices: 3,
        dataLimit: "10GB",
        numberOfReuses: 100,
        validity: "3 Sept 2024 — 5 Sept 2024"
    },
    {
        name: "Product 2",
        uploadSpeed: "25mbps",
        downloadSpeed: "70mbps",
        numberOfDevices: 5,
        dataLimit: "15GB",
        numberOfReuses: 150,
        validity: "1 Oct 2024 — 7 Oct 2024"
    },
    {
        name: "Product 3",
        uploadSpeed: "30mbps",
        downloadSpeed: "80mbps",
        numberOfDevices: 4,
        dataLimit: "12GB",
        numberOfReuses: 200,
        validity: "10 Oct 2024 — 15 Oct 2024"
    },
    {
        name: "Product 4",
        uploadSpeed: "15mbps",
        downloadSpeed: "50mbps",
        numberOfDevices: 2,
        dataLimit: "8GB",
        numberOfReuses: 80,
        validity: "5 Oct 2024 — 10 Oct 2024"
    },
    {
        name: "Product 5",
        uploadSpeed: "40mbps",
        downloadSpeed: "90mbps",
        numberOfDevices: 6,
        dataLimit: "20GB",
        numberOfReuses: 300,
        validity: "12 Oct 2024 — 20 Oct 2024"
    }
];
</script>

<style scoped>

</style>