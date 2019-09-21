<template>
  <div id="app">
    <div class="container pt-5">
      <div class="card mb-3">
        <div class="card-body">
          <ul class="list-unstyled mb-0">
            <li>GAuth 是否完成初始化：{{ gAuthState.isInit }}</li>
            <li>GAuth 是否认证：{{ gAuthState.isAuthorized }}</li>
          </ul>
        </div>
      </div>
      <div class="mb-3"><button class="btn btn-primary" :disabled="!gAuthState.isInit || state === 1" @click="getGAuthCode">获取 GAuth Code</button></div>
      <pre><code v-if="state === 2">{{ gAuthCode }}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      gAuthState: {
        isInit: false,
        isAuthorized: false
      },
      gAuthCode: '',
      state: 0
    }
  },
  created() {
    const updateGAuthState = setInterval(() => {
      this.gAuthState.isInit = this.$gAuth.isInit
      this.gAuthState.isAuthorized = this.$gAuth.isAuthorized
      if (this.gAuthState.isInit) clearInterval(updateGAuthState)
    }, 1000)
  },
  methods: {
    async getGAuthCode() {
      try {
        this.state = 1
        this.gAuthCode = await this.$gAuth.getAuthCode()
        this.state = 2
      } catch (e) {
        this.state = 3
      }
    }
  }
}
</script>
