# Headquarters-Attendance-Manager
An attendance manager for college students.

## Stack
- Frontend: React.js
- Backend: Node.js + Express
- Database: MongoDB / PostgreSQL
- Hosting: Fly.io and Vercel

## Team
- Yuva: Frontend UI
- Vihan: Autherization
- Naitik: API 
- Aman: DB Schema

## 🛠 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/attendance-manager.git
   cd attendance-manager

2. Install backend dependencies
    ```cd backend
    npm install

3. Setup frontend
    ```cd ../frontend
    npm install

4. Create a .env file in the backend/ directory:
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

5. Run the backend:
    cd backend
    npm run dev

6. Run the frontend:
    cd frontend
    npm start

## Folder Structure
attendance-manager/
├── backend/
├── frontend/
├── database/
├── mock/
