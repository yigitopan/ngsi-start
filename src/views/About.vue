<script setup>
const brands = ['BMW', 'Renault', 'Fiat', 'Tesla', 'TOGG'];

</script>

<template>
  <div>
    <ul>
      <li v-for="brand in brands" :key="brand">
        {{ brand }}
        <div v-if="brand === 'Tesla'" class="text-red-500 font-bold">T</div>
      </li>
    </ul>
  </div>
</template>
