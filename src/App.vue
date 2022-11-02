<script setup>
import { ref } from "vue"
const isVisible = ref(true);

const counter = ref(0);

const addOne = (add) => {
  counter.value = counter.value + add;
}
</script>

<template>
<div class="p-2.5 text-white text-center text-sm font-semibold bg-gray-800 tracking-widest uppercase">NGSI Corporate Website Example</div>
</template>