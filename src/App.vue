<template>
  <div id="app">
    <div>
    <!-- Image and text -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
           BootstrapVue
          </b-navbar-brand>
      </b-navbar>
    </div>
  
    <div>
      <nav class="navbar navbar-expand-lg navbar-bytebank">
        <a class="navbar-brand" href="#">Viver</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="usuarioestaLogado">
          <li class="nav-item">
            <router-link class="nav-link" to="/">HomeView</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
            About
            </router-link>
          </li>
          <li class="nav-item">
            <a
                href="#"
                class="nav-link"
                @click.prevent="efetuarLogout">Logout</a>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto" v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cadastre-se" class="nav-link">
            Registre-se
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    <router-view />
  </div>

</template>

<script>
    export default {
        methods:{
            efetuarLogout () {
                localStorage.removeItem('token')
                this.$router.push({ name: 'login'})

            }
        },
        computed: {
            usuarioestaLogado() {
                return Boolean(localStorage.getItem('token'))
            }
        }
    }
</script>

<style>
.navbar {
  background: #b5b8b6;
}
.navbar-bytebank a {
  color: #000;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>