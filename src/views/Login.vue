<template>
  <body class="body">
    <div class="main-container">        
        <h1>Efetue seu Login</h1>
        <form @submit.prevent="efetuarLogin">
            <div class="form.group">
                <label for="email">E-mail  </label>
                <input type="email" class="form-control" v-model="usuario.email">                
            </div>
            <br>
            <div class="form.group">
                <label for="senha">Senha  </label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <br>
            <button type="submit" class="btn-primary"> 
                Logar 
            </button>
            <div class="cadastro-name">
            <router-link :to="{ name: 'novo.usuario' }">
                Cadastre-se aqui!
            </router-link>
            </div>
        </form>
    </div>      
  </body>
</template>

<script>
import http from '@/http'


export default {
    data () {
        return {
            usuario: {}
        }
    },
    methods: {
        efetuarLogin () {
            http.post('auth/login', this.usuario)
                 .then(response => {
                     console.log(response)
                     localStorage.setItem('token', response.data.access_token)                                          
                     this.$router.push({ name: 'home' }) 
                     setTimeout(function() {
                        window.location.reload(1);
                        }, 1);                 
                 })
                 .catch(erro => console.log(erro))

                    
            
        }
    }
}
</script> 

<style scoped>
  body {
    background-image: url("../assets/Fundo.jpeg");
    height: 471px;
  }

  .main-container { 
    background-color: grey;
    position: absolute;
    border-radius: 12px;
    margin-block: 100px;
    left:40%;
    font-size: 15px; 
    color: white, bold;
    
    padding: 50px
  }

  h1{
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
    color: white;
  }

  .cadastro-name {
    font-size: 10px;
    padding: 10px;
    
  }

  label{
    color:white
  }

  .btn-primary{
    padding:5px;
    
    
  }
</style>