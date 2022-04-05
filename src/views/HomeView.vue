<template>
  <Banner/>
  <div class="main-container">
    <h1>HOME</h1>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import http from '@/http'
// @ is an alias to /src



export default {
  name: 'HomeView',
  components: {
    Banner
  },
  mounted () {
    http.get('/')
      .then(response => this.home = response.data)
      .catch(erro => console.log(erro))
  }
  
}
</script>
