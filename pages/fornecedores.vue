<template>
    <div class="home-container">

        <h3>Fornecedores</h3>

        <div class="buttons">

            <div class="filter">
                <FilterSelect @selected="handleSelectedRegion" :options="optionsRegion" label="Região"/>
                <FilterSelect @selected="handleSelectedCategory" :options="optionsCategory" label="Categoria"/>
            </div>
            
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
import SupplierService from '../services/suppliers-routes'

interface GroupSupplier {
    name_fornecedor: string,
	endereco: string,
	telefone: string,
	cnpj: string,
	email: string,
	region: string,
    category: string
}


export default Vue.extend({
    head: {
        title: 'Saphyr Fornecedores'
    },
    data() {
        return {
            groups: [] as GroupSupplier [],
            showModal: false,
            isFiltered: false,
            groupFiltered: [] as GroupSupplier [],
            region: 'Todos',
            category: 'Todos',

            optionsRegion: [
                { label: 'Todos', value: 'Todos' },
				{ label: 'Norte', value: 'Norte' },
				{ label: 'Nordeste', value: 'Nordeste' },
				{ label: 'Centro-Oeste', value: 'Centro-Oeste' },
				{ label: 'Sudeste', value: 'Sudeste' },
				{ label: 'Sul', value: 'Sul' }
			],
			optionsCategory: [
				{ label: 'Todos', value: 'Todos' },
				{ label: 'Paisagismo', value: 'Paisagismo' },
				{ label: 'Limpeza', value: 'Limpeza' },
				{ label: 'Manutenção', value: 'Manutenção' },
				{ label: 'Segurança', value: 'Segurança' },
                { label: 'Outros', value: 'Outros' }
			],
        }
    },


    methods: {
        

        async ListSuppliers() {
            await SupplierService.ListAllSuppliers().then( (res) => {
                this.groups = res.data
            })
        },

        FilteredList() {
            this.groupFiltered = []

            if(this.region === 'Todos' && this.category == 'Todos') {
                this.isFiltered = false
            } else {
                this.isFiltered = true
                this.groups.map ( (item) => {
                if(this.region !== 'Todos') {
                    if(this.category !== 'Todos') {
                        
                        if(item.region === this.region && item.category === this.category) {
                            this.groupFiltered.push(item)
                        }
                    } else {
                        if(item.region === this.region) {
                            this.groupFiltered.push(item)
                        }
                    }

                } else {
                    if(item.category === this.category) {
                            this.groupFiltered.push(item)
                        }
                }
            })
            }
            
            
        },

        handleSelectedRegion(option: any) {
            this.region = option
        },

        handleSelectedCategory (option: any) {
            this.category = option
        }
    },

    async created () {
        await this.ListSuppliers() 
    },

    computed: {
        trigger (): boolean {
            return this.$store.state.toggleListStatus
        }
    },

    watch: {
        trigger() {
            this.ListSuppliers()
        },

        region(newValue) {
            this.FilteredList()
        },

        category(newValue) {
            this.FilteredList()
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
    padding: 1rem 2rem;

    .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;

        .filter {
            display: flex;
            gap: 0.5rem;
        }
    }

    @media(max-width: 680px) {
        padding: 1rem 3rem;
    }

    @media(max-width: 480px) {
        padding: 1rem 2rem;
    }
}
</style>
