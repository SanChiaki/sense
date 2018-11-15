<template>
  <div class="ss-step">
    {{ $parent.current }}
  </div>
</template>

<script>
export default {
  name: 'SsStep',

  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    status: {
      type: String
    },
    icon: {
      type: String
    }
  },

  created() {
  }
}
</script>

<style lang='scss' scoped>

</style>
