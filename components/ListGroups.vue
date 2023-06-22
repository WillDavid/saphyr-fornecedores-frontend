<template>
    <table class="list-container" v-if="groups.length !== 0">
        <thead>
            <th>Fornecedor</th>
            <th>Endereco</th>
            <th>Telefone</th>
            <th>CNPJ</th>
            <th>Email</th>
            <th>Categoria</th>
            <th>Região</th>
            <th>Opções</th>
        </thead>

        <tr v-for="(group, index) in groups" :key="index">
            <td data-title="Fornecedor">{{ group.name_fornecedor}}</td>
            <td data-title="Endereço">{{ group.endereco }}</td>
            <td data-title="Telefone">{{ group.telefone }}</td>
            <td data-title="Cnpj">{{ group.cnpj }}</td>
            <td data-title="Email">{{ group.email }}</td>
            <td data-title="Categoria">{{ group.category }}</td>
            <td data-title="Região">{{ group.region }}</td>
            <td data-title="Opções" class="icons">
                <!-- <img src="~/static/icons/edit.svg" alt="Editar" @click="() => showModal = true"> -->
                <img src="~/static/icons/trash.svg" alt="Apagar" @click="deleteCategory(group.uid)">
            </td>

            <ModalEdit v-if="showModal" @close="() => showModal = false" :passwordToEdit="group"/>
        </tr>

    </table>

</template>

<script lang="ts">
import Vue from 'vue'

import SupplierService from '../services/suppliers-routes'

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


    tr, thead {
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
    
    @media (max-width: 800px) {

        thead {
            display: none;
        }

        tr {
            td {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 0.5rem;
                text-align: right;
           
            }

            td:last-of-type {
                margin-bottom: 1.5rem;
            }


            td:before {
                content: attr(data-title);
                display: block;
            }
        }
    }
}
</style>