<template>
    <div class="container-login">
        
        <div class="card-login">
            <h4>CRUD.io</h4>
            <Input label="Email" placeholder="email@gmail.com"/>
            <Input label="Senha" placeholder="*****"/>

            <Button title="Entrar" colorBtn="red" style="width: 100%;margin-top: 1rem;"></Button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

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
        gap: 0.5rem;


        h4 {
            margin-bottom: 0.5rem;
            text-align: center;
            color: var(--red);
        }
    }
}
</style>