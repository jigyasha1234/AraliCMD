const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let customers = [];

// POST - Add customer
app.post("/customers", (req, res) => {
  const { name, email, phone } = req.body;

  const newCustomer = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

// GET - All customers
app.get("/customers", (req, res) => {
  res.json(customers);
});

// DELETE - Remove customer
app.delete("/customers/:id", (req, res) => {
  customers = customers.filter(c => c.id !== req.params.id);
  res.json({ message: "Customer deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});