<template>
    <div class="form-container">
        <span>Informações Básicas</span>
        <div class="form-header">
            
            <Input label="Nome do Restaurante" placeholder="O nome do seu restaurante..." v-model="restaurant_header.restaurant_name"/>
		    <Input label="Slogan" placeholder="Coloque um texto bacana!" v-model="restaurant_header.slogan"/>
        </div>

        
        
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            restaurant_header: {
                restaurant_name: '',
                slogan: '',
            }
        }
    },

    watch: {
        restaurant_header: {
            handler(newValue) {
                this.$store.commit('setRestaurantHeader', newValue)
            }, deep: true
        }

    },


})
</script>

<style lang="scss" scoped>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        font-size: 0.8rem;
    }

    .form-header {
        display: flex;
        gap: 0.5rem;
    }

    .form-group {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        align-items: flex-end;
    }
}
</style>