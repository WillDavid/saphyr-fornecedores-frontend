<template>
	<div class="input-container">
		<span>{{ label }}</span>
		<input :type="type" :placeholder="placeholder" v-model="inputValue" @input="updateValue">
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	props: {
		label: String,
		placeholder: String,
		value: String,
		type: String
	},

	data() {
		return {
			inputValue: this.value,
		};
	},

	methods: {
		updateValue(): void {
			this.$emit('input', this.inputValue);
		},

		updateRegion():void {
			this.$emit('select', this.inputValue)
		}
	},
});
</script>

<style lang="scss" scoped>
.input-container {
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	color: var(--text);

	span {
		font-size: 0.85rem;
	}

	input {
		width: 15rem;
		padding: 0.3rem;
		height: 2.5rem;
		border-radius: 0.3rem;
		border: 1px solid var(--gray);
	}
}
</style>