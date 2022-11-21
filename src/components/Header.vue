<script setup>
import { defineProps,inject,ref } from 'vue';
import MobileHeaderVue from './MobileHeader.vue';
const title = inject('title')
const name = ref();
const emits = defineEmits('emit-name');

</script>
<style>
.bauwerk-nav {
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.6);
  z-index: 9999;
}
</style>

<template>
  <MobileHeaderVue class="block sm:hidden"></MobileHeaderVue>
  <div class="hidden sm:flex bg-white bauwerk-nav sticky top-0 w-full justify-between">
   <div>
      <img class="-mr-1 ml-2 h-24" src="../assets/firmlogo-removebg-preview.png">
   </div>
   <div class="flex items-center uppercase">
 <router-link class="shadow-sm px-4 py-2  text-md font-thin text-gray-700 hover:text-mainColor hover:font-semibold" to="/">Home</router-link>
 <router-link class="shadow-sm px-4 py-2 text-md font-thin text-gray-700 hover:text-mainColor hover:font-semibold" to="/about">
   About
 </router-link>
 <router-link class="shadow-sm px-4 py-2  text-md font-thin text-gray-700 hover:text-mainColor hover:font-semibold" to="/contact">Contact</router-link>
 <router-link class="shadow-sm px-4 py-2  text-md font-thin text-gray-700 hover:text-mainColor hover:font-semibold" to="/services">Services</router-link>
</div>
</div>
 
</template>