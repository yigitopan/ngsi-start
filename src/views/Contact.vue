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

<template>
    <div class="my-10">
        <div class="columns-3">
            <ul>
                <li>
                    <img src="../assets/location-sign-svgrepo-com.svg" class = "w-5 h-5 my-2">


                </li>
                
                <p>Street</p>
            </ul>
            <ul>
                <li>
                    <img src="../assets/phone-svgrepo-com.svg" class = "w-5 h-5 my-2">
                    
                </li>
                <p>+40 2525234 </p>
            </ul>
            <ul>
                <li><img src="../assets/clock-svgrepo-com.svg" class = "w-5 h-5 my-2"></li>
                <p>Mon-Fri 09:00-17:00</p>
            </ul>

        </div>

    </div>
<div>
    <div class = "row-2">
        <fieldset class = "columns-2 justify-between">
    <input type="text" class="h-20 w-20 border rounded m-8" placeholder = "Your Name: " :class="{ 'border border-red-500': !userData.nameValid }" v-model="userData.name" />
    <input type="text" class="h-20 w-20 border rounded m-8" placeholder = "Your Email: " v-model="userData.email" :class="{ 'border-2 border-red-500': userData.email.length < 3 }" />
    <input type="text" class="h-20 w-40 border rounded m-8" placeholder = "Your Phone: " v-model="userData.phone" :class="{ 'border-2 border-red-500': userData.phone.length < 3 }" />
</fieldset>
<fieldset class = "columns-2">
    <textarea type="text" class="border rounded m-4" placeholder = "Your Message: " v-model="userData.message" :class="{ 'border-2 border-red-500': userData.message.length < 3 }" />
</fieldset>
</div>
    <!-- <button type="button" @click="userData.name = 'Yigit'; userData.nameValid = false">Send Your Message</button> -->
    <input type="submit" name="submit" value="SEND MESSAGE" class="bg-yellow-500 hover:bg-yellow-700 text-black font-sans py-2 px-4 rounded-full">
    <p>{{  userData.name }}</p>
</div>
</template>