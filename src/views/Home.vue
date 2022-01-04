<template>
  <div class="home">
    <el-button type="info" @click='loginout'>退出登录</el-button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
    
  },
  methods:{
    loginout(){
      window.sessionStorage.clear();
      this.$router.push('/login')
    }
  }
}
</script>
