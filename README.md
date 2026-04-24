# Expense Tracker Portal

A modern, full-stack Expense Tracker built with the MERN stack (MongoDB, Express, React, Node.js). Designed with a premium, responsive UI using React, Vite, and Tailwind CSS v4, this platform allows users to safely manage, visualize, and analyze their daily incomes and expenses.

## Features
- **User Authentication:** Secure JWT-based registration and login system with encrypted passwords.
- **Dynamic Dashboard:** A rich user dashboard tracking total balance, incomes, and expenses.
- **Transaction Management:** Full CRUD (Create, Read, Update, Delete) capability for all financial inputs.
- **Smart Analytics (Coming Soon):** Visual charts (Pie, Bar, Line) and automatic insights.
- **Responsive UI:** A cohesive, sleek dark-themed design crafted with Tailwind v4 and Lucide React.
- **High Performance:** Initialized with Vite for near-instant cold server starts and hot module replacement.

## Tech Stack
**Frontend:**
- React (Vite)
- React Router DOM
- Tailwind CSS v4
- Axios
- Recharts (Analytics)
- Lucide React (Icons)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcryptjs (Password Hashing)
- CORS & dotenv

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (Running locally or a MongoDB Atlas Cloud cluster)

### Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/laxmi7396/Expense-tracker.git
   cd Expense-tracker
   ```

2. **Backend Configuration**
   Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory (if not present) and add your configurations:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster0.exmaple.mongodb.net/expense_tracker
   JWT_SECRET=your_super_secret_key
   ```
   *Replace the `MONGO_URI` with your own local or MongoDB Atlas string.*

   Start the Backend:
   ```bash
   node server.js
   ```

3. **Frontend Configuration**
   Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   ```
   Start the Vite Development Server:
   ```bash
   npm run dev
   ```

4. **View the Application**
   Open your browser and navigate to the URL provided by Vite (typically `http://localhost:5173`).

---
*Created by [laxmi7396](https://github.com/laxmi7396)*