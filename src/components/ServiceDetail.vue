<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
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
    <div class="container mx-auto">
        <div class="grid grid-cols-12">
            <div class="col-span-12 sm:col-span-3">
                <ul>
                    <li class="p-4 bg-gray-200 mb-1 cursor-pointer">Malerarbeiten/Vollwärmeschutz</li>
                    <li class="p-4 bg-gray-200 mb-1 cursor-pointer">Trockenbau</li>
                    <li class="p-4 bg-gray-200 bg-s mb-1 cursor-pointer">Stuckateur Arbeiten</li>
                    <li class="p-4 bg-gray-200 mb-1 cursor-pointer">Esstisch</li>
                    <li class="p-4 bg-gray-200 mb-1 cursor-pointer">Fliesen</li>
                    <li class="p-4 bg-gray-200 cursor-pointer">Außenanlagen</li>
                </ul>
            </div>

            <div class="col-span-12 sm:col-span-9">
                <div class="flex mb-5 px-8 gap-4 flex-row w-full">
                    <div class="bg-serviceDemo1 bg-no-repeat bg-center bg-cover w-1/2 h-64"></div>
                    <div class="bg-serviceDemo2 bg-no-repeat bg-center bg-cover w-1/2 h-64"></div>
                </div>

                <div class="px-8">
                    <h2 class="font-medium service-subtitle text-2xl pb-3 pt-3">SERVICE DETAIL {{route.params.serviceName}}</h2>
                    <p class="font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet.
                    Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.</p>
                </div>
            </div>
        </div>
    </div>    
    <p></p>

</template>