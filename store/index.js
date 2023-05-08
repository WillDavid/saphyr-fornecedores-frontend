
export const state = () => ({
    menu: {
        restaurant_name: '',
        slogan: '',

        
        groups: [
            {
                name_group: 'Sanduiches',
                itens: [
                    {
                        name_item: 'X-salada',
                        description: 'Pão bola, alface, tomate, cebola e 2 carnes de hamburguer',
                        price: '2,34'
                    },

                    {
                        name_item: 'X-cebola',
                        description: 'Pão bola, alface, tomate, cebola e 2 carnes de hamburguer',
                        price: '2,34'
                    }
                ]
            },
            {
                name_group: 'X-saladas',
                itens: [
                    {
                        name_item: 'X-salada',
                        description: 'Pão bola, alface, tomate, cebola e 2 carnes de hamburguer',
                        price: '2,34'
                    },

                    {
                        name_item: 'X-cebola',
                        description: 'Pão bola, alface, tomate, cebola e 2 carnes de hamburguer',
                        price: '2,34'
                    }
                ]
            }
        ]

    } 
})

export const mutations = {
    setRestaurantHeader(state, payload) {
        state.menu.restaurant_name = payload.restaurant_name
        state.menu.slogan = payload.slogan
    },

}