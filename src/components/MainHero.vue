<script setup>

</script>

<style>
.bg-heroBg h1,.bg-heroBg p{
  text-shadow: 2px 2px 2px #0000007a;
  }

  .bg-heroBg {
    background-image:linear-gradient(rgba(255, 255, 255, 0.1), rgb(33, 49, 64, 0.8)), url('../assets/hero.jpg');
  }

</style>


<template>
    <div class="bg-heroBg bg-opacity-10 bg-fixed bg-center bg-cover flex justify-center align-middle">
    <div class="p-24 md:p-52 lg:p-72 xl:p-96 text-white flex flex-col">
      <h1 class="text-3xl sm:text-5xl pb-5 text-center">Gleichzeitig Innovativ & Qualitativ Services</h1>
      <p class="text-lg sm:text-xl text-center">Wir haben uns der Qualität und Perfektion verschrieben</p>
      <div class="mt-10 flex justify-center">
        <button class="text-sm sm:text-lg bg-white p text-mainColor px-5 py-3 rounded-xl uppercase hover:bg-black hover:text-white transition ease-in-out duration-300 font-bold button">Dienstleistungen ansehen</button>
      </div>
    </div>
    </div>
  </template>