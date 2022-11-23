<script setup>
import { defineProps,inject,ref } from 'vue';
import MobileHeaderVue from './MobileHeader.vue';
const name = ref();
const emits = defineEmits('emit-name');
const props = defineProps(['isScrolled'])
</script>


<style>
.header-desk {
  z-index: 9999;
  box-shadow: 1px -5px 20px 2px rgb(0 0 0 / 60%);
  }
</style>

<template>
  <MobileHeaderVue class="block sm:hidden"></MobileHeaderVue>
  <div :class="{'bg-white':!isScrolled, 'bg-mainColor bg-opacity-60':isScrolled}" class="transition backdrop-blur-md ease-in-out duration-500 hidden sm:block  bauwerk-nav sticky top-0 w-full  header-desk">
    <div  class="container flex mx-auto justify-between">
    <div class="animate-fadeInLeft">
        <img :class="{'brightness-0 invert': isScrolled}" class="mr-1 ml-2 h-24" src="../assets/firmlogo-removebg-preview.png">
    </div>
    <div class="flex items-center uppercase animate-fadeInRight transition ease-in-out duration-300">
  <router-link :class="{'text-gray-700 hover:text-mainColor':!isScrolled, 'text-white hover:text-gray-700':isScrolled}" class="px-4 py-2  text-md font-bold hover:font-semibold" to="/">Home</router-link>
  <router-link :class="{'text-gray-700 hover:text-mainColor':!isScrolled, 'text-white hover:text-gray-700':isScrolled}" class="px-4 py-2 text-md font-bold hover:font-semibold" to="/about">
    About
  </router-link>
  <router-link :class="{'text-gray-700 hover:text-mainColor':!isScrolled, 'text-white hover:text-gray-700':isScrolled}" class="px-4 py-2  text-md font-bold hover:font-semibold" to="/contact">Contact</router-link>
  <router-link :class="{'text-gray-700 hover:text-mainColor':!isScrolled, 'text-white hover:text-gray-700':isScrolled}" class="px-4 py-2  text-md font-bold hover:font-semibold" to="/services">Services</router-link>
  </div>
</div>
</div>
 
</template>