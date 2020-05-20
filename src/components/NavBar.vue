<template>
  <div class="container-fluid">
    <div class="alert alert-warning alert-dismissible fade show" role="alert" id="ad">
        <strong>Stay Home!</strong> Stay Safe!
        <button @click="ad=true" type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <nav :class="ad? 'fixed-top' : ''"  class="navbar navbar-expand-lg  navbar-light  rounded shadow mx-1">
      <router-link to="/" class="navbar-brand active pr-5 text-white"><img src="../assets/xend mail.png" alt="Xend Mail Logo"></router-link>
      <button class="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/register" class="nav-link">Register to Use</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/documentation" class="nav-link">Documentation</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/examples" class="nav-link">Code Examples</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      ad: ''
    }
  }
}
</script>

<style scoped>
  .nav-link {
  padding: 5px;
}
.nav-link:hover {
  color:aquamarine;
}

.nav-item a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-item a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
  text-decoration-color: pink;
}
.nav-link{
  color: #42b983 !important;
}
nav{
  background-color: #1e1e1e !important;
}

</style>
