<template>
  <div class="b_class">  <!--外边只允许有一个跟元素-->
    <p>父组件传值给子组件啊啊啊</p>

    <p>姓名:{{name}}</p>

    <p>年龄:{{age}}</p>

    <p>sex:{{sex}}</p>
    <input type="button" @click="sendMsg" value="子组件值传父组件">

  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        name: 'zs',
        age: 22,
        childTxt: '值来自---子组件值'
      }
    },
    methods: {
      sendMsg: function () {
       this.$emit('childMsg', '值来自---子组件值')
      }
    },
    props: ['sex']
  }
</script>