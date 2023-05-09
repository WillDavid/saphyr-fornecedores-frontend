<template>
    <div class="editor-container">
        <Form />
        <ListGroups />
        <Button title="Criar Grupo" @click.native="() => showModal = true"/>
        <Modal v-if="showModal" @close="() => showModal = false" />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    head:{
		title: 'Editor - Cardap.io'
	},
    data () {
        return {
            showModal: false

        }
    }
})
</script>

<style lang="scss" scoped>

.editor-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>