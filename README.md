
# 🔗 URL Shortener Project 
![Screenshot from 2024-06-12 09-38-59](https://github.com/SomuSingh11/Url-Shortener/assets/170082343/f8d393fc-a349-4807-89b2-2a3187349e7c)

## 📄 Overview:
  - The URL Shortener project is a web application designed to shorten long URLs into more manageable links. 
  - It also tracks the number of clicks and provides analytics on URL visits.
  - This project is built using Node.js, Express.js, MongoDB, and EJS.

## ✨ Features:
 - Create Short URLs: Users can input a long URL and receive a shortened version
 - Redirect to Original URL: Shortened URLs redirect to their original long URLs, logging each visit.
 - Track Clicks and Analytics: The app tracks each click, recording the timestamp and updating the total click count.
 - View Analytics: Users can view detailed analytics for each short URL, including total clicks and visit history.

## 💻 Tech Stack:
- **Frontend:** EJS (Embedded JavaScript)
- **Backend:** Node, Express
- **Database:** MongoDB
- **Libraries:** shortid, dotenv

## ⚙️ Working: 
1. Main Application (index.js)
    - Setup: Loads environment variables, initializes Express, connects to MongoDB, and sets up middleware.
    - View Engine: Configures EJS for templating.
    - Routes: Defines routes for URL operations and static content.
    - Server: Starts the server on a specified port.

2. URL Model (model/url.js)
    - Schema Definition: Defines the structure of the URL documents in MongoDB, including the original URL, short ID, total clicks, and visit history.
    - Default Values: Uses shortid to generate unique short IDs and sets default values for total clicks.

3. URL Controller (controller/url.js)
    - Generate Short URL: Handles the creation of new short URLs, storing them in the database and returning the result.
    - Redirect to Original URL: Handles redirection to the original URL, logging the visit and updating click counts.
    - Get Analytics: Provides analytics data for a given short URL, including total clicks and visit history.

4. Routes (routes/url.js)
    - POST /url: Endpoint for generating new short URLs.
    - GET /:shortId: Endpoint for redirecting to the original URL.
    - GET /analytics/:shortId: Endpoint for retrieving analytics for a short URL

5. Static Routes (routes/staticRouter.js)
    - GET / Endpoint for rendering the home page with all URLs.


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
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/somusingh11)


