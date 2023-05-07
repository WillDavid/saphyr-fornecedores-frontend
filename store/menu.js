
export const state = () => ({
    menu: {
        restaurant_name: '',
        slogan: '',
        groups: [
            {
                name_group: '',
                itens: [
                    {
                        name_item: '',
                        description: '',
                        price: ''
                    }
                ]
            }
        ]

    } 
})

export const mutations = {
    setMenu(state, payload) {
        state.menu = payload
        console.log(state.menu);
    }
}