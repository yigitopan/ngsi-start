<script setup>
</script>


<style>
.about-why{
	background-image: url('https://quanticalabs.com/Renovate/Template/images/samples/1920x1200/image_02.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center 0;
}

.about-nummer::after {
    display: block;
    content: "";
    position: absolute;
    left: 50%;
    top:100%;
    transform: translate(-50%,0%);    
    background: #F4BC16;
    width: 40px;
    height: 2px;
    margin-top: 0px;
}
</style>

<template>
  <div class="flex flex-wrap justify-evenly about-why text-white mt-14 py-40">
    <div class="mb-36 sm:mb-0 flex flex-col items-center w-full sm:w-1/3">
        <div class="rounded-full border w-40 h-40 border-solid border-white relative">
            <img class="w-min p-10 grayscale invert" src="../assets/location.svg" alt="">
        </div>
        <h2 class="text-center py-6 font-thin text-6xl about-nummer relative">15</h2>
        <p class="text-center font-thin text-medium text-3xl pt-5">Jahre Erfahrung</p>
    </div>

    <div class="mb-36 sm:mb-0 flex flex-col items-center w-full sm:w-1/3">
        <div class="rounded-full border w-40 h-40 border-solid border-white relative">
            <img class="w-min p-10 grayscale invert" src="../assets/mail.svg" alt="">
        </div>
        <h2 class="text-center py-6 font-thin text-6xl about-nummer relative">136</h2>
        <p class="text-center font-thin text-3xl pt-5">Abgeschlossene Projekte</p>
    </div>

    <div class="mb-36 sm:mb-0 flex flex-col items-center w-full sm:w-1/3">
        <div class="rounded-full border w-40 h-40 border-solid border-white relative">
            <img class="w-full p-10 grayscale invert" src="../assets/telefon.svg" alt="">
        </div>
        <h2 class="text-center py-6 font-thin text-6xl about-nummer relative">5</h2>
        <p class="text-center font-thin text-3xl pt-5">Kompetente Mitarbeiter</p>
    </div>
  </div>
  
</template>
