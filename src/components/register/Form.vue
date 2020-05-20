<template>
  <div class="container text-left my-3" id="form">
    <div class="col-md-8 offset-md-2 shadow px-5 py-3">
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Project/User Name <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="username"
            required v-model="username"
            placeholder="Enter project/username">
        </div>
        <div class="form-group">
          <label for="email">Email address<span class="text-danger">*</span></label>
          <input type="email" class="form-control" id="email"
          required v-model="email"
          aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.API key will be send here</small>
        </div>
        <div class="form-group">
          <label for="customer_type" class="pr-3">Project/User Type<span class="text-danger">*</span></label>
          <select v-model="customer_type"
          required
          class="form-select custom-select" id="customer_type">
            <option  value="individual">Individual</option>
            <option  value="company">Company</option>
          </select>
        </div>
        <div class="form-group">
          <label for="u_password">Website</label>
          <input type="url" class="form-control"
          v-model="website"
          id="u_password" placeholder="Website url">
        </div>
        <div class="form-group">
          <label for="u_password">Password<span class="text-danger">*</span></label>
          <input type="password" class="form-control"
          required v-model="u_password"
          id="u_password" placeholder="Password">
        </div>
        <div v-show="!passwordMatch" class="alert alert-warning" role="alert">
          Passwords do not match!
        </div>
        <div class="form-group">
          <label for="conf_pass">Confirm Password<span class="text-danger">*</span></label>
          <input type="password" class="form-control"
          required v-model="conf_pass"
          id="conf_pass" placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input"
          required v-model="agree"
          id="agree">
          <label class="form-check-label" for="agree">You agree we sent you email</label>
        </div>
        <button type="submit" :disabled='notFilled' class="btn btn-primary btn-block" id="send">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Form',
  data () {
    return {
      username: '',
      email: '',
      customer_type: '',
      u_password: '',
      website: '',
      conf_pass: '',
      agree: '',
      msg: false
    }
  },
  methods: {
    register () {
      // register a user
      let url = 'https://sendmail.azuatech.co.ke/api/register'
      let data = {
        username: this.username,
        email: this.email,
        u_password: this.u_password,
        customer_type: this.customer_type,
        website: this.website
      }

      axios.post(url, data)
        .then(resp => {
          // changing the text of the button
          document.querySelector('#send').innerHTML = 'Register'
          // success
          if (resp.data.message) {
            this.msg = true
            alert('Register successfully\n Check your email for the API Key')
          } else if (resp.data.error) {
            // error
            alert(resp.data.error)
          }
        })
        .catch(err => {
          // changing the text of the button
          document.querySelector('#send').innerHTML = 'Register'
          alert(err)
        })

      // changing the text of the button
      document.querySelector('#send').innerHTML = ' <i class="fas fa-spinner fa-pulse"></i> Registering...'
    }

  },
  computed: {
    notFilled () {
      if (this.username &&
      this.email &&
      this.u_password &&
      this.conf_pass &&
      this.agree
      ) {
        return false
      } else {
        return true
      }
    },
    passwordMatch () {
      // check if passwords are same
      if (this.u_password &&
      this.conf_pass) {
        if (this.u_password === this.conf_pass) {
          return true
        } else {
          return false
        }
      }
      return true
    }

  }

}
</script>

<style>

</style>
