<template>
  <div class="container">
    <div class="title">路由访问</div>
    <div class="routes">
      <a v-for="(route, index) in routes"
        :key="index"
        href="javascript:;"
        @click="toPage(route)">
        {{ route }}
      </a>
    </div>
  </div>
</template>

<script>
// import button from '@/components/button'

export default {
  components: {
    // button
  },
  data() {
    return {
      routes: ['button', 'checkbox', 'input', 'select', 'tag', 'badge', 'alert', 'radio', 'pagination', 'modal']
    }
  },
  methods: {
    toPage(page) {
      this.$router.push(`/${page}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }
  .routes {
    display: flex;
    a {
      color: #353535;
      padding: 0 20px;
      text-decoration: none;
      &:hover {
        color: $mc;
      }
    }
  }
</style>
