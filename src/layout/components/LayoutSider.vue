<template lang="pug">
.layout-sider layout-sider   {{appName}}  


</template >


<script setup>
import { computed } from 'vue';
const appName = computed(() => import.meta.env.APP_NAME || '康如来');

</script>

<style scoped lang="less">

</style>