<script setup>
import {useRouter, useRoute } from 'vue-router'
import { ref} from 'vue'

const route = useRoute()
const router = useRouter()

const serviceImgs = ref(null)

const selectFromServiceList = (selected) => {
    router.push(`/services/${selected}`);

    window.scrollTo({
        left: 0,
        top: serviceImgs.value.offsetTop,
        behavior: 'smooth'
    });
}
</script>

<style>
.service-subtitle:after {
    display: block;
    content: "";
    background: #F4BC16;
    width: 40px;
    height: 2px;
    margin-top: 13px;
}
</style>
<template>
    <div class="pt-0 pb-3 sm:pt-5 sm:pb-5 container mx-auto">
        <div class="grid grid-cols-12 py-6">
            <div class="col-span-12 py-0 sm:py-0 sm:col-span-3">    
                <ul class="text-center font-semibold sm:text-left animate-fadeInLeft">
                    <li @click="selectFromServiceList('malerarbeiten')" class="hover:bg-gray-400 text-white p-4 bg-mainColor mb-1 cursor-pointer">Malerarbeiten</li>
                    <li @click="selectFromServiceList('trockenbau')" class="hover:bg-gray-400 p-4 text-white bg-mainColor mb-1 cursor-pointer">Trockenbau</li>
                    <li @click="selectFromServiceList('stuckateur')" class="hover:bg-gray-400 p-4 text-white bg-mainColor bg-s mb-1 cursor-pointer">Stuckateur Arbeiten</li>
                    <li @click="selectFromServiceList('esstisch')" class="hover:bg-gray-400 p-4 text-white bg-mainColor mb-1 cursor-pointer">Esstisch</li>
                    <li @click="selectFromServiceList('fliesen')" class="hover:bg-gray-400 p-4 text-white bg-mainColor mb-1 cursor-pointer">Fliesen</li>
                    <li @click="selectFromServiceList('aussenanlagen')" class="hover:bg-gray-400 text-white p-4 bg-mainColor cursor-pointer">Außenanlagen</li>
                </ul>
            </div>

            <div ref="serviceImgs" class="col-span-12 sm:col-span-9 animate-fadeInRight">
                <div v-if="route.params.serviceName=='fliesen'" class="flex mb-5 sm:px-8 gap-4 flex-row w-full">
                    <div class="bg-serviceDemo1 bg-no-repeat bg-center bg-cover w-1/2 h-64"></div>
                    <div class="bg-serviceDemo2 bg-no-repeat bg-center bg-cover w-1/2 h-64"></div>
                </div>

                <div v-else class="flex mb-5 sm:px-8 gap-4 flex-row w-full">
                    <div class="bg-serviceDemo2 bg-no-repeat bg-center bg-cover w-1/2 h-64"></div>
                    <div class="bg-serviceDemo1 bg-no-repeat bg-center bg-cover w-1/2 h-64"></div>
                </div>

                <div class="px-8">
                    <h2 class="font-medium service-subtitle text-2xl pb-3 pt-3 uppercase">{{route.params.serviceName}}</h2>
                    <div v-if="route.params.serviceName=='fliesen'" >
                        <p class="font-thin">Fliesen Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet.
                        Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.</p>
                        <br>
                        <p class="font-thin">Fliesen Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet.
                        Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.</p>
                    </div>
                   
                    <div v-else-if="route.params.serviceName=='aussenanlagen'" >
                        <p class="font-thin">aussenanlagen Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet.
                        Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.</p>
                        <br>
                        <p class="font-thin">aussenanlagen Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet.
                        Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.</p>
                    </div>

                    <div v-else >
                        <p class="font-thin">Else Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet.
                        Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.</p>
                        <br>
                        <p class="font-thin">Else Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet.
                        Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>    
    <p></p>

</template>