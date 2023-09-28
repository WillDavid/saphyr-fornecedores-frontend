<template>
    <div class="container-login">
        
        <div class="card-login">
            <img src="~/static/icons/alquia-logo.png" alt="">
            <Input label="Login" placeholder="Usuario..." class="colorBtn" v-model="login"/>
            <Input label="Senha" type="password" placeholder="*****" class="colorBtn" v-model="senha"/>
            <Button title="Entrar" style="width: 100%;margin-top: 1rem;" @click.native="loginReq" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

    data () {
        return {
            login: '',
            senha: ''
        }
    },

    methods: {
        loginReq() {
            this.login = this.login.toLowerCase()

            if(this.login === 'login' && this.senha === '123'){
                localStorage.setItem("loginStatus", "isConnected");
                this.$nuxt.$router.push('/')
            } else {
                window.alert('Usuario não encontrado! Verifque seu login e senha')
            }
        }
    },

    async created () {
        if(localStorage.getItem("loginStatus")){
            localStorage.removeItem("loginStatus");
         }
        
    }
    

})
</script>

<style lang="scss" scoped>

.container-login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    

    

    .card-login {
        padding: 2rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.315);
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--white);

        img {
            width: 13rem;
        }

        .colorBtn {
            color: var(--white);
        }

    }
}
</style>