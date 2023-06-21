<template>
    <table class="list-container" v-if="groups.length !== 0">
        <tr>
            <th>Fornecedor</th>
            <th>Endereco</th>
            <th>Telefone</th>
            <th>CNPJ</th>
            <th>Email</th>
            <th>Categoria</th>
            <th>Região</th>
            <th>Opções</th>
        </tr>

        <tr v-for="(group, index) in groups" :key="index">
            <td>{{ group.name_fornecedor}}</td>
            <td>{{ group.endereco }}</td>
            <td>{{ group.telefone }}</td>
            <td>{{ group.cnpj }}</td>
            <td>{{ group.email }}</td>
            <td>{{ group.category }}</td>
            <td>{{ group.region }}</td>
            <td class="icons">
                <!-- <img src="~/static/icons/edit.svg" alt="Editar" @click="() => showModal = true"> -->
                <img src="~/static/icons/trash.svg" alt="Apagar" @click="deleteCategory(group.uid)">
            </td>

            <ModalEdit v-if="showModal" @close="() => showModal = false" :passwordToEdit="group"/>
        </tr>

    </table>

</template>

<script lang="ts">
import Vue from 'vue'

import SupplierService from '../services/password-routes'

export default Vue.extend({
    props: {
        groups: Object
    },

    data () {
        return {
            showModal: false
        }
    },

    methods: {
        async deleteCategory (id: string) {
            await SupplierService.DeleteSupplier(id).then( (res) => {
                this.$store.commit('setToggleListStatus')
                window.alert('Deletado!')
            })
        },
    }

    
})
</script>

<style lang="scss" scoped>
.list-container {
    text-align: left;
    border-collapse: collapse;
    width: 100%;

    tr {
        border-bottom: 1px solid var(--red);
        height: 2.5rem;

        th {
            text-align: left;
            padding: 8px;
            padding-left: 0;
            font-weight: 500;
        }

        td {
            font-size: 0.8rem;

            img {
                cursor: pointer;
                width: 15px;
            }
        }
    }

    
}
</style>