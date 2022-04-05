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

<style>
*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container{
  text-align: center;
  font-size: 10px;
  margin-bottom: 30px;
  color: #222;
  min-height: 250px
}

h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222
}

/*#Navbar-header {
  text-align: right  ;
  background: rgb(196, 193, 193);
  
}

#logo-Nav {
  margin: auto;
  margin-left: 0;
 }


 End global styles 

#app > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
#app > form {
  max-width: 100%;
}
#app h1 {
  display: block;
  min-width: 100%;
  width: 100%;
  text-align: left  ;
  margin: 0;
  margin-bottom: 1rem;
}*/
</style>


