# Node Mongo CRUD API 🔍

A simple and beginner-friendly RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
This project demonstrates basic CRUD operations (Create, Read, Update, Delete) with a clear folder structure and middleware setup.

## 🚀 Features

- Create, Read, Update, Delete (CRUD) functionality
- Express server
- MongoDB with Mongoose
- Middleware setup: body-parser, morgan, cors
- Nodemon for auto-reloading during development

---

## 📁 Project Structure
project-root/  
├── models/ # Mongoose schemas  
├── routes/ # Express routes  
├── controllers/ # Logic for each route  
├── server.js # Main server file  
├── .env # Environment variables  
└── package.json  

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/ouyniya/kickstart-nodejs-mongoDB-crud-api.git

# Go into the project directory
cd node-mongo-crud-api

# Install dependencies
npm install
```

## 🧪 Running the Server

```
# Start server in development mode (with nodemon)
npm start
```
Make sure MongoDB is running locally at mongodb://localhost:27017/crudDB or update the DB URI in .env


## 📦 Example .env file
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/crudDB
```

📡 API Endpoints

## 📡 API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | `/api/users`     | Get all users      |
| POST   | `/api/users`     | Create a new user  |
| GET    | `/api/users/:id` | Get user by ID     |
| PUT    | `/api/users/:id` | Update user by ID  |
| DELETE | `/api/users/:id` | Delete user by ID  |


## 💡 License
This project is licensed under the MIT License.


## 🙋‍♀️ Author
Made with ❤️ by ouyniya  
Feel free to reach out or fork this project!


This project was developed with inspiration and guidance from the video by **รอยไถ พัฒนา**.  Watch the original tutorial here:
https://youtu.be/2O2o44Kzy4o?feature=shared