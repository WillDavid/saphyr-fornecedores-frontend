
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

    setNewPassword (state, payload) {
        console.log(payload)
    }

}