<template>
    <table class="list-container" v-if="groups.length !== 0">
       
        <tr>
            <th>Site</th>
            <th>Email</th>
            <th>Senha</th>
        </tr>
        <tr v-for="(group, index) in groups" :key="index">
            <td>{{ group.description}}</td>
            <td>{{ group.email }}</td>
            <td>{{ group.password }}</td>
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
    description: string,
    email: string,
    password: string,
    uid: string
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