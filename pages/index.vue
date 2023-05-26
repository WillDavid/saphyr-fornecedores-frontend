<template>
    <div class="home-container">

        <div class="content-list">
            <Button title="Nova Senha" @click.native="() => showModal = true" />
            <ListGroups />
        </div>

        <Modal v-if="showModal" @close="() => showModal = false" />

    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    head: {
        title: 'Senha.io'
    },
    data() {
        return {
            showModal: false
        }
    }
});
</script>

<style lang="scss" scoped>
.home-container {
    display: flex;
    justify-content: center;
    width: 100vw;
    gap: 1rem;

    .content-list {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 65%;

        @media(max-width: 800px) {
            width: 90%;
        }

        @media(max-width: 480px) {
            width: 98%;
        }
    }
}
</style>
