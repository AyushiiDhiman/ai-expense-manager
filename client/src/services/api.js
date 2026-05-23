import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// GET all expenses
export const getExpenses = () => API.get("/expenses");

// ADD expense
export const addExpense = (data) => API.post("/expenses", data);

// DELETE expense
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);