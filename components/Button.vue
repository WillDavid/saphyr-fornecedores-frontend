<template>
	<button :class="[{ btn }, verifyColor(colorBtn)]">{{ title }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		title: String,
		colorBtn: String
	},
	data() {
		return {
			color: '',
			btn: true
		}
	},

	methods: {
		verifyColor(buttonColor: string): string {
			if (buttonColor === 'blue') {
				return this.color = 'blueBtn'
			} else if (buttonColor === 'red') {
				return this.color = 'redBtn'
			} else {
				return this.color = 'greenBtn'
			}
		},

		changeColor() {
			this.color = "redBtn"
		}
	}
})
</script>

<style lang="scss" scoped>
.btn {
	width: 8rem;
	height: 2.5rem;
	border: none;
	border-radius: 0.3rem;
	color: var(--white);
	background-color: var(--text);
	cursor: pointer;
}

.blueBtn {
	background-color: var(--text);
}

.greenBtn {
	background-color: var(--green);
}

.redBtn {
	background-color: var(--red);
}
</style>