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
  <div class="flex-1">
    <router-view></router-view>
  </div>
  <AboveFooterVue v-if="route.path!='/contact'"></AboveFooterVue>
  <FooterVue />
</main>
</template>