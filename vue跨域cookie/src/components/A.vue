<template>
  <header class="header">
    <p style="color: red">父组件传值给子组件</p>
     <div id="logo">{{logo}}</div>
     <ul>
       <li v-for ="nav in navs">{{nav.li}}</li>
     </ul>
    <div>
      <p style="color: red">子组件传值给父组件</p>
      <span>用户名:</span>
      <input v-model="username" @change="setUser">
    </div>
  </header>

</template>
<script>
  export default {
    data: function () {
      return {
        navs:[
          {li: '主页'},
          {li: '日志'},
          {li: '说说'},
          {li: '相册'}
        ],
        username: ''
      }
    },
    props:['logo'],
    methods: {
      setUser: function(){
        this.$emit('transferUser', this.username)
      }
    }
  }
</script>