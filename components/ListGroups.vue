<template>
    <table class="list-container" v-if="groups.length !== 0">
        <tr>
            <th>Grupo</th>
            <th>Quantidade</th>
            <th>Opções</th>
        </tr>

        <tr class="group-content" v-for="(group, index) in groups" :key="index">
            <td>{{ group.name_group }}</td>
            <td class="group-qtde">{{ group.itens.length }}</td>
            <td class="group-img"><img src="~/static/icons/edit.svg" alt="Editar">
            <img src="~/static/icons/trash.svg" alt="Apagar"></td>
        </tr>
    </table>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            groups: []
        }
    },

    created () {
        this.groups = this.$store.state.menu.groups
    }
})
</script>

<style lang="scss" scoped>
.list-container {
    margin-top: 1rem;
    text-align: left;
    border-collapse: collapse;

    td, th {
        font-weight: 400; 
        text-align: left;
        padding: 8px;
        padding-left: 0;
    }

    .group-content {

        .group-qtde, .group-img {
            text-align: center;
        }
        img {
            cursor: pointer;
            width: 1rem;
        }
    }
}
</style>