<template>
  <div class="login-container">
    <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="oauth2Button('mall', 1000)">TAO-X 授 权 登 录 </el-button>
  </div>
</template>

<script>
import openWindow from '@/utils/open-window'

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      redirect: undefined,
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  destroyed() {
    window.removeEventListener('storage', this.afterQRScan)
  },
  created() {
    window.addEventListener('storage', this.afterQRScan)
  },
  methods: {
    oauth2Button(thirdpart, wdith) {
      this.loading = true;
      const redirect_uri = encodeURIComponent(window.location.origin + '/#/auth-redirect')
      const url = process.env.VUE_APP_BASE_API + `${thirdpart}/oauth2/authorization/${thirdpart}?redirect_uri=${redirect_uri}`;
      openWindow(url, 'TAO-X统一认证中心', wdith, 540)
      this.loading = false
    },
    afterQRScan(e) {
      if (e.key === 'x-admin-oauth-code') {
        this.$store.dispatch('user/saveToken', e.newValue)
        this.$router.push({ path: this.redirect || '/' })
      }
    }
  }
}
</script>