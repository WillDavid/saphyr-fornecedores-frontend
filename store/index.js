
export const state = () => ({
    menu: {
        restaurant_name: '',
        slogan: '',
        groups: []
    },
    
    new_password: {
        description: '',
        email: '',
        password: '',
    }
})

export const mutations = {
    setRestaurantHeader(state, payload) {
        state.menu.restaurant_name = payload.restaurant_name
        state.menu.slogan = payload.slogan
    },

    setNewGroup(state, payload) {
        state.menu.groups.push(payload)
        console.log(state.menu.groups);
    }

}