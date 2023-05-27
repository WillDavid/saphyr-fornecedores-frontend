<template>
	<div class="modal">
		<div class="modal-background" @click="close"></div>
		<div class="modal-content">
			<div class="modal-header">
				<span>Cadastrar nova senha</span>
			</div>

			<div class="modal-body">
				<Input label="De onde é essa senha?" placeholder="Facebook, Twitter, Instagram...?" v-model="newPassword.description" />
				<Input type="email" label="Email" placeholder="Informe o email..." v-model="newPassword.email" />
				<Input label="Senha" placeholder="batata123 é uma senha muito fraca..." v-model="newPassword.password" />
				<Button title="Salvar Senha" @click.native="saveNewPassword(newPassword)" />
			</div>
		</div>
	</div>
</template>
  
<script lang="ts">
import Vue from "vue";
import PasswordService from '../services/password-routes'

interface NewPassword {
	description: string;
	email: string;
	password: string;
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
			if(this.newPassword.description.trim().length === 0 || this.newPassword.email.trim().length === 0 || this.newPassword.password.trim().length === 0) {
				return true
			}else {
				return false
			}
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
  