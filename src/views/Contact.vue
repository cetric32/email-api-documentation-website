<template>
  <div class="container lead animate__animated  animate__backInUp mt-5 pt-3">
    <h1>Talk to Us. How Can We Help?</h1>
    <div class="row">
      Feel free to talk to us on any issue, e.g your experience using the API, help on using the API,
      issues you encounter, and anything else on your mind. We are ready to answer all your questions.
    </div>
    <div class="row shadow m-3">
      <div class="card col-md-6">
         <div class="card-header">
          <img src="@/assets/contact/email-2-icon.png" class="card-img" alt="email icon picture">
          Email: <a href="mailto:info@azuatech.co.ke">info@azuatech.co.ke</a>
        </div>
      </div>
      <div class="card col-md-6">
        <div class="card-header">
          <img src="@/assets/contact/WhatsApp-icon.png" alt="WhatsApp icon picture">
          WhatsApp: <a href="https://wa.me/254797224768?text=Hi%2C%20I%27m%20contacting%20you%20from%20the%20Xend%20Mail%20Website...">+254 797 224 768</a>
        </div>
      </div>
      <div class="card col-md-6 ">
        <div class="card-header">
          <img src="@/assets/contact/phone-icon.png" alt="telephone icon picture">
          Telephone: <a href="tel:+254797224768">+254 797 224 768</a>
        </div>
      </div>
      <div class="card col-md-6">
        <div class="card-header">
          <img src="@/assets/contact/social-facebook-button-blue-icon.png" alt="facebook icon picture">
          Facebook: <div class="fb-like" data-href="https://facebook.com/azuatechy" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'

}
</script>

<style scoped>
img{
  width: 36px;
}

</style>
