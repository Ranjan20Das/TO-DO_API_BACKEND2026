# TO-DO API Backend 2026

A RESTful backend API for task management built using Node.js, Express, MongoDB, and JWT authentication.

---

## 📌 Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- Postman (for API testing)

---

## 📂 Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Ranjan20Das/TO-DO_API_BACKEND2026.git
cd TO-DO_API_BACKEND2026
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create environment file
Create a .env file in the root directory and add:

env
Copy code
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smarttodo
JWT_SECRET=your_jwt_secret_key
4️⃣ Start MongoDB
Make sure MongoDB is running locally:

bash
Copy code
mongod
5️⃣ Start the server
bash
Copy code
nodemon server.js
OR

bash
Copy code
node server.js
You should see:

arduino
Copy code
MongoDB Connected
Server running on port 5000
🔐 API Endpoints
Authentication
POST /api/auth/register

POST /api/auth/login

Tasks (Protected Routes)
POST /tasks → Create task

GET /tasks → Get all tasks

PUT /tasks/:id → Update task

DELETE /tasks/:id → Delete task

🧪 Testing with Postman
Use Bearer Token for protected routes

Add JWT token in Authorization tab

📊 Database
MongoDB database name: smarttodo

Collections:

users

tasks

✅ Author
Ranjan Das
Node.js developer

⭐ License
This project is for learning and educational purposes.

yaml
Copy code

---
🔁 PM2 Process Manager Setup

PM2 is used to keep the backend server running continuously and automatically restart it in case of crashes.

📌 Install PM2 (Global)
npm install -g pm2

▶️ Start Server Using PM2
pm2 start server.js --name todo-api

📊 Check Server Status
pm2 status

📜 View Logs
pm2 logs todo-api

🔄 Restart / Stop Server
pm2 restart todo-api
pm2 stop todo-api

💾 Save PM2 Process
pm2 save

⚙️ Auto-start PM2 on System Boot
pm2 startup


(Execute the command shown by PM2 after running this)

✅ PM2 Benefits

Server runs in background

Auto-restarts on crash

Works even after closing VS Code

Improves production stability

