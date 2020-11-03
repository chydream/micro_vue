<template>
  <div class="hello">
    test
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: 'demo'
    }
  },
  mounted () {
    // window.System.import('single-spa').then((res) => {
    //   var singleSpa = res
    //   singleSpa.registerApplication('child', () => window.System.import('child'), (location) => true)
    //   singleSpa.start()
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
