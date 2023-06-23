<template>
	<div class="modal">
		<div class="modal-background" @click="close"></div>
		<div class="modal-content">
			<div class="modal-header">
				<span>Cadastrar Fornecedor</span>
			</div>

			<div class="modal-body">
				<Input label="Fornecedor" placeholder="Fornecedor..." v-model="supplier.name_fornecedor" />
				<Input label="CNPJ" placeholder="cnpj..." v-model="supplier.cnpj" />
				<Input label="Telefone" placeholder="Telefone..." type="tel" v-model="supplier.telefone" />
				<Input label="E-mail" placeholder="email..." type="email" v-model="supplier.email" />
				<Select label="Região" @selected="handleSelectedRegion" :options="optionsRegion"/>
				<Select label="Categoria" @selected="handleSelectedCategory" :options="optionsCategory"/>
				<Select label="Avaliação" @selected="handleSelectedRating" :options="optionsServicesRating"/>
				<Button title="Cadastrar" @click.native="saveNewPupplier(supplier)" />
			</div>
		</div>
	</div>
</template>
  
<script lang="ts">
import Vue from "vue";
import SupplierService from '../services/suppliers-routes'

interface NewSupplier {
	name_fornecedor: string,
	telefone: string,
	cnpj: string,
	email: string,
	region: string,
	category: string,
	rating: string
}

export default Vue.extend({
	data() {
		return {
			supplier: {} as NewSupplier,
			optionsRegion: [
				{ label: 'Norte', value: 'Norte' },
				{ label: 'Nordeste', value: 'Nordeste' },
				{ label: 'Centro-Oeste', value: 'Centro-Oeste' },
				{ label: 'Sudeste', value: 'Sudeste' },
				{ label: 'Sul', value: 'Sul' }
			],
			optionsCategory: [
				{ label: 'Outros', value: 'Outros' },
				{ label: 'Paisagismo', value: 'Paisagismo' },
				{ label: 'Limpeza', value: 'Limpeza' },
				{ label: 'Manutenção', value: 'Manutenção' },
				{ label: 'Segurança', value: 'Segurança' }
			],

			optionsServicesRating: [
				{ label: '0', value: '0' },
				{ label: '1', value: '1' },
				{ label: '2', value: '2' },
				{ label: '3', value: '3' },
				{ label: '4', value: '4' },
				{ label: '5', value: '5' }
			],
			
		};
	},
	methods: {
		close(): void {
			this.$emit("close");
		},

		async saveNewPupplier(newSupplier: Object) {
			console.log(this.supplier)
			if(this.supplierVerification()){
				window.alert('Você deve cadastrar ao menos o nome do fornecedor e CNPJ')
			} else {
				await SupplierService.AddNewSupplier(newSupplier).then( (res) => {
					this.$store.commit('setToggleListStatus')
					this.close()
					window.alert('Fornecedor cadastrado com sucesso!')
				}).catch ( (error) => {
					window.alert('Ocorreu um erro, tente novamente em breve!')
				})
				
			}
		},

		supplierVerification(): boolean {
			if(!this.supplier.region) {
				this.supplier.region = 'Norte'
			}

			if(!this.supplier.category) {
				this.supplier.category = 'Outros'
			}

			if(!this.supplier.rating) {
				this.supplier.rating = '0'
			}

			if(!this.supplier.email || this.supplier.email.length === 0) {
				this.supplier.email = 'Não cadastrado...'
			}

			if(!this.supplier.telefone || this.supplier.telefone.length === 0) {
				this.supplier.telefone = 'Não cadastrado...'
			}


			if(!this.supplier.name_fornecedor || this.supplier.name_fornecedor.length === 0) {
				return true
			} else {

				if(!this.supplier.cnpj || this.supplier.cnpj.length === 0) {
					return true
				} else {
					return false
				}
				
			}

		},

		handleSelectedRegion(option: string) {
      		this.supplier.region = option;
    	},

		handleSelectedCategory(option: string) {
      		this.supplier.category = option;
    	},

		handleSelectedRating(option: string) {
      		this.supplier.rating = option;
    	}
	},
});
</script>
  
<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;

	.modal-background {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.655);
	}

	.modal-content {
		position: relative;
		width: auto;
		max-width: 80%;
		max-height: 90%;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		padding: 20px;
		overflow-y: auto;
		

		.modal-header {
			border-bottom: 1px solid var(--red);
			margin-bottom: 2rem;
			
			span {
				font-weight: 600;
				font-size: 1.1rem;
			}
		}

		.modal-body {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			align-items: end;

			@media (max-width: 670px) {
				flex-wrap: nowrap;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 0 2rem;
			}
		}


	}
}
</style>
  