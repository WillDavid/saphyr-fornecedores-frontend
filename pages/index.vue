<template>
    <div class="home-container">
        <h3>Verificando suas credenciais...</h3>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    head: {
        title: 'Saphyr Fornecedores'
    },

    async created () {
        if(!localStorage.getItem("loginStatus")){
            this.$nuxt.$router.push('login')
        } else {
            this.$nuxt.$router.push('fornecedores')
        }
        

        
    },
});
</script>

<style lang="scss" scoped>
.home-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
