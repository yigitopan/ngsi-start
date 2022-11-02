<script setup>
import { defineProps } from 'vue';
const title = inject('title')

const name = ref();
const emits = defineEmits('emit-name');

</script>

<template>
    <header class="text-center py-10 bg-gray-100">
    {{ title }}
  </header>
</template>