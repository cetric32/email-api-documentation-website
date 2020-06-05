<template>
  <div class="register mt-5 animate__animated  animate__rollIn">
    <div class="container mt-5 pt-5 px-5">
      <h1>Register for API Key</h1>
      <p class="lead">
        For you to use the Xend MAil API you have to register for an API Key. Fill in the form below with the correct
        details for you to start using the API.
        <code >Note that the API key will be send to the Email address you fill in below.</code>
      </p>
    </div>

    <Form/>
  </div>
</template>

<script>
import Form from '@/components/register/Form.vue'

export default {
  name: 'Register',
  components: {
    Form
  }

}
</script>

<style>

</style>
