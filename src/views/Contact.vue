<template>
  <div class="container lead animate__animated animate__backInUp mt-5 pt-3">
    <h1>Talk to Us. How Can We Help?</h1>
    <div class="row">
      Feel free to talk to us on any issue, e.g your experience using the API, help on using the API,
      issues you encounter, and anything else on your mind. We are ready to answer all your questions.
    </div>
    <div class="row shadow m-3">
      <div class="card col-md-6">
        <div class="card-header">
          <img src="@/assets/contact/email-2-icon.png" class="card-img" alt="email icon picture" />
          Email:
          <a href="mailto:info@azuatech.co.ke">info@azuatech.co.ke</a>
        </div>
      </div>
      <div class="card col-md-6">
        <div class="card-header">
          <img src="@/assets/contact/WhatsApp-icon.png" alt="WhatsApp icon picture" />
          WhatsApp:
          <a
            href="https://wa.me/254797224768?text=Hi%2C%20I%27m%20contacting%20you%20from%20the%20Xend%20Mail%20Website..."
          >+254 797 224 768</a>
        </div>
      </div>
      <div class="card col-md-6">
        <div class="card-header">
          <img src="@/assets/contact/phone-icon.png" alt="telephone icon picture" />
          Telephone:
          <a href="tel:+254797224768">+254 797 224 768</a>
        </div>
      </div>
      <div class="card col-md-6">
        <div class="card-header">
          <img
            src="@/assets/contact/social-facebook-button-blue-icon.png"
            alt="facebook icon picture"
          />
          Facebook:
          <div
            class="fb-like"
            data-href="https://facebook.com/azuatechy"
            data-width
            data-layout="button_count"
            data-action="like"
            data-size="small"
            data-share="true"
          ></div>
        </div>
      </div>
    </div>
    <div class="row mt-3 shadow p-3">
      <div class="col-md-10 offset-md-1">
        <h2>Send Us A Message</h2>
        <small>Fill out the form below and send us a message directly. We will
          respond promptly
        </small>
        <form @submit.prevent="sendEmail">
          <div class="row">
            <label for="name">Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              v-model="name"
              required
              class="form-control form-group"
            />
          </div>
          <div class="row">
            <label for="email">Your Email Address</label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              id="email"
              v-model="email"
              required
              class="form-control form-group"
            />
          </div>
          <div class="row">
            <label for="subject">Subject</label>
            <input
              type="text"
              placeholder="Enter Your Subject"
              id="subject"
              v-model="subject"
              required
              class="form-control form-group"
            />
          </div>
          <div class="row">
            <label for="message">Message</label>
            <textarea
              id="message"
              class="form-control form-group"
              placeholder="Enter Your Message Here...."
              cols="30"
              rows="10"
              v-model="message"
              required
            ></textarea>
          </div>
          <div class="row">
            <button type="submit"
            id="send"
            class="btn btn-primary btn-block">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      subject: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail () {
      let emailData = {
        'name': this.name,
        'subject': this.subject,
        'from': this.email,
        'to': ['info@azuatech.co.ke'],
        'body': this.message
      }
      // API url endpoint
      let url = 'https://sendmail.azuatech.co.ke/api/send'

      let optionsAxios = {
        headers: {
          'X-Api-Key': '19613015545e8586d7160ae8.28634321',
          'Content-type': 'application/json'
        }
      }
      axios.post(url, emailData, optionsAxios)
        .then(resp => {
          document.querySelector('#send').innerHTML = 'Send Message'
          if (resp.data.message) {
            alert(resp.data.message)
          }
          if (resp.data.error) {
            alert(resp.data.error)
            // reset success
            this.success = ''
          }
        })
        .catch(err => {
          document.querySelector('#send').innerHTML = 'Send'
          alert(err)
        })
      // changing the text of the button
      document.querySelector('#send').innerHTML = ' <i class="fas fa-spinner fa-pulse"></i> Sending Email...'
    }
  }
}
</script>

<style scoped>
img {
  width: 36px;
}
h2,h1{
  color: #42b983;
}
</style>
