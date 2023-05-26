<template>
	<div class="home-container">
		<!-- <Form /> -->
        <ListGroups />
        <Button title="Nova Senha" @click.native="() => showModal = true"/>
        <Modal v-if="showModal" @close="() => showModal = false" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	head:{
		title: 'Senha.io'
	},
	data () {
        return {
            showModal: false

        }
    }
});
</script>

<style lang="scss" scoped>
.home-container {
	padding: 1rem;
	padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>
