<script setup>
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue'
import AboveFooterVue from './components/AboveFooter.vue'
import { provide,ref } from 'vue';
import { useRoute } from 'vue-router';
const title = ref('test')
provide('title', title)

const route = useRoute();
</script>

<template>
<main class="flex flex-col">
  <HeaderVue @emit-name="" :title="'Arif sadsadsa'" />
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li> <router-link to="/services">Services</router-link></li>
    <li> <router-link to="/contact">Contact</router-link></li>
    <li><router-link to="/about">About</router-link>
     </li>
  </ul>
  <div class="flex-1">
    <router-view></router-view>
  </div>
  <AboveFooterVue v-if="route.path!='/contact'"></AboveFooterVue>
  <FooterVue />
</main>
</template>