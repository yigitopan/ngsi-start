<script setup>
import { defineProps,inject,ref } from 'vue';
const title = inject('title')

const name = ref();
const emits = defineEmits('emit-name');

</script>

<template>
  <div class="flex justify-between">
   <div>
      <img class="-mr-1 ml-2 h-10 w-10" src="../assets/firmlogo-removebg-preview.png">
   </div>
   <div>
 <router-link class="shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" to="/">Home</router-link>
 <router-link class="shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" to="/about">
   About
 </router-link>
 <router-link class="shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" to="/contact">Contact</router-link>
 <router-link class="shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" to="/services">Services</router-link>
</div>
</div>
 
</template>