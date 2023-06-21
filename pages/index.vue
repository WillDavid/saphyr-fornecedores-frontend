<template>
    <div class="home-container">

        <h3>Fornecedores</h3>

        <div class="buttons">
            <FilterSelect @selected="handleSelected"/>
            <Button title="Novo Fornecedor" @click.native="() => showModal = true" />
        </div>

        <ListGroups :groups="groups" v-if="!isFiltered"/>
        <ListGroups :groups="groupFiltered" v-else/>

        <span v-if="groups.length === 0 && !isFiltered">
            Cadastre um fornecedor...
        </span>

        <span v-if="groupFiltered.length === 0 && isFiltered">
            Nenhum resultado...
        </span>

        
        <ModalCreate v-if="showModal" @close="() => showModal = false"/>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import PasswordService from '../services/password-routes'

interface GroupPasswords {
    name_fornecedor: string,
	endereco: string,
	telefone: string,
	cnpj: string,
	email: string,
	region: string,
}


export default Vue.extend({
    head: {
        title: 'Saphyr Fornecedores'
    },
    data() {
        return {
            groups: [] as GroupPasswords [],
            showModal: false,
            isFiltered: false,
            groupFiltered: [] as GroupPasswords []
        }
    },

    methods: {
        

        async ListPasswords() {
            await PasswordService.ListAllPasswords().then( (res) => {
                this.groups = res.data
            })
        },

        FilteredList(option: string) {
            this.groupFiltered = []
            this.groups.map( (item) => {
                if(item.region === option) {
                    this.groupFiltered.push(item)
                }
            })
        },

        handleSelected(option: any) {
            if(option === 'Todos') {
                this.isFiltered = false
                console.log('sad')
            } else {
                this.isFiltered = true
                this.FilteredList(option)

            }
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



    
});
</script>

<style lang="scss" scoped>
.home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 1rem;
    width: 100%;
    padding: 1rem 4rem;

    .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    @media(max-width: 800px) {
        padding: 1rem 1rem;
    }

    @media(max-width: 480px) {
        padding: 1rem 1rem;
    }
}
</style>
