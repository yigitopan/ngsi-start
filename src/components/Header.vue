<script setup>
import { defineProps } from 'vue';
defineProps(['title'])
</script>

<template>
    <header class="text-center py-10 bg-gray-100">
    {{ title }}
  </header>
</template>