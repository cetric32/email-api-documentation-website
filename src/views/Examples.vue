<template>
  <div class="container mt-5 animate__animated animate__bounce" >
   <Nav @code-change-event="changeCode" />
   <Php v-if="code=='php'"  />
   <Js v-if="code == 'js'" />
   <Python v-if="code == 'python'"/>
   <Html v-if="code == 'html'" />
  </div>
</template>

<script>
import Nav from '@/components/examples/Nav.vue'
import Php from '@/components/examples/Php.vue'
import Js from '@/components/examples/Js.vue'
import Python from '@/components/examples/Python.vue'
import Html from '@/components/examples/Html.vue'

export default {
  name: 'Examples',
  components: {
    Nav,
    Php,
    Js,
    Python,
    Html
  },
  methods: {
    changeCode (e) {
      this.code = e
    }
  },
  data () {
    return {
      code: 'php'
    }
  }

}
</script>

<style scoped>

</style>
