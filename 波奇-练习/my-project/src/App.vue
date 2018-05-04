<template>
    <div id="app">
        <router-view></router-view>
        <Tab></Tab>
      <transition name='Loading'>
          <Loading v-if='loaderShow'></Loading>
      </transition>
    </div>
</template>

<script>
  ~function (desW) {
    var winW=document.documentElement.clientWidth,ratio=winW/desW;
    document.documentElement.style.fontSize=ratio*100+'px';
  }(750);

    import Tab from './base/Tab.vue';
    import Loading from './base/Loading.vue';

    export default {
        components:{
            Tab,Loading
        },
      data(){
        return {
          loaderShow : false
        }
      },
      methods:{
        listenUrl(){
          this.loaderShow = false;
        }
      },
      watch:{//监听路由变化
        "$route"(to,from){
          if(to.path != from.path){
            this.listenUrl();
          }
        }
      }
    }
</script>

<style>
    *{margin:0;padding:0;}
    ul,li{
        list-style:none;
    }
    a{
        text-decoration: none;
    }
    input,button{
        -webkit-appearance:none;
    }
</style>
