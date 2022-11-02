<script setup>
import { reactive, ref } from 'vue';

const userData = reactive({
    name: '',
    nameValid: true,
    email : ''
})
</script>

<template>
<div>
    <input type="text" class="border rounded m-4" :class="{ 'border border-red-500': !userData.nameValid }" v-model="userData.name" />
    <input type="text" class="border rounded m-4" v-model="userData.email" :class="{ 'border-2 border-red-500': userData.email.length < 3 }" />
    <button type="button" @click="userData.name = 'Yigit'; userData.nameValid = false">change name to yiigt</button>
    <p>{{  userData.name }}</p>
</div>
</template>