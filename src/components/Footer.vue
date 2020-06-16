<template>
  <div class="container-fluid bg-dark h-25 text-white lead p-3">
    <div class="row p-2 shadow">
      <div class="col-md-4 pb-3">
        <h3>Quick Links</h3>
        <div class="text-left">
          <router-link to="/" class="nav-link m-0 p-0">Home</router-link>
          <router-link to="/register" class="nav-link m-0 p-0">Register to Use</router-link>
          <router-link to="/documentation" class="nav-link m-0 p-0">Documentation</router-link>
          <router-link to="/examples" class="nav-link m-0 p-0">Code Examples</router-link>
          <router-link to="/contact" class="nav-link m-0 p-0">Contact</router-link>
        </div>
      </div>
      <div class="col-md-4 pb-3" id="social">
        <h3>
          Follow Social Media
        </h3>
        <div class="text-left">
           <div>
          <a target="_blank" href="https://facebook.com/azuatechy"><img src="@/assets/contact/social-facebook-button-blue-icon.png" alt="facebook icon picture"></a>
          <div class="fb-like" data-href="https://facebook.com/azuatechy" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
        </div>
        <div>
          <a  target="_blank" href="https://instagram.com/azuatech"><img src="@/assets/contact/Instagram-icon.png" alt="instagram icon picture"> Instagram</a>
        </div>
        <div>
          <a  target="_blank" href="https://twitter.com/azuatechy"><img src="@/assets/contact/twitter-icon.png" alt="twitter icon picture"> Twitter</a>
        </div>
        <div>
          <a  target="_blank" href="https://t.me/azuatech"><img src="@/assets/contact/Apps-Telegram-icon.png" alt="telegram icon picture"> Telegram</a>
        </div>
        <div>
          <a target="_blank" href="https://wa.me/254797224768?text=Hi%2C%20I%27m%20contacting%20you%20from%20the%20Xend%20Mail%20Website..."><img src="@/assets/contact/WhatsApp-icon.png" alt="WhatsApp icon picture">WhatsApp</a>
        </div>
        </div>
      </div>
      <div class="col-md-4 pb-3">
        <h3>Contact Us</h3>
        <div class="contacts text-left">
          <div class="email">
             <img src="@/assets/contact/email-2-icon.png" class="card-img" alt="email icon picture">
          Email: <a href="mailto:info@azuatech.co.ke">info@azuatech.co.ke</a>
          </div>
          <div class="whatsapp">
            <img src="@/assets/contact/WhatsApp-icon.png" alt="WhatsApp icon picture">
          WhatsApp: <a href="https://wa.me/254797224768?text=Hi%2C%20I%27m%20contacting%20you%20from%20the%20Xend%20Mail%20Website...">+254 797 224 768</a>
          </div>
          <div class="telephone">
            <img src="@/assets/contact/phone-icon.png" alt="telephone icon picture">
          Telephone: <a href="tel:+254797224768">+254 797 224 768</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        Copyright &copy; 2020 <router-link to="/">Xend Mail</router-link> .
        Powered by <a target="_blank" href="https://azuatech.co.ke">AzuaTech</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'

}
</script>

<style scoped>
img{
  width: 32px;
}
#social img{
  width: 42px;
  padding-bottom: 3px;
}
</style>
