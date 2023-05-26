<template>
    <div class="editor-container">
        <h2>Editor</h2>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    head:{
		title: 'Senha.Io'
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