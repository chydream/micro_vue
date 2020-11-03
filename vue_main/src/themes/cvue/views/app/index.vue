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
    var status = localStorage.getItem('status')
    if (!status) {
      window.System.import('single-spa').then((res) => {
        var singleSpa = res
        localStorage.setItem('status', 'done')
        if (singleSpa.getAppNames().includes('child')) {
          console.log(singleSpa)
          singleSpa.start()
          return
        }
        singleSpa.registerApplication('child', () => {
          const render = () => {
            // 渲染，只执行一次
            return window.System.import('child').then(res => {
              // console.log(res)
              if (res) {
                return res
              } else {
                return render()
              }
            })
          }
          return render()
        }, location => true)
        singleSpa.start()
      })
    }
  },
  methods: {}
}
</script>
<style>
</style>
