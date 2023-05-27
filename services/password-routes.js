import { http } from "./config";

export default {
    ListAllPasswords: async () => {
        return await http.get(`/listOfPasswords`)
    },

    AddNewPassword: async (data) => {
        return await http.post(`/newPassword`, data)
    }   


}