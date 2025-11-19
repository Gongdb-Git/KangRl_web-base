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


<style >
@import '@/assets/css/common.less';
@font-face {
  font-family: "AlimamaShuHeiTi";
  src: url("@/assets/font/AlimamaShuHeiTi-Bold.ttf");
}
</style>

<style scoped lang="less">

</style>