<template>
  <div class="container-fluid m-1 shadow" id="examples-nav">
      <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" @click.prevent="language('php')" href="#">PHP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="language('curl')" href="#">Curl</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  @click.prevent="language('js')" href="#">JavaScript</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="language('java')" href="#">Java</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="language('python')" href="#">Python</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="language('html')" href="#">HTML</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    language (lang) {
      this.$emit('code-change-event', lang)
    }
  }

}
</script>

<style scoped>
a{
  padding-right: 4px;
}
</style>
