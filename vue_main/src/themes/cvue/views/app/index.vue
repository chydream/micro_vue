<template>
  <div></div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'app'
    }
  },
  mounted () {
    window.System.import('single-spa').then((res) => {
      var singleSpa = res
      singleSpa.registerApplication('child', () => window.System.import('child'), location => true)
      singleSpa.start()
    })
  },
  methods: {}
}
</script>
<style >
</style>>