<script setup>
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue'
import AboveFooterVue from './components/AboveFooter.vue'
import { useRoute } from 'vue-router';
import {ref} from 'vue'
import { onBeforeUnmount, onMounted } from "vue"

const scrolled = ref(false)

const changeHeaderStyleOnScroll = () => {
    scrolled.value = (window.scrollY>40);
    console.log(scrolled.value)
}

onMounted(() => {
    window.addEventListener('scroll', changeHeaderStyleOnScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', changeHeaderStyleOnScroll)
})




const route = useRoute();
</script>

<template>
<main class="flex flex-col">
  <HeaderVue :isScrolled="scrolled" />
  <div class="flex-1">
    <router-view></router-view>
  </div>
  <AboveFooterVue v-if="route.path!='/contact'"></AboveFooterVue>
  <FooterVue />
</main>
</template>