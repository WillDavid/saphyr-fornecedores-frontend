<template>
    <table class="list-container" v-if="groups.length !== 0">
        <tr>
            <th>Site</th>
            <th>Email</th>
            <th>Senha</th>
        </tr>

        <tr v-for="(group, index) in groups" :key="index">
            <td>{{ group.description}}</td>
            <td>{{ group.email }}</td>
            <td>{{ group.senha }}</td>
            <td class="icons">
                <img src="~/static/icons/edit.svg" alt="Editar">
                <img src="~/static/icons/trash.svg" alt="Apagar">
            </td>
        </tr>
    </table>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            groups: [
                {description: 'Facebook', email: 'williamdavidalmeida@gmail.com', senha: '123456'},
                {description: 'Instagram', email: 'williamdavidalmeida@gmail.com', senha: '123456'},
                {description: 'Twitter', email: 'williamdavidalmeida@gmail.com', senha: '123456'}
            ]
        }
    },

})
</script>

<style lang="scss" scoped>
.list-container {
    text-align: left;
    border-collapse: collapse;
    width: 100%;

    tr {
        border-bottom: 1px solid var(--red);
        height: 2.5rem;

        th {
            text-align: left;
            padding: 8px;
            padding-left: 0;
        }

        td {
            font-size: 0.8rem;

            img {
                width: 15px;
            }
        }
    }

    
}
</style>