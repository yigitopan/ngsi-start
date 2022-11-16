
<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const serviceHeroClick = (selected) => {
    router.push(`/services/${selected}`)
}

</script>

<style>
.service-main-title::after {
    display: block;
    content: "";
    background: #F4BC16;
    width: 40px;
    height: 3px;
    margin: 13px auto 0;
}

</style>


<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
            <div>
                <div @click="serviceHeroClick('malerarbeiten')"  class="cursor-pointer transition ease-in-out hover:contrast-50"><img class="w-full" src="https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_01.jpg" alt="" style="display: block;"/></div>
                <div><h3 class="tracking-wide uppercase service-main-title text-lg font-extrabold text-center py-3">Malerarbeiten/Vollwärmeschutz</h3></div>
                <div><p class="px-3 text-center font-light">We can help you bring new life to existing rooms and develop unused spaces.</p></div>
            </div>
            <div>
                <div @click="serviceHeroClick('trockenbau')" class="cursor-pointer transition ease-in-out hover:contrast-50"><img class="w-full" src="https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_02.jpg" alt="" style="display: block;"/></div>
                <div><h3 class="tracking-wide uppercase service-main-title text-lg font-extrabold text-center py-3">Trockenbau</h3></div>
                <div><p class="px-3 text-center font-light">We can help you bring new life to existing rooms and develop unused spaces.</p></div>
            </div>
            <div>
                <div @click="serviceHeroClick('stuckateur')" class="cursor-pointer transition ease-in-out hover:contrast-50"><img class="w-full" src="https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_03.jpg" alt="" style="display: block;"/></div>
                <div><h3 class="tracking-wide uppercase service-main-title text-lg font-extrabold text-center py-3">Stuckateur Arbeiten</h3></div>
                <div><p class="px-3 text-center font-light">We can help you bring new life to existing rooms and develop unused spaces.</p></div>
            </div>
            <div>
                <div @click="serviceHeroClick('esstisch')" class="cursor-pointer transition ease-in-out hover:contrast-50"><img class="w-full" src="https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_04.jpg" alt="" style="display: block;"/></div>
                <div><h3 class="tracking-wide uppercase service-main-title text-lg font-extrabold text-center py-3">Esstisch</h3></div>
                <div><p class="px-3 text-center font-light">We can help you bring new life to existing rooms and develop unused spaces.</p></div>
            </div>
            <div>
                <div @click="serviceHeroClick('fliesen')" class="cursor-pointer transition ease-in-out hover:contrast-50"><img class="w-full" src="https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_05.jpg" alt="" style="display: block;"/></div>
                <div><h3 class="tracking-wide uppercase service-main-title text-lg font-extrabold text-center py-3">Fliesen</h3></div>
                <div><p class="px-3 text-center font-light">We can help you bring new life to existing rooms and develop unused spaces.</p></div>
            </div>
            <div>
                <div @click="serviceHeroClick('aussenanlagen')" class="cursor-pointer transition ease-in-out hover:contrast-50"><img class="w-full" src="https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_06.jpg" alt="" style="display: block;"/></div>
                <div><h3 class="tracking-wide uppercase service-main-title text-lg font-extrabold text-center py-3">Außenanlagen</h3></div>
                <div><p class="px-3 text-center font-light">We can help you bring new life to existing rooms and develop unused spaces.</p></div>
            </div>
        </div>
    </div>
</template>