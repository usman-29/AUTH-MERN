# MERN Stack Authentication System

This project demonstrates the creation of a complete MERN (MongoDB, Express, React, Node.js) stack authentication system with several key features.

## Features

- **User Registration**: Users can create accounts by providing their name, email, and password.
- **User Login**: Registered users can log in to their accounts using their email and password.
- **User Logout**: Users can securely log out of their accounts.
- **Email Verification**: Upon registration, users receive an email containing a verification link. Clicking this link verifies their email address.
- **Password Reset**: Users can request a password reset by entering their email address. They will receive an email with an OTP to reset their password.

---

## Packages Used

### Backend (Server)

- **Express.js**: For creating the web server and handling API requests.
- **cors**: Enables Cross-Origin Resource Sharing (CORS) for communication between the frontend and backend.
- **dotenv**: Manages environment variables securely.
- **nodemon**: Automatically restarts the server on code changes.
- **jsonwebtoken**: Generates and verifies JSON Web Tokens (JWTs) for authentication.
- **mongoose**: Interacts with the MongoDB database.
- **bcrypt.js**: Hashes and compares passwords securely.
- **nodemailer**: Sends emails for verification and password reset.
- **cookie-parser**: Handles cookies for storing session information.

### Frontend (Client)

- **React**: Builds the user interface.
- **axios**: Makes HTTP requests to the backend API.
- **react-router-dom**: Handles routing and navigation within the application.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-auth-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd AUTH-MERN
   ```

3. Install dependencies:

   - For the backend:
     ```bash
     cd backend
     npm install
     ```

   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

4. Configure environment variables:

   - Create a `.env` file in the `backend` folder with the following:
     ```env
     MONGODB_URL=''
     JWT_SECRET=''
     NODE_ENV='development'
     SMTP_USER=''
     SMTP_PASSWORD=''
     SENDER_EMAIL=''
     ```

5. Start the development servers:

   - For the backend:
     ```bash
     cd backend
     npm start
     # Or use
     node server.js
     ```

   - For the frontend:
     ```bash
     cd frontend
     npm run dev
     ```

6. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## Folder Structure

```
AUTH-MERN/
│
├── server/        # Express.js server code
│   ├── config/     # Configuration files
│   ├── middleware/ # Middleware functions
│   ├── models/     # MongoDB models
│   ├── controllers/ # API controllers
│   └── routes/     # API routes
│
├── client/src/       # React client code
│   ├── assets/     # Static assets like images, CSS
│   ├── components/ # Reusable UI components
│   ├── pages/      # Application pages
│   ├── context/    # Context API for state management
│
└── README.md       # Project documentation
```

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

---

## Acknowledgments

- Thanks to the developers of the tools and libraries used in this project.
