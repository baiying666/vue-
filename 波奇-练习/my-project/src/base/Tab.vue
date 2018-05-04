<template>
    <div class="footer">
        <router-link to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/list">
            <i class="iconfont icon-list_icon"></i>
            <span>列表</span>
        </router-link>
        <router-link to="/add">
            <i class="iconfont icon-icon-"></i>
            <span>添加</span>
        </router-link>
        <router-link to="/my">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>
<!--
    display:fex;
    flex-direction:row /column;
    justify-content:center; 垂直居中
    align-item:center; 横向居中
    flex:1; 每份占1

    router-link-exact-active确切激活的 如果路径是/home/a ，/home/a  /home/b 只有/home/a能够匹配到
     router-link-active激活的 /home/a /home/b都能匹配到
-->
<style scoped lang="less">
    .footer{
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
        height: 50px;
        display: flex;
        border-top:1px solid #ccc;}
        a{
            display: flex;
            flex-direction: column;
            flex:1;
            align-items: center;
            justify-content: center;
            color:#666;
        }
        a.router-link-active{
            color:red;
        }

</style>
