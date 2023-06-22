<template>
	<div class="modal">
		<div class="modal-background" @click="close"></div>
		<div class="modal-content">
			<div class="modal-header">
				<span>Cadastrar Fornecedor</span>
			</div>

			<div class="modal-body">
				<Input label="Fornecedor" placeholder="Fornecedor..." v-model="supplier.name_fornecedor" />
				<Input label="Endereço" placeholder="Rua popopo..." v-model="supplier.endereco" />
				<Input label="Telefone" placeholder="Telefone..." type="tel" v-model="supplier.telefone" />
				<Input label="CNPJ" placeholder="cnpj..." v-model="supplier.cnpj" />
				<Input label="E-mail" placeholder="email..." type="email" v-model="supplier.email" />
				<Select label="Região" @selected="handleSelectedRegion" :options="optionsRegion"/>
				<Select label="Categoria" @selected="handleSelectedCategory" :options="optionsCategory"/>
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
	endereco: string,
	telefone: string,
	cnpj: string,
	email: string,
	region: string,
	category: string,
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
			
		};
	},
	methods: {
		close(): void {
			this.$emit("close");
		},

		async saveNewPupplier(newSupplier: Object) {
			console.log(this.supplier)
			if(this.supplierVerification()){
				window.alert('ta faltando info')
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
			return false
		},

		handleSelectedRegion(option: string) {
      		this.supplier.region = option;
    	},

		handleSelectedCategory(option: string) {
      		this.supplier.category = option;
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
  