<template lang="pug">
.layout-header
    .layout-header-left  
        //- .now-time {{nowTime}}
        .app-name {{appName}}
    .layout-header-center   
        slot
    .layout-header-right 
        .user-icon(v-if="false")
        .user-name 
            Dropdown
                a(class="ant-dropdown-link" )
                    span {{userInfo||'--'}}
                    DownOutlined 
                template(#overlay)
                    Menu(@click="setEvent")
                        MenuItem(key="1") 修改密码
                        MenuItem(key="2") 退出登录
</template>
<script setup>
let timer=null
import dayjs from 'dayjs';
import { DownOutlined  } from '@ant-design/icons-vue';
import { Dropdown,Menu,MenuItem } from 'ant-design-vue';
import { computed, onMounted, onUnmounted, ref   } from 'vue';
import useUserStore from '@/store/user';

const userStore=useUserStore();
const appName = computed(() => import.meta.env.APP_NAME || '康如来');

const userInfo=computed(()=>{
    return userStore.userInfo
})
function setEvent({key}){
    if(key==='2'){
        console.log('退出登录');
    }else if(key==='1'){
        console.log('修改密码');
    }
}

const nowTime=ref(null) ;
function setTimeShow(){
  clearInterval(timer);  
    // timer=
    // setInterval(() => {
    //     nowTime.value=dayjs().format('YYYY/MM/DD HH:mm:ss');
    // },1000);
}


onMounted(()=>{
  setTimeShow()
})

onUnmounted(()=>{
  clearInterval(timer);
  timer=null  
})
</script>

<style scoped lang="less">
@import url('@/assets/css/common.less');
.layout-header{
    color: #fff;
    padding:  0 10px;
    background-color: @there-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.layout-header-center{
    flex: 1;
    padding: 0 10px;
}
.layout-header-right{
    display: flex;
    align-items: center;
    .user-avatar{
        background-color: #c4c4c4;
        width:32px;
        height:32px;
        border-radius: 4px;
        margin-right: 8px;
        .user-avatar{
            width: 32px;
            height: 32px;
        }
    }
    .ant-dropdown-link{
        cursor: pointer;
        transition: all;
        &:hover{
            opacity: 0.8;
        }   
    }
}
</style>