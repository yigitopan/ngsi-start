<script setup>
import * as vue from 'vue';

const userData = vue.reactive({
    name: '',
    nameValid: true,
    email : '',
    phone : '',
    message : ''
})
</script>

<style>
 @media (max-width : 768px){
        .iframe-wrapper {
        top: -100px!important;
    }
}

.iframe-wrapper {
        top: -50px;
}
</style>

<template>
    <div class="relative w-full z-10">
        <div class="absolute overflow-hidden w-full iframe-wrapper">
            <iframe src="https://www.google.com/maps/d/embed?mid=1nUpg6rN6Ico2e3fkJ-LzKN4O4rJGJKI&ehbc=2E312F" width="100%" height="350px"></iframe>
        </div>
    </div>
    <div class="mt-96 bg-mainColor">
        <div class="grid grid-cols-3 gap-x-16 gap-y-8">
                <div class="rows-span-2 gap-x-16">
                    <div class = "flex justify-center"><img src="../assets/location-sign-svgrepo-com.svg" class="w-7 h-7"></div>
                    <div class="flex relative">
                        <p class = "text-center w-full">Robert Bosch Straße
74196 Neuenstadt am Kocher
</p>
                    </div>
              
                </div>

               
                
               <div class="row-span-2">
                    <div class = "flex justify-center">
                        <img src="../assets/phone-svgrepo-com.svg" class="w-7 h-7">
                    </div>
                    
               <div>
                 <p class = "text-center w-full">+40 2525234 </p>
               </div>
        
            </div>
          
           <div class = "row-span-2">
                <div class = "flex justify-center">
                    <img src="../assets/clock-svgrepo-com.svg" class="w-7 h-7">
                </div>
               <div>
                 <p class = "text-center w-full">Mon-Fri 09:00-17:00</p>
               </div>
          
            </div>
            

        </div>

    </div>
<div>
    <div class = "mt-10 row-2">
        <p class="text-mainColor text-center">Contact Us</p>
        <fieldset class = "row-3 flex flex-col items-center">
            <div class = "m-2 w-1/5 min-w-fit">
    <input type="text" class="h-10 w-60 border rounded font-extralight border-gray-400" placeholder = "Your Name" :class="{ 'border border-red-500': !userData.nameValid }" v-model="userData.name" /></div>
    <div class= "m-2 w-1/5 min-w-fit">
    <input type="text" class="h-10 w-60 border rounded font-extralight border-gray-400" placeholder = "Your Email" v-model="userData.email" :class="{ 'border-2 border-red-500': userData.email.length < 3 }" />
</div>
<div class= "m-2 w-1/5 min-w-fit">
    <input type="text" class="h-10 w-60 border rounded font-extralight border-gray-400" placeholder = "Your Phone" v-model="userData.phone" :class="{ 'border-2 border-red-500': userData.phone.length < 3 }" /></div>
</fieldset>
<fieldset class = "m-2 flex flex-col items-center min-w-fit">
    <textarea type="text" class="h-40 w-96 border rounded font-extralight border-gray-400" placeholder = "Your Message" v-model="userData.message" :class="{ 'border-2 border-red-500': userData.message.length < 3 }" />
</fieldset>
</div>

</div>
<div class = "flex justify-center">
    <!-- <button type="button" @click="userData.name = 'Yigit'; userData.nameValid = false">Send Your Message</button> -->
    <input type="submit" name="submit" value="SEND MESSAGE" class="bg-mainColor hover:bg-yellow-700 text-black font-sans m-8 py-2 px-4 rounded-full">

</div>
</template>