<template>
  <div id="app1"></div>
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
      if (singleSpa.getAppNames().includes('child')) {
        console.log(singleSpa.getMountedApps())
        singleSpa.unloadApplication('child').then(() => {
          console.log(singleSpa.getMountedApps())
        })
      }
      singleSpa.registerApplication('child', () => window.System.import('child'), location => true)
      singleSpa.start()
    })
  },
  methods: {}
}
</script>
<style>
</style>
