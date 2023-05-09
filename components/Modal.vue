<template>
    <div class="modal">
      <div class="modal-background" @click="close"></div>
      <div class="modal-content">

        <div class="modal-header">
          <Input label="Nome do Grupo" placeholder="aaa" v-model="name_group"/>
          <Button title="Salvar Grupo" @click.native="saveGroup" colorBtn="green"/>
        </div>
        

        <hr style="margin: 1rem 0"/>
        
        <div class="product-content">
            <Input label="Item" placeholder="Nome do Produto" v-model="product.name_item" />
            <Input label="Descrição" placeholder="Informe mais detalhes..." v-model="product.description" />
            <Input label="Valor" placeholder="34,5" type="money" v-model="product.price"/>
            <Button title="Adicionar Item" @click.native="newItem"/>
        </div>

        <table v-if="list.length !== 0">
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Opções</th>
          </tr>

          <tr v-for="(item, index) in list" :key="index">
            <td>{{ item.name_item }}</td>
            <td>{{ item.description }}</td>
            <td>R$ {{ item.price }}</td>
            <td><img src="~/static/icons/trash.svg" alt="Apagar"></td>
          </tr>
        </table>
 
        
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data () {
        return {
          product: {
            name_item: '',
            description: '',
            price: '',
          },
          name_group: '',
          
          list: []
        }
      },

    methods: {
      close() {
        this.$emit('close');
      },

      newItem() {
        let product = {
          name_item: this.product.name_item,
          description: this.product.description,
          price: this.product.price
        }
        this.list.push(product)
        
      },

      saveGroup () {

        if(!this.name_group || this.list.length === 0) {
          window.alert('Informe o nome do grupo e um item')
        } else {
          let group = {
          name_group: this.name_group,
          itens: this.list
        }

        this.$store.commit('setNewGroup', group)
        this.close()
        }
        
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
        width: 70%;
        max-width: 90%;
        max-height: 90%;
        overflow: auto;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding: 20px;

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .product-content {
            display: flex;
            align-items: flex-end;
            gap: 1rem;
        }

        table {
          text-align: left;
          margin-top: 1rem;
          width: 100%;
          border-collapse: collapse;

          tr:nth-child(even) {
  background-color: #dddddd;
}

          td, th {
            font-weight: 400; 
            text-align: left;
            padding: 8px;
            padding-left: 0;
          }

          td {
            font-size: 0.9rem;
            font-weight: 300;
            padding: 0.7rem;
            min-width: 6.25rem;
          }
        }
    }

  }
  
  
  
  
  </style>
  