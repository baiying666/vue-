<template>
  <div class="c">  <!--外边只允许有一个跟元素-->

    <input type="button" @click="getData" value="获取数据">

  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        name: 'zs'
      }
    },
    methods: {
      getData: function () {
        var _this = this;
        var reqData = {
          profile_id: '40651',
          token: '02ae073a3bd32a0797ea3285ad583d16',
          type: 1, //评估类型（1：健康测评，2：疾病评估）
          page_no: 1,
          page_size: 50
        }

        _this.$http.get(this.$root.urlPath.MJK+'/v1/assessment/list',{params:reqData}).
            then(function(res){
              var obj = res.body;
              console.log(obj);
              document.write(JSON.stringify(obj))
            })

      }
    }
  }
</script>