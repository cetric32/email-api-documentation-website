<template>
  <div class="container pt-5" id="try">
    <div class="row text-left">
      <div class="col-12 px-5">
        <h2>Try Xend Mail API</h2>
      </div>
      <div class="col-12 px-5">
        Xend Mail is Easy😉
        Fill The form below to try out sending an email. Also
         Check the JSON  object used in the request
         and the JSON  object returned
        as reponse below.
        <router-link to="/documentation">Learn more</router-link> on API use in the API documentation.
        <router-link to="/register">Register for an API key </router-link> to  start using Xend Mail API.
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 shadow my-3">
        <form @submit.prevent="sendEmail">
          <div class="form-group p-5">
            <div class="row text-left p-1">
              <label for="name" class="col-4">name</label>
              <input type="text" v-model="name" name="name" id="name"
              placeholder="The email sender name"
              class="col-8 form-control">
            </div>
            <div class="row text-left p-1">
              <label for="to" class="col-4">to</label>
              <input type="text" v-model="to" name="to" id="to"
              placeholder="The email recepient"
              class="col-8 form-control">
            </div>
            <div class="row text-left p-1">
              <label for="from" class="col-4">from</label>
              <input type="text" v-model="from" name="from" id="from"
              placeholder="The email sender"
              class="col-8 form-control">
            </div>
            <div class="row text-left p-1">
              <label for="subject" class="col-4">subject</label>
              <input type="text" v-model="subject" name="subject" id="subject"
              placeholder="The email subject"
              class="col-8 form-control">
            </div>
            <div class="row text-left p-1">
              <label for="body" class="col-4">body</label>
              <textarea v-model="body" name="body" id="body" cols="30" rows="4"
              placeholder="The email body(html or text)"
               class="col-8 form-control"></textarea>
            </div>
            <div class="row mt-3 ml-5">
              <button id="send" class="btn btn-primary btn-block" type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-5 shadow ml-4 my-1">
        <div class="row p-2">
            <div class="col-12 text-success">
                The JSON Request Object
                 <hr class="mt-0 bg-danger">
            </div>
            <div class="col-12">
                <div class="row rounded text-white text-left" id="request">
                  <div class="col-12 p-3 m-3">
                      {
                        <div class="p-2">
                           <span class="field">"name"</span>:<span class="value">"{{name}}"</span>,
                        </div>
                        <div class="p-2">
                           <span class="field">"to"</span>: [ <span class="value">"{{to}}"</span>],
                        </div>
                        <div class="p-2">
                          <span class="field">"from"</span>: <span class="value">"{{from}}"</span>,
                        </div>
                        <div class="p-2">
                          <span class="field">"cc"</span>: [ <span class="value">"{{cc}}"</span>],
                        </div>
                        <div class="p-2">
                          <span class="field">"bcc"</span>: [<span class="value">"{{bcc}}"</span>],
                        </div>
                        <div class="p-2">
                          <span class="field">"replyto"</span>: [<span class="value">"{{replyto}}"</span>],
                        </div>
                        <div class="p-2">
                          <span class="field">"subject"</span>: <span class="value">"{{subject}}"</span>,
                        </div>
                        <div class="p-2">
                          <span class="field">"body"</span>: <span class="value">"{{body}}"</span>
                        </div>
                      }
                  </div>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-12 text-success">
            The JSON Response Object
            <hr class="m-0 bg-danger">
          </div>
          <div class="col-11 text-white text-left rounded m-3" id="response">
              <div v-if="error" class="p-2">
                  <span class="field">"error"</span>: <span class="value">"{{error}}"</span>
              </div>
              <div v-else-if="success" class="p-2">
                  <span class="field">"message"</span>: <span class="value">"{{success}}"</span>
              </div>
              <div v-else class="p-2">
                  <span class="field py-5">No request made yet or there are Network errors!</span>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-1 m-1">
      <div class="col-12 text-left shadow py-2 bg-secondary text-white">
          <h2 class="">Request Attributes</h2>
          <hr class="my-0 bg-danger">
          <p>
            <span class="attr">Request URL:</span>  https://sendmail.azuatech.co.ke/api/send
          </p>
         <p>
           <span class="attr">HTTP Method:</span> POST
         </p>
         <p>
           <span class="attr">HTTP Headers:</span> Content-Type:application/json, X-Api-key: [your api key]
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Try',
  data () {
    return {
      name: '',
      to: '',
      from: '',
      subject: '',
      body: '',
      cc: '',
      bcc: '',
      replyto: '',
      error: '',
      success: ''
    }
  },
  methods: {
    sendEmail () {
      let url = 'https://sendmail.azuatech.co.ke/api/send'
      let optionsAxios = {
        headers: {
          'X-Api-Key': '19613015545e8586d7160ae8.28634321'
        }
      }
      axios.post(url, {
        name: this.name,
        to: [this.to],
        from: this.from,
        subject: this.subject,
        body: this.body
      }, optionsAxios)
        .then(resp => {
          document.querySelector('#send').innerHTML = 'Send'
          if (resp.data.message) {
            this.success = resp.data.message
            // reset error message
            this.error = ''
          }
          if (resp.data.error) {
            this.error = resp.data.error
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
    },
    reset () {
      this.name = ''
      this.to = ''
      this.from = ''
      this.subject = ''
      this.body = ''
    }
  }
}
</script>

<style scoped>
#request{
  background-color: #1e1e1e;
}
#response{
  background-color: #1e1e1e;
}
.field{
  color: #569cbf;
  padding: 2px;
  margin: 0 3px;
}
.value{
  color:#d4c89b;
  padding: 2px;
  margin: 0 3px;
}
.attr{
  color: red;
  padding: 2px;
  margin: 0 3px;
}
label{
  color:#563d7c;
  font-size: 17px;
}

</style>
