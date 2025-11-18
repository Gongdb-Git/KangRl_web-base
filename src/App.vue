<template lang="pug">
  a-config-provider( :locale="zhCN")
    router-view
</template>

<script setup>
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  dayjs.locale('zh-cn');
</script> 
<style scoped lang="less">

.app-container {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
}
</style>