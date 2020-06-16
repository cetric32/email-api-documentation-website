<template>
  <div class="home animate__animated animate__swing">
    <Top/>
    <hr>
    <Try/>
    <Features/>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/home/Top.vue'
import Try from '@/components/home/Try.vue'
import Features from '@/components/home/Features.vue'

export default {
  name: 'home',
  components: {
    Top,
    Try,
    Features
  }
}
</script>
