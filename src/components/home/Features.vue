import Features from '@/components/home/Features.vue';
<template>
  <div class="container shadow p-3" id="features">
    <div class="row">
      <div class="col-12 text-white">
        <h2>API Features</h2>
        <div class="text-left lead">
          <ul>
            <li>Send unlimited emails</li>
            <li>send to unlimited email recepients at the same time</li>
            <li>send email with unlimited cc and bcc options at the same time</li>
            <li>Use your own smtp server deatils if you wish to(we don't save the smtp details on our server)</li>
            <li>Send text/html emails. Your own choice😊</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Features'

}
</script>

<style scoped>
#features{
  background-color: #393938;
}
li{
  font-family: 'Metal Mania', cursive;
}

</style>
