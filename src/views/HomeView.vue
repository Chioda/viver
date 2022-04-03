<template>
  <div class="home">
    <h1>HOME</h1>
  </div>
</template>

<script>
import http from '@/http'
// @ is an alias to /src



export default {
  name: 'HomeView',
  components: {
    
  },
  mounted () {
    http.get('/')
      .then(response => this.home = response.data)
      .catch(erro => console.log(erro))
  }
  
}
</script>
