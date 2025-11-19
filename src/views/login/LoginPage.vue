<template lang="pug">
.pages 
    .form
      .title 康如来
      Input(placeholder="用户名" class="form-item")
      Input(placeholder="密码" class="form-item" type="password")
      Button(type="primary" class="form-item btn" @click="login") 登录 
</template>


<script setup>
import { Input,Button} from 'ant-design-vue';
import { ref } from 'vue';
import { onMounted } from 'vue';  
import { useRouter } from 'vue-router';
const router = useRouter();   


function login(){
  // 模拟登录成功，实际应用中应进行身份验证
  sessionStorage.setItem('token', ''); 
  router.replace('/sys/home'); 
}
onMounted(()=>{
  // 假设有一个函数 isAuthenticated() 用于检查用户是否已登录
  const token = sessionStorage.getItem('token'); 
  if (token) {
    // 如果有 token，跳转到首页
    router.replace('/sys/home'); 
  }
})    
</script>


<style scoped lang="less">
@import url('@/assets/css/common.less');
.pages{
  width: 100%;
  height: 100vh;
  background-color: @there-color;
  position: relative;
  .form {
    position: absolute;
    top: 50%;
    right: 20%;
    width: 300px;
    height: 400px;
    transform: translateY(-50%);
    padding:0 20px;
    background-color: #9ecef660;
    box-shadow: 0 0 4px 4px #00000020;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-item{
      margin: 10px 0;
    }
    .btn{
      width: 100%;
    }
    .title{
      position: absolute; 
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 50px;
      font-weight: bold;
      color: #004c8c;
      font-family: AlimamaShuHeiTi;
    }
  }
}
</style>