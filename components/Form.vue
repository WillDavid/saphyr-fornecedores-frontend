<template>
 
    <div class="form-container">

        <span>Informações Básicas</span>
        <div class="form-header">
            <pre>{{ menu }}</pre>
            <pre>{{ $store.state.menu }}</pre>
            <Input label="Nome do Restaurante" placeholder="Texto super massa aqui..." v-model="menu.restaurant_name"/>
		    <Input label="Slogan" placeholder="Texto super massa aqui..." v-model="menu.slogan"/>
        </div>

        <hr style="width: 50%; margin-top: 1rem;">

        <Button title="Criar Grupo" @click.native="addGroup"/>

        <div class="form-group" v-for="(group, index) in groups" :key="index">
            <Input label="Nome do Grupo" placeholder=""/>
            <Button title="Adicionar Itens"/>

        </div>
        
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            menu: {
                restaurant_name: '',
        slogan: '',
        groups: [
            {
                name_group: '',
                itens: [
                    {
                        name_item: '',
                        description: '',
                        price: ''
                    }
                ]
            }
        ]
            }
        }
    },

    methods: {
        addGroup(){
            let group = {
                title: '',
                product: []
            }
            this.groups.push(group)
        },
    },

    watch: {
        menu: {
            handler(newVal) {
                this.$store.commit('setMenu', newVal)
            },
            deep: true,
        },
    }

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