<template>
    <table class="list-container" v-if="groups.length !== 0">
       
        <h3>Listagem de Fornecedores</h3>

        <tr>
            <th>Fornecedor</th>
            <th>Endereco</th>
            <th>Telefone</th>
            <th>CNPJ</th>
        </tr>

        <tr v-for="(group, index) in groups" :key="index">
            <td>{{ group.name_fornecedor}}</td>
            <td>{{ group.endereco }}</td>
            <td>{{ group.telefone }}</td>
            <td>{{ group.cnpj }}</td>
            <td class="icons">
                <img src="~/static/icons/edit.svg" alt="Editar" @click="() => showModal = true">
                <img src="~/static/icons/trash.svg" alt="Apagar" @click="deletePassword(group.uid)">
            </td>

            <ModalEdit v-if="showModal" @close="() => showModal = false" :passwordToEdit="group"/>
        </tr>

        
    </table>
</template>

<script lang="ts">
import Vue from 'vue'
import PasswordService from '../services/password-routes'

interface GroupPasswords {
    name_fornecedor: string,
	endereco: string,
	telefone: string,
	cnpj: string,
}
export default Vue.extend({
    data () {
        return {
            groups: [] as GroupPasswords [],
            showModal: false
        }
    },

    methods: {
        async deletePassword (id: string) {
            await PasswordService.DeletePassword(id).then( (res) => {
                this.$store.commit('setToggleListStatus')
                window.alert('Deletado!')
            })
        },

        async ListPasswords() {
            await PasswordService.ListAllPasswords().then( (res) => {
                this.groups = res.data
            })
        }
    },

    async created () {
        await this.ListPasswords()
    },

    computed: {
        trigger (): boolean {
            return this.$store.state.toggleListStatus
        }
    },

    watch: {
        trigger() {
            this.ListPasswords()
        }
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