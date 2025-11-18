<template lang="pug">
.layout 
  LayoutHeader.layout-header 
      template(v-slot)
  .layout-content
    LayoutSider.layout-sider(:siderMenu="siderMenu") 
    .layout-main 
      router-view

</template>   


<script setup>
import { onMounted, ref } from 'vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutSider from './components/LayoutSider.vue';
import routes from '@/route/routes';
console.log(routes,'---routes---');
const siderMenu =ref([]);
const headerMenu =ref([]) 
function createMenu(){
  siderMenu.value=[];
  headerMenu.value=[];  
  const menu={};
  headerMenu.value= routes.map(item=>{
    return{
        title:item.meta.title,
        path:item.path,
      }
  })
  console.log('menu',menu);
} 

onMounted(()=>{
  createMenu(routes);
})  
</script>

<style scoped lang="less">
@header-height: 64px;
.layout{
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
}
.layout-header{
  height: @header-height;
}
.layout-content{
  display: flex;
  height: calc(100vh - @header-height); 
  .layout-sider{
    width: 200px;
    border-right: 1px solid #c6c6c6;
  }
}
.layout-content-no-header{
  height: 100vh; 
} 
.layout-main{
  flex: 1;
}

</style>