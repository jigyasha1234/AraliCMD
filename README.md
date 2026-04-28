# Customer Management Dashboard

A simple full-stack web application to **add, view, and delete customers** using React and Node.js.

---

## Live Demo

* Frontend (Vercel): https://arali-cmd.vercel.app/
* Backend (Render): https://aralicmd.onrender.com

---

## Features

* Add new customers
* View customer list
* Delete customers
* Real-time UI updates
* Fully deployed (Frontend + Backend)

---

## Tech Stack

### Frontend

* React JS
* Axios

### Backend

* Node.js
* Express.js
* UUID
* CORS

---

## Project Structure

```
customer-dashboard/
 ├── frontend/   # React App
 └── backend/    # Express Server
```

---

## Setup Instructions

### Clone Repository

```
git clone https://github.com/jigyasha1234/AraliCMD.git
cd AraliCMD
```

---

### 2️⃣ Run Backend

```
cd backend
npm install
node server.js
```

Server runs on:

```
https://aralicmd.onrender.com
```

---

### 3️⃣ Run Frontend

```
cd frontend
npm install
npm start
```

App runs on:

```
https://arali-cmd.vercel.app/
```

---

## API Endpoints

### Add Customer

```
POST /customers
```

### Get All Customers

```
GET /customers
```

### Delete Customer

```
DELETE /customers/:id
```

---

## Testing APIs

You can test APIs using tools like:

* Postman

Example POST request body:

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

---

## Deployment

### Backend

Deployed on Render:

* Uses `process.env.PORT`
* Start command: `npm start`

### Frontend

Deployed on Vercel:

* Root directory: `frontend`
* Build command: `npm run build`

---

## Limitations

* Data is stored in memory (array)
* Data will reset when server restarts

---

## Future Improvements

* Edit/Update customer
* Add database (MongoDB/MySQL)
* Authentication
* Improve UI/UX

---

## 👩‍💻 Author

**Jigyasha Rani**

---

## ⭐ Acknowledgements

This project was built as part of a full-stack assignment to demonstrate basic CRUD operations and deployment.

---
