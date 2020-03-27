<template>
  <div class="home">
    <Top/>
    <hr>
    <Try/>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/home/Top.vue'
import Try from '@/components/home/Try.vue'

export default {
  name: 'home',
  components: {
    Top,
    Try
  }
}
</script>
