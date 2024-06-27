# 🔗 URL Shortener Project 
![Screenshot from 2024-06-12 09-38-59](https://github.com/SomuSingh11/Url-Shortener/assets/170082343/f8d393fc-a349-4807-89b2-2a3187349e7c)


# 🌐 Demo:
### 🔐 Signup, Login and Shortening URL
https://github.com/SomuSingh11/Url-Shortener/assets/170082343/8e45c15a-dd9d-4c3d-a5fe-1ee1a03080d1

### 🔒 Authentication
https://github.com/SomuSingh11/Url-Shortener/assets/170082343/4b720142-4c9c-439f-8766-96f7be892145

### ✅ Authorization
https://github.com/SomuSingh11/Url-Shortener/assets/170082343/88610506-70ae-4c96-ab43-5669ca06766d

### 📊 Admin Dashboard
https://github.com/SomuSingh11/Url-Shortener/assets/170082343/377caf08-f0ab-4a5e-86af-e94cb302a577


## 📄 Overview:
  - The URL Shortener project is a web application designed to shorten long URLs into more manageable links. 
  - It also tracks the number of clicks and provides analytics on URL visits.
  - This project is built using Node.js, Express.js, MongoDB, and EJS.

## ✨ Features:
 - Create Short URLs: Users can input a long URL and receive a shortened version.
 - Redirect to Original URL: Shortened URLs redirect to their original long URLs, logging each visit.
 - Track Clicks and Analytics: The app tracks each click, recording the timestamp and updating the total click count.
 - View Analytics: Users can view detailed analytics for each short URL, including total clicks and visit history.
 - User Authentication: Secure user registration and login using JWT.
 - User Authorization: Ensure users can only access their own URLs and analytics.

## 💻 Tech Stack:
- **Frontend:** EJS (Embedded JavaScript)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Libraries:** shortid, dotenv, bcrypt, jsonwebtoken, cookie-parser

## 📂Project Structure 
```sh
url-shortener/
├── controllers/
│   ├── userController.js
│   └── urlController.js
├── middlewares/
│   └── jwtAuthMiddleware.js
├── models/
│   ├── User.js
│   └── ShortUrl.js
├── routes/
│   ├── userRoutes.js
│   └── urlRoutes.js
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── register.ejs
├── public/
│   ├── css/
│   │   └── style.css
├── .env
├── app.js
├── package.json
└── README.md
```


## ⚙️ Working: 
1. Main Application (index.js)
    - Setup: Loads environment variables, initializes Express, connects to MongoDB, and sets up middleware.
    - View Engine: Configures EJS for templating.
    - Routes: Defines routes for URL operations, static content, and user authentication.
    - Server: Starts the server on a specified port.

2. URL Model (model/url.js)
    - Schema Definition: Defines the structure of the URL documents in MongoDB, including the original URL, short ID, total clicks, and visit history.
    - Default Values: Uses shortid to generate unique short IDs and sets default values for total clicks.

3. URL Controller (controller/url.js)
    - Generate Short URL: Handles the creation of new short URLs, storing them in the database and returning the result.
    - Redirect to Original URL: Handles redirection to the original URL, logging the visit and updating click counts.
    - Get Analytics: Provides analytics data for a given short URL, including total clicks and visit history.

4. User Model (model/user.js)
    - Schema Definition: Defines the structure of the user documents in MongoDB, including username, email, and hashed password.
    - Password Hashing: Uses bcrypt to hash passwords before saving them to the database.

5. User Controller (controller/user.js)
    - Register User: Handles user registration, including hashing the password and saving the user to the database.
    - Login User: Handles user login, including verifying the password and generating a JWT.

6. Authentication Middleware (middlewares/jwtAuthMiddleware.js)
    - Verify JWT: Middleware to verify the JWT from cookies and attach the user information to the request object.

7. Routes (routes/url.js)
    - POST /url: Endpoint for generating new short URLs (authenticated).
    - GET /:shortId: Endpoint for redirecting to the original URL.
    - GET /analytics/:shortId: Endpoint for retrieving analytics for a short URL (authenticated).

8. User Routes (routes/user.js)
    - POST /register: Endpoint for user registration.
    - POST /login: Endpoint for user login.

9. Static Routes (routes/staticRouter.js)
    - GET /: Endpoint for rendering the home page with all URLs (authenticated).

## 🔒 Authentication and Authorization

1. User Registration
      - Endpoint: `POST /user/register`
      - Users can create a new account by providing a username, email, and password. Passwords are hashed before storage.

2. User Login
     - Endpoint: `POST /user/login`
     - Users can log in using their email and password. On successful login, a JWT is generated and stored in a cookie.

3. JWT Authentication Middleware
     - Middleware checks for the JWT token in cookies, verifies it, and attaches the user information to the request object.
     - Used to protect routes and ensure only authenticated users can access certain endpoints.

4. Authorization
     - Users can only access their own shortened URLs and analytics.
     - Middleware ensures that each request is authenticated and the user can only see or modify their own data.

## 📦 Installation

1. Clone the Repository
```sh
  https://github.com/SomuSingh11/Url-Shortener.git
```
    
2. Install Dependencies
```sh
  npm install
```

3. Set Up Environment Variables
```sh
// Create a .env file in the root directory and Add your MongoDB URL:
  MONGODB_URL=your_mongodb_connection_string
```
4. Start the Server
```sh
  npm start
```
5. Access the Application
```sh
  Open your browser and go to http://localhost:3000.
```

### 🔗 Connect with ME :
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/somusingh11)



