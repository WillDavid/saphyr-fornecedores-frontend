<template>
    <div class="modal" v-if="show">
      <div class="modal-background" @click="close"></div>
      <div class="modal-content">
        <Input label="Nome do Grupo" placeholder="aaa"/>

        <hr />
        <div class="product-content">
            <Input label="Nome do Grupo" placeholder="aaa"/>
        </div>
        

      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      show: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  })
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
        background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
        position: relative;
        width: 50%;
        max-width: 90%;
        max-height: 90%;
        overflow: auto;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding: 20px;
    }

  }
  
  
  
  
  </style>
  