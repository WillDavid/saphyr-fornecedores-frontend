import { http } from "./config";

export default {
    ListAllPasswords: async () => {
        return await http.get(`/listOfPasswords`)
    },

    AddNewPassword: async (data) => {
        return await http.post(`/newPassword`, data)
    },

    DeletePassword: async (id) => {
        return await http.delete(`/password/delete/${id}`)
    },

    EditPassword: async (id, data) => {
        return await http.put(`/password/update/${id}`, data)
    }
}