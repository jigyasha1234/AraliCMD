import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://aralicmd.onrender.com";

function App() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const fetchCustomers = async () => {
    const res = await axios.get(`${API}/customers`);
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API}/customers`, form);
    setForm({ name: "", email: "", phone: "" });
    fetchCustomers();
  };

  const deleteCustomer = async (id) => {
    await axios.delete(`${API}/customers/${id}`);
    fetchCustomers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <button type="submit">Add Customer</button>
      </form>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => deleteCustomer(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;