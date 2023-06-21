<template>
    <div>
        <Navbar v-if="$nuxt.$route.name === 'fornecedores'"/>
        <Nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>