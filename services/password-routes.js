import { http } from "./config";

export default {
    ListAllSuppliers: async () => {
        return await http.get(`/listAllSuppliers`)
    },

    AddNewSupplier: async (data) => {
        return await http.post(`/newSupplier`, data)
    },

    DeleteSupplier: async (id) => {
        return await http.delete(`/supplier/delete/${id}`)
    },

    EditSupplier: async (id, data) => {
        return await http.put(`/supplier/update/${id}`, data)
    }
}