<template>
    <div class="header-container">
        <div class="header-logo">
            <img src="~/static/icon-logo.svg" alt="">
            <h4>Alqia Fornecedores</h4>
        </div>
        
        <div class="header-options">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/Login" @click.native="logoutReq">Sair</nuxt-link>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
        logoutReq () {
            localStorage.removeItem("loginStatus");
        }
    }
})
</script>

<style lang="scss" scoped>

.header-container {
    height: 7vh;
    width: 100vw;
    background-color: var(--green);
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);

    .header-logo {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        img {
            width: 5vh;
        }
    }
    .header-options {
        display: flex;
        gap: 0.7rem;

        a {
            color: var(--white);
            text-decoration: none;
            padding: 0.2rem 0.5rem;
            font-size: 0.8rem;
            border-radius: 0.25rem;
        }
     
        a.nuxt-link-exact-active {
            background-color: rgba(0, 0, 0, 0.226);
        }
    }
}
</style>