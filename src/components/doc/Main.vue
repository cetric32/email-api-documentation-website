<template>
  <div class="container lead">
    <div class="row">
      <div id="top"></div>
     <h1> Xend Mail API documentation</h1>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h2>Contents</h2>
        <div class="list-group shadow">
          <div class="list-group-item">
            <a href="#about">About</a>
          </div>
          <div class="list-group-item">
            <a href="#use">Use cases</a>
          </div>
          <div class="list-group-item">
            <a href="#url">API URL</a>
          </div>
          <div class="list-group-item">
            <a href="#param">API Parameters</a>
          </div>
          <div class="list-group-item">
            <a href="#http">Http Methods</a>
          </div>
          <div class="list-group-item">
            <a href="#headers">Http Headers</a>
          </div>
          <div class="list-group-item">
            <a href="#res">Response codes</a>
          </div>
          <div class="list-group-item">
            <a href="#limit">Limitations</a>
          </div>

        </div>
      </div>
      <div class="col-md-8 text-left shadow p-5">
        <div class="row">
          <div class="col-12" id="about">
            <h3>About</h3>
            <p>
                Xend Mail API is an API for sending emails in web Apps, websites, Desktop applications and mobile apps.
                Xend Mail is a completely free JSON API for use in programming projects. All you need is an API Key. You can go ahead and  <router-link to="/register">Register for an API Key</router-link>
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>
          <div class="col-12" id="use">
            <h3>Use cases</h3>
            <p>
              Xend mail API can be used in sending:
              <ul>
                <li>Password reset emails</li>
                <li>Email confirmation emails</li>
                <li>Email marketing campaigns</li>
                <li>Contact us form of website</li>
                <li>Any other way you might find it useful😉</li>
              </ul>
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>

          <div class="col-12" id="url">
            <h3>API URL</h3>
            <p>
              The Xend Mail API is exposed at the endpoint(url) <br>
              <a href="https://sendmail.azuatech.co.ke/api/send">
              https://sendmail.azuatech.co.ke/api/send
              </a>
              <br>
              This is the url you will use to invoke the API
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>
          <div class="col-12" id="param">
            <h3>API Parameters</h3>
            <p>
              The API call takes a JSON request object which should have the following parameters:
              <ol>
                <li>
                  <span class="field">name</span> => this is a JSON string that holds the name of the email sender. This parameter is mandatory. An example
                  would be like <code>"name":"cetric"</code>
                </li>
                <li>
                  <span class="field">from</span> => this is a JSON  string that holds the email of the email sender.This parameter is mandatory. E.g
                  <code>"from": "test@example.com"</code>
                </li>
                <li>
                  <span class="field">to</span> => this is a JSON array of the email(s) of the recepient(s). This parameter is mandatory and should contain at least
                  one email address. E.g <code>"to": ["test1@example.com"]</code> or <code>"to": ["test1@example.com","test2@test.com"]</code>
                </li>
                <li>
                  <span class="field">replyto</span> => this is a JSON string of the email which the recipient should reply to. This parameter is not mandatory.
                  E.g <code>"replto":"test@test.com"</code>
                </li>
                <li>
                  <span class="field">cc</span> => this is a JSON  array of the email(s) of the recepient(s) who are to be included in the
                  cc section of the email. This parameter is  not mandatory and should contain at least
                  one email address if included. E.g <code> "cc": ["test1@example.com"]</code> or <code> "cc": ["test1@example.com","test2@test.com"]</code>
                </li>
                <li>
                  <span class="field">bcc</span> => this is a JSON  array of the email(s) of the recepient(s) who are to be included in the
                  bcc section of the email. This parameter is  not mandatory and should contain at least
                  one email address if included. E.g <code> "bcc": ["test1@example.com"]</code> or <code> "bcc": ["test1@example.com","test2@test.com"]</code>
                </li>
                <li>
                  <span class="field">subject</span> => this is a JSON  string that holds the subject of the email. This parameter is mandatory.
                  E.g <code>"subject":"test email subject"</code>
                </li>
                <li>
                  <span class="field">body</span> => this is a JSON  string that holds the body of the email. This parameter is mandatory and can contain either
                  html or text. E.g <code>"body":"&lt;p&gt;test email body&lt;/p&gt;"</code> or <code>"body":"test email body"</code>
                </li>
              </ol>
            </p>
            <p>
              The final JSON request data  object  would look like one the following:
            </p>
            <div class="">
              <figure class="figure">
                <img src="@/assets/json/image1.png" class="figure-img img-fluid rounded" alt="Image 1. Json data with mandatory/required fields.">
                <figcaption class="figure-caption">Image 1. Json data with mandatory/required fields.</figcaption>
              </figure>
              <figure class="figure">
                <img src="@/assets/json/image2.png" class="figure-img img-fluid rounded" alt="Image 2.Json data with cc.">
                <figcaption class="figure-caption">Image 2.Json data with cc.</figcaption>
              </figure>
              <figure class="figure">
                <img src="@/assets/json/image3.png" class="figure-img img-fluid rounded" alt="Image 3.Json data with html body.">
                <figcaption class="figure-caption">Image 3.Json data with html body.</figcaption>
              </figure>
            </div>
            <p>The json request object is what you send to the API endpoint as the email you would like to sent</p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>
          <div class="col-12" id="http">
            <h3>Http Methods</h3>
            <p>
              Xend Mail API uses <code>POST</code> http method. Any API invocation is expected to
              use the POST method.
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>
          <div class="col-12" id="headers">
            <h3>Http Headers</h3>
            <p>
             You should provide the following http headers when invoking/calling the Xend Mail API:
              <ol>
                <li>
                  <span class="field">Content-Type</span> => This tells the type of data you are sending. The api expects JSON data. The header should
                be <br> <code>Content-Type:application/json</code>
                </li>
                <li>
                  <span class="field">X-Api-Key</span> =>This is a custom header for sending the API key. This header should be sent with all
                  requests to the api endpoint. This header should be <br>
                  <code>X-Api-Key:your-api-key</code> <br>
                  Note that this header is case sensitive.
                  You can <router-link to="/register">Register for an api key</router-link> to start using the API
                </li>
              </ol>
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>
          <div class="col-12" id="res">
            <h3>Response codes</h3>
            <p>
              Xend Mail API returns a JSON object as a response when invoked.
              The JSON object contains either(one of them) of the following parameters:
              <ol>
                <li>
                 <span class="field"> message</span> => this is the response parameter in the case the request
                  to send an email was successful.It is a JSON string. E.g <code>"message":"sent"</code>
                </li>
                <li>
                  <span class="field">error </span>=> this is the response parameter in the case the request
                  to send an email was not successful.It is a JSON string. The request might not be successful
                  because of:
                  <ol>
                    <li>
                      Not Providing the required headers. Failure to provide(or wrong case,since it's case senstive) the <code>X-Api-Key</code> makes the request unauthorized and thus
                      rejected. Http error code 403 is also returned.
                    </li>
                    <li>
                      Invalid API key. Providing an invalid API key in the header <code>X-Api-Key</code> makes the request unauthorized and thus
                      rejected. Http error code 403 is also returned.Get a valid API key by <router-link to="/register">Registering for an API key</router-link>
                    </li>
                    <li>
                      Not providing all the mandatory/required request object parameters. The mandatory parameters
                      are <code>name, to, from, subject and body</code>. This should not be empty too
                    </li>
                    <li>Providing invalid email addresses. Make sure the emails are in the right format</li>
                    <li>
                      The email address(es) for to, or from, or cc, or bcc being invalid. Only
                      valid email addresses are allowed
                    </li>
                    <li>
                      Incorrect JSON parameter types. The correct types are shown in the table below:
                      <Params/>
                      The to parameter is array/list,name is string, from is string, cc is lis/array, bcc
                      is list/array, subject is string, body is string
                    </li>
                    <li>
                      Rate limiting on the API. Only 1 request is allowed per given amount of time
                    </li>
                  </ol>
                </li>
              </ol>
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>
          <div class="col-12" id="example">

          </div>
          <div class="col-12" id="limit">
            <h3>Limitations</h3>
            <p>
              The Xend Mail API has the following limitations:
              <ul>
                <li>
                  Only 1 request is allowed every 10 seconds due to rate limiting. This is to curb
                  Denial of Service Attacks(DNS) and to allow previous request to complete.
                </li>
              </ul>
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Params from './Params'

export default {
  name: 'Main',
  components: {
    Params
  }

}
</script>

<style scoped>
h3{
  text-decoration: underline;
  color: #42b983;
  padding: 6px 0 2px 0;
}
.field{
  color: #569cbf;
  padding: 2px;
  margin: 0 3px;
}

</style>
