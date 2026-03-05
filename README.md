# Student Management System (StudentMS)

A straightforward full-stack web application designed for managing student records. This project provides seamless operations for adding, viewing, and removing students using a customized MERN (MongoDB, Express, React, Node.js) stack architecture.

## Features

- **Add Students:** Register new students with their details into the system.
- **View Students:** Display a full list of all current registered students.
- **Delete Students:** Seamlessly remove student entries from the database.
- **Modern UI:** Built with React, providing a dynamic and responsive user experience.
- **RESTful API:** Node.js & Express backend connecting to a MongoDB database.

## Tech Stack

- **Frontend:** React (bootstrapped with Create React App)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose for Object Data Modeling)

## Folder Structure

- `/frontend` - Contains the React app and all user interface components.
- `/models` - Defines the Mongoose schemas (e.g., `Student` schema).
- `server.js` - The main Express application that sets up the server and API endpoints.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) cluster URI or local instance

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd StudentMS
   ```

2. **Backend Setup**
   ```bash
   # Install backend dependencies
   npm install

   # Start the Express server
   npm start
   ```
   *The backend server will start on `http://localhost:5001`.*

3. **Frontend Setup**
   Open a new terminal window/tab:
   ```bash
   cd frontend

   # Install frontend dependencies
   npm install

   # Start the React development server
   npm start
   ```
   *The React app will open automatically on `http://localhost:3000`.*

## API Endpoints

- `GET /` - Root endpoint to check if the backend is running.
- `GET /students` - Fetches all students from the database.
- `POST /students` - Adds a new student to the database.
- `DELETE /students/:id` - Deletes a specific student using their unique ID.

## Contributing

Contributions, issues, and feature requests are welcome! 
If you want to contribute:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
