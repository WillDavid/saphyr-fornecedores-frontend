<template>
    <div class="input-container">
        <span>Região</span>
      <select @change="onSelect">
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        options: [
          { label: 'Norte', value: 'Norte' },
          { label: 'Nordeste', value: 'Nordeste' },
          { label: 'Centro-Oeste', value: 'Centro-Oeste' },
          { label: 'Sudeste', value: 'Sudeste' },
          { label: 'Sul', value: 'Sul' }
        ]
      };
    },
    methods: {
      onSelect(event) {
        const selectedOption = event.target.value;
        this.$emit('selected', selectedOption);
      }
    }
  };
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

    select {
        width: 15rem;
		padding: 0.3rem;
		height: 2.5rem;
		border-radius: 0.3rem;
		border: 1px solid var(--gray);
    }
}
</style>
  