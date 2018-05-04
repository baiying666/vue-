<template>
  <div>
    <MHeader :back="true">我的</MHeader>
    <router-link  to="/signout">退出</router-link>
    <div class="my-header">
      <i class="avatar"></i>
      <p>
        <span>等风来</span>
        <span>27粉丝</span>
        <span>89关注</span>
        <i></i>
      </p>
    </div>
    <div style="padding: 50px;">{{user.userName}}欢迎回家</div>
    <div class="avatar"></div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import store from '../store';
  import { mapState } from 'vuex';
  export default {
    created(){
      this.isLogin('true');
    },
    methods:{
      isLogin(auth){
        if(this.$route.path == '/my'){
          var isLogin = Boolean(store.state.user.userName) //true用户已登录， false用户未登录
          if (auth && !isLogin) {
            this.$router.replace({ path: '/login' });
          }
        }
      }
    },
    computed: mapState({ user: state => state.user }),
    components:{
      MHeader
    }
  }
</script>

<style scoped>

</style>
