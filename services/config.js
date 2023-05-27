import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

export { http };