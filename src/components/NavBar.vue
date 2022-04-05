<template>
  <div id="nav">
    <!-- Image and text -->
      
        <router-link to="/" id="logo-url">
            <img src="../assets/Logo.jpeg" width="100"  height="40">
        </router-link>    

        <ul class="navbar-nav mr-auto" v-if="usuarioestaLogado">
            <button class="nav-item">
              <a
                  href="#"
                  class="nav-link"
                  @click.prevent="efetuarLogout">Logout</a>
            </button>
            <div>
                <li class="nav-item">
                <router-link class="nav-link" to="/">HomeView</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/about" class="nav-link">
                About
                </router-link>
                </li>
            </div>    
        </ul>

        <div class="navbar-nav mr-auto" v-else>
            <button class="nav-item">
              <a
                  href="#"
                  class="nav-link"
                  @click.prevent="direcionaLogin">Login</a>
            </button>
            <button class="nav-item">
              <a
                  href="#"
                  class="nav-link"
                  @click.prevent="direcionaRegistrar">Registre-se</a>
            </button>
            
          
        </div>
      
    
    
    
  </div>  
</template>

<script>
    export default{
        name: "NavBar", 
            
        methods:{
                direcionaLogin () {
                    this.$router.push({ name: 'login'})
                },
                direcionaRegistrar () {
                    this.$router.push({ name: 'novo.usuario'})
                },

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

#nav {
    background-color: rgb(182, 181, 181);
    border-bottom: 4x solid #111;
    padding: 10px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}

#nav a{
    text-decoration: none;
}

  #logo-url{
      margin: auto;
      margin-left: 0;
  }
  
/*#nav a{
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}

#nav a :hover{
    color: #fff;

}*/

     
</style>