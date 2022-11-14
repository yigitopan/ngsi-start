<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <p>{{route.params.serviceName}} secilen</p>
</template>