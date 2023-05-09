<template>
    <button :class="[{ btn}, verifyColor()]">{{ title }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        title: String,
        colorBtn: String
    },
    data () {
    return {
      color: null,
      btn: true
    }
  },

    methods: {
    verifyColor () {
      if (this.colorBtn === 'green') {
        return (this.color = 'greenBtn')
      } else if (this.colorBtn === 'red') {
        return (this.color = 'redBtn')
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

.greenBtn {
  background-color: var(--green);
}
.orangeBtn {
  background-color: var(--red);
}
</style>