import axios from "axios";

export const fetchWrapper = axios.create({
  baseURL: "http://localhost:5174/api",
  headers: {
    "Content-Type": "application/json",
  },
});
