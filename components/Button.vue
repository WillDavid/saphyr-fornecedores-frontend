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
			if (buttonColor === 'green') {
				return this.color = 'greenBtn'
			} else if (buttonColor === 'red') {
				return this.color = 'redBtn'
			} else {
				return this.color = 'blueBtn'
			}
		}
	}
})
</script>

<style lang="scss" scoped>
.btn {
	width: 7rem;
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