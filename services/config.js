import axios from "axios";

const http = axios.create({
  baseURL: "https://saphyr-fornecedores-backend.onrender.com",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

export { http };