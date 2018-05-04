<template>
  <div>
    <span>确认退出</span>
    <div class="btn">
      <button @click="submit">确认退出</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNOUT } from '../store/user'
  export default {
    methods: {
      ...mapActions([USER_SIGNOUT]),
      submit() {
        this.USER_SIGNOUT()
        this.$router.replace({ path: '/home' })
      }
    }
  }
</script>
