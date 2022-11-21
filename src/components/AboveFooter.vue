<script setup>

</script>

<style>
.aboveFooter .whitespace-nowrap{
    text-shadow: 1px 1px 2px black;
}

</style>
<template>
    <div class="bg-mainColor py-4 aboveFooter border-b-[1px] border-white">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-3 content-center justify-items-center">

                <div class="my-3 sm:my-0 flex items-center flex-row flex-wrap">
                    <div class="w-16 sm:w-full lg:w-fit flex justify-center above-footer-logo-wrapper">
                        <div class="border-4 rounded-full border-white"><img class="w-14 p-3" src="../assets/telefon.svg"/></div>
                    </div>
                    <div class="w-48 whitespace-nowrap sm:w-full lg:w-fit self-center text-center pl-2 font-semibold text-white">+49 75 23 222 35</div>
                </div>

                <div class="my-3 sm:my-0 flex items-center flex-row flex-wrap">
                    <div class="w-16 sm:w-full lg:w-fit flex justify-center above-footer-logo-wrapper">
                        <div class="border-4 rounded-full border-white"><img class="w-14 p-3" src="../assets/location.svg"/></div>
                    </div>
                    <div class="w-48 whitespace-nowrap sm:w-full lg:w-fit self-center text-center lg:text-left pl-2 font-semibold text-white">
                        <p>Robert Bosch Straße </p>
                        <p>74196 Neuenstadt am Kocher</p>
                    </div>
                </div>

                <div class="my-3 sm:my-0 flex items-center flex-row flex-wrap">
                    <div class="w-16 sm:w-full lg:w-fit flex justify-center above-footer-logo-wrapper">
                        <div class="border-4 rounded-full border-white"><img class="w-14 p-3" src="../assets/mail.svg"/></div>
                    </div>
                    <div class="w-48 whitespace-nowrap sm:w-full lg:w-fit self-center text-center pl-2 font-semibold text-white">mesut.guengoer@bauwerk.de</div>
                </div>

        </div>
    </div>
</template>