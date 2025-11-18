<template lang="pug">
.layout-sider 
    .item(v-for="item in 30" ) {{appName}}  
    a-menu(
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 100%"
      mode="inline"
      :items="items")

</template >


<script setup>
import { computed,watch,ref } from 'vue';
import {useRoute}  from "vue-router";
const route = useRoute();
const appName = computed(() => import.meta.env.APP_NAME || '康如来');
const props = defineProps({
  siderMenu: {
    type: Object,
    required: true
  },
  currentPath: {
    type: String,
    required: true
  }
}); 

watch(() =>route.fullPath, (route) => {
  // 可以在这里处理侧边栏菜单的变化
  console.log('当前路径变化，侧边栏菜单可能需要更新:', route);
}, { immediate: true }  ); 


const openKeys = ref([]);
const selectedKeys = ref([]);
const items = computed(() => {
  return props.siderMenu[props.currentPath]?.map(item => ({
    key: item.path,
    label: item.meta.title,
    children: item.children ? item.children.map(subItem => ({
      key: subItem.path,
      label: subItem.meta.title
    })) : undefined
  })) || [];
});

</script>

<style scoped lang="less">
.layout-sider{
    padding: 4px 10px;
    height: 100%;
    overflow-y: auto;
    .item{
        margin: 50px 0;
    }
}
</style>