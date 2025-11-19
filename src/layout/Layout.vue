<template lang="pug">
.layout 
  LayoutHeader.layout-header 
      template(v-slot)
        .header-menu(v-if="headerMenu_length>1" )
            .menu(v-for="item in headerMenu" :key="item.path" @click="toPage(item)" :class="{ active: currentPath === item.path }")  {{item.title}}
  .layout-content
    LayoutSider.layout-sider(:siderMenu="siderMenu" ) 
    .layout-main 
      router-view

</template>   


<script setup>
import { computed, ref,watch } from 'vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutSider from './components/LayoutSider.vue';
import routes from '@/route/routes';
import { useRouter, useRoute } from 'vue-router';
import useCacheStore from '@/store/cache';

const {currentRoute,menus} = useCacheStore();

const router = useRouter(); 
const route = useRoute();

const siderMenu =ref({});
const currentPath=ref("")
const headerMenu =ref([])
const headerMenu_length=computed(()=>{
  return headerMenu.value.length
})

function createMenu(){
  siderMenu.value={}
  headerMenu.value=routes.filter(item => item.meta.show).map(item=>{
    let path=item.path
    siderMenu.value[path]=item.children||[]
    return{
        title:item.meta.title,
        path,
        meta:item.meta
      }
  })
}

function toPage(item){
  currentPath.value=item.path;
  router.push(item.path);
}
watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath;
  },
  { immediate: true } 
);  
</script>

<style scoped lang="less">
@import url('@/assets/css/common.less');
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


.header-menu {
  display: flex;
  align-items: center;
  padding: 0 10px;
  .menu{
    margin-right: 20px;
    cursor: pointer;
    background-color: #c9c9c9;
    color: @there-color;
    padding: 6px 12px;
    border-radius: 6px;
    transition: all 0.3s;
    &:hover{
    background-color: #fff;
    }
  }
  .active{
    background-color: #fff;
  }

}

</style>