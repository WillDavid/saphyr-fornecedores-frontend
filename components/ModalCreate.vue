<template>
	<div class="modal">
		<div class="modal-background" @click="close"></div>
		<div class="modal-content">
			<div class="modal-header">
				<span>Cadastrar Fornecedor</span>
			</div>

			<div class="modal-body">
				<Input label="Fornecedor" placeholder="Fornecedor..." v-model="newPassword.name_fornecedor" />
				<Input label="Endereço" placeholder="Rua popopo..." v-model="newPassword.endereco" />
				<Input label="Telefone" placeholder="Telefone..." v-model="newPassword.telefone" />
				<Input label="CNPJ" placeholder="cnpj..." v-model="newPassword.cnpj" />
				
				<Button title="Salvar Senha" @click.native="saveNewPassword(newPassword)" />
			</div>
		</div>
	</div>
</template>
  
<script lang="ts">
import Vue from "vue";
import PasswordService from '../services/password-routes'

interface NewPassword {
	name_fornecedor: string,
	endereco: string,
	telefone: string,
	cnpj: string,
}

export default Vue.extend({
	data() {
		return {
			newPassword: {} as NewPassword,

		};
	},
	methods: {
		close(): void {
			this.$emit("close");
		},

		async saveNewPassword(newPassword: Object) {
			if(this.passWordVerification()){
				window.alert('ta faltando info')
			} else {
				await PasswordService.AddNewPassword(newPassword).then( (res) => {
					this.$store.commit('setToggleListStatus')
					this.close()
				})
				
			}
		},

		passWordVerification(): boolean {
			return false
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
		max-height: 80%;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		padding: 20px;
		

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
		}
	}
}
</style>
  