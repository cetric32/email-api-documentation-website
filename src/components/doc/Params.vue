<template>
  <div >
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Parameter</th>
          <th scope="col">JSON Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>to</td>
          <td>array</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>name</td>
          <td>string</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>from</td>
          <td>string</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>bcc</td>
          <td>array</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>cc</td>
          <td>array</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>replyto</td>
          <td>string</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>subject</td>
          <td>string</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>body</td>
          <td>string</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Params'

}
</script>

<style scoped>

</style>
