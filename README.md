# 📚 Book Store MERN Application

A full-stack Book Store web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application allows users to browse books, search for books, add them to a shopping cart, and place orders. It also includes an admin dashboard for managing books and orders.

---

# 🚀 Live Demo

* **Frontend:** [https://book-store-project-gamma.vercel.app/](https://book-store-project-gamma.vercel.app/)
* **Backend API:** [https://book-store-project-1-n6xv.onrender.com](https://book-store-project-1-n6xv.onrender.com)

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Redux Toolkit

### Backend

* Node.js
* Express.js
* JWT Authentication
* Mongoose

### Database

* MongoDB Atlas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

# ✨ Features

### User Features

* User Registration & Login
* Secure JWT Authentication
* Browse Books
* Search Books
* View Book Details
* Browse Books by Category
* Add Books to Cart
* Remove Books from Cart
* Place Orders
* Responsive User Interface

### Admin Features

* Admin Login
* Admin Dashboard
* Add New Books
* Update Existing Books
* Delete Books
* Manage Book Inventory
* View Customer Orders

### Technical Features

* RESTful API
* CRUD Operations
* MongoDB Atlas Integration
* Protected Routes
* Responsive Design
* Cloud Deployment
* Clean Folder Structure

---

# 📂 Project Structure

```
book-store-project/
│
├── frontend/
├── backend/
├── README.md
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>
cd book-store-project
```

---

# 💻 Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file inside the **frontend** folder.

```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

Run the frontend:

```bash
npm run dev
```

---

# ⚙️ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** folder.

```env
DB_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
```

Run the backend:

```bash
npm run start:dev
```

---



# 🚀 Future Enhancements

* Online Payment Integration
* Wishlist Feature
* Book Reviews & Ratings
* AI Book Recommendation System
* Order Tracking
* Email Notifications
* Invoice Generation
* Multi-language Support
* Dark Mode

---

