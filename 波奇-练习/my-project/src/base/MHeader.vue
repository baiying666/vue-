<template>
    <div class="header">
        <span class="title"><slot></slot></span>
        <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
    export default {
        name: "m-header",
        props:{
            back:{
                type:Boolean,
                default:false
            },
          close:{
            type:[Boolean,String]
          }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped lang="less">
    .header{
        position: relative;
        width:100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f5f4f9;
        text-align: center;
        .icon-fanhui{
            position: absolute;
            left:10px;
        }
        .title{
          font-size:.36rem;
          color:#333;
        }
    }
</style>
