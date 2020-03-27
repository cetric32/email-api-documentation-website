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
            <a href="#res">Response codes</a>
          </div>
          <div class="list-group-item">
            <a href="#example">Example Usage Code</a>
          </div>
          <div class="list-group-item">
            <a href="#limit">Limitations</a>
          </div>

        </div>
      </div>
      <div class="col-md-8 text-left shadow">
        <div class="row">
          <div class="col-12" id="about">
            <h3>About</h3>
            <p>
                Xend Mail API is an API for sending emails in web Apps, websites, Desktop applications and mobile apps.
                Xend Mail is  completely free JSON API for use in programming projects. Use of this API does not require an API Key
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
                <li>Password confirmation emails</li>
                <li>Email marketing campaigns</li>
                <li>Contact us form of website</li>
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
                  name => this is a JSON string that holds the name of the email sender. This parameter is mandatory
                </li>
                <li>
                  from => this is a JSON  string that holds the email of the email sender.This parameter is mandatory
                </li>
                <li>
                  to => this is a JSON array of the email(s) of the recepient(s). This parameter is mandatory and should contain at least
                  one email address
                </li>
                <li>
                  cc => this is a JSON  array of the email(s) of the recepient(s) who are to be included in the
                  cc section of the email. This parameter is  not mandatory and should contain at least
                  one email address if included
                </li>
                <li>
                  bcc => this is a JSON  array of the email(s) of the recepient(s) who are to be included in the
                  bcc section of the email. This parameter is  not mandatory and should contain at least
                  one email address if included
                </li>
                <li>
                  subject => this is a JSON  string that holds the subject of the email. This parameter is mandatory
                </li>
                <li>
                  body => this is a JSON  string that holds the body of the email. This parameter is mandatory and can contain either
                  html or text.
                </li>
              </ol>
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>
          <div class="col-12" id="http">
            <h3>Http Methods</h3>
            <p>
              Xend Mail API uses POST http method. Any API invocation is expected to
              use the POST method.
            </p>
            <div>
              <a href="#top">Go Back To Top</a>
            </div>
          </div>
          <div class="col-12" id="res">
            <h3>Response codes</h3>
            <p>
              Xend Mail API returns a JSON object as a response when invoked.
              The JSON object contains either of the following parameters:
              <ol>
                <li>
                  message => this is the response parameter in the case the request
                  to send an email was successful.It is a JSON string.
                </li>
                <li>
                  error => this is the response parameter in the case the request
                  to send an email was not successful.It is a JSON string. The request might not be successful
                  because of:
                  <ol>
                    <li>
                      Not providing all the mandatory parameters. The mandatory parameters
                      are name, to, from, subject and body
                    </li>
                    <li>
                      The email address(es) for to, or from, or cc, or bcc being invalid. Only
                      valid email addresses are allowed
                    </li>
                    <li>
                      Not providing the correct JSON parameter type.
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
export default {
  name: 'Main'

}
</script>

<style scoped>

</style>
