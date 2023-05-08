<template>
    <button class="button-container">{{ title }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        title: String
    }
})
</script>

<style lang="scss" scoped>
.button-container {
    width: 7rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.3rem;
    color: var(--white);
    background-color: var(--text);
    cursor: pointer;
}
</style>