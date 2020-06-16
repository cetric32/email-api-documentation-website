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
          <td>to <sup class="text-danger">*</sup></td>
          <td>array</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>name <sup class="text-danger">*</sup></td>
          <td>string</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>from <sup class="text-danger">*</sup></td>
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
          <td>subject <sup class="text-danger">*</sup></td>
          <td>string</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>body <sup class="text-danger">*</sup></td>
          <td>string</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>smtp</td>
          <td>object</td>
        </tr>
      </tbody>
    </table>
    Note: <span class="text-danger">*</span> -> required fields
  </div>
</template>

<script>
export default {
  name: 'Params'

}
</script>

<style scoped>

</style>
