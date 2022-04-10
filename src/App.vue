<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
  
  export default {        
    components: {
      NavBar,
      Footer
      },          
    }
</script>

<style scoped>
*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>


