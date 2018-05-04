<template>
  <div class="login">
    <!--<headers title='登录' isActive='true' close='loginShow'></headers>-->
    <MHeader :back="true">登录</MHeader>
    <div class='boqi-icon'></div>
    <div class="login-box">
      <input v-model='form.userName' class='login-txt' placeholder="手机号/邮箱/会员名" type="text">
      <input v-model='form.userPwd' class="login-pwd" placeholder="请输入密码" type="text">
      <p class="checkcode-wrap">
        <span>免费注册</span>
        <span>忘记密码</span>
      </p>
      <button @click='loginBtn' class="login-btn">登录</button>
      <p class="thirdlogin">
        <span class="txt">第三方账号登录</span>
      </p>
      <p class="anotherIcon">
        <i class="wechat" @click='loginMsg'></i>
        <i class="qq" @click='loginMsg'></i>
        <i class="weibo" @click='loginMsg'></i>
      </p>
      <p class="login-info">
        注：用户名与密码均为111111
      </p>
    </div>
    <alerts ref='alerts'></alerts>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import alerts from '../base/alert';
  import { mapActions } from 'vuex';
  import { USER_SIGNIN } from '../store/user';
  export default {
    data(){
      return {
        btn: false,
        form:{
          userName : '',
          userPwd : ''
        },
        loginName : '111111',
        loginPwd : '111111'
      }
    },
    components:{MHeader,alerts},
    methods:{
      ...mapActions([USER_SIGNIN]),
      loginBtn(){  //登录按钮操作
        var _self = this;
        this.btn = true;
        if(this.form.userName == this.loginName && this.form.userPwd == this.loginPwd){
          this.USER_SIGNIN(this.form);
          this.$refs.alerts.opts = {
            content : '登录成功',
          }
          this.$refs.alerts.alertShow = true;
          this.$router.replace({ path: '/home' })
        }else{
          this.$refs.alerts.opts = {
            content : '请正确输入用户名及密码；用户名与密码都为111111',
            width : '220px',
            buttons:{
              '知道了' : function(){
                _self.$refs.alerts.alertShow = false;
              }
            }
          }
          this.$refs.alerts.alertShow = true;
        }
      },
      loginMsg(){  //短信登录操作
        this.$refs.alerts.opts = {
          content : '暂未开通',
          time : 1000,
        }
        this.$refs.alerts.alertShow = true;
      },
      routerDirect(){ //设置登录返回功能
        this.$router.go(-1);
      }
    },
    created(){  //判断是否登录，如果登录则不显示
      var userName = sessionStorage.getItem("userName");
      var userPwd = sessionStorage.getItem("userPwd");
      if(!!userName && userName == this.form.loginName && !!userPwd && userPwd == this.form.loginPwd){
        this.$parent.loginShow = false;
      }else{
        this.$parent.$parent.loaderShow = false;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../common/css/transition';
  .boqi-icon
      width:3.39rem;
      height 3.39rem;
      background url('../common/images/logo.png') no-repeat;
      background-size:100%;
      margin 0 auto;
  .login-box
      .login-txt,.login-pwd
          width:100%;
          height 1rem;
          border:none;
          border-bottom:.01rem solid #f1f1f1;
          padding:0 .2rem;
          font-size:.3rem;
          color:#666;
      .checkcode-wrap
        height .4rem;
        line-height .4rem;
        span
          color:#4ddc67;
        span:first-child
          margin-top:.4rem;
          margin-left:.2rem;
        span:last-child
          float:right
          margin-right .2rem;
       .login-btn{
         width 7rem;
         margin:.6rem .2rem;
         height .91rem;
         line-height .91rem;
         background #4ddc67;
         border:none;
         border-radius .1rem;
         color:#fff;
         font-size:.36rem;
       }
    .thirdlogin
      position relative;
      width 5rem;
      margin: 0 auto;
      height .6rem;
      border-bottom .01rem solid #e0dfdf;
      .txt
        position absolute
        left:50%
        margin-left:-1rem;
        width 2rem;
        height .8rem;
        line-height 1.2rem;
        background #fff;
        text-align center
        font-size:.2rem;
    .anotherIcon
      width 5rem;
      margin:.5rem auto;
      i
        display inline-block
        width 1rem;
        height 1rem;
        background:url(../common/images/anotherLogin.png)  no-repeat;
        background-size 1rem 3rem;
        margin-right:.9rem;
      .wechat
        width:1rem;
        height 1rem;
        background-position:0 0;
       .qq
         background-position:0 -1rem;
        .weibo
          background-position 0 -2rem;
          margin-right:0;





</style>
