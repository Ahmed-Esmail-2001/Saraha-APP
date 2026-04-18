✉️ Saraha API (صراحة)

A RESTful API clone of the popular anonymous messaging platform "Saraha". This backend service allows users to register, share their unique profile links, and receive anonymous, constructive feedback from others.

Built with a strong focus on security, data validation, and a scalable modular architecture.

✨ Key Features

Secure Authentication: User registration and login powered by JWT (JSON Web Tokens) and password hashing via Bcrypt.

Anonymous Messaging: Anyone can send a message to a registered user without needing an account.

Message Management: Registered users can view and delete the anonymous messages they receive.

Input Validation: Strict data validation using Joi to prevent malicious payloads and ensure data integrity.

Error Handling: Centralized global error handling to ensure consistent and informative API responses.

🛠️ Tech Stack

Runtime Environment: Node.js

Web Framework: Express.js

Database: MongoDB

ODM: Mongoose

Security & Auth: JSON Web Tokens (JWT), Bcrypt, Express-Mongo-Sanitize, CORS

Validation: Joi

📂 Project Architecture (Modular Pattern)

The project is structured using a Feature-Driven Modular Architecture to keep the codebase clean, maintainable, and highly scalable.

src/
├── DB/               # Database connection and Mongoose Models (User, Message)
├── middlewares/      # Global guards (Auth, Validation, Error Handling)
├── modules/          # Core Business Logic
│   ├── auth/         # Registration and Login logic
│   ├── messages/     # Sending, reading, and deleting messages
│   └── users/        # User profile management
├── utils/            # Helper functions (AsyncHandler, AppError)
└── main.js           # Express App entry point


🚀 Getting Started

Prerequisites

Make sure you have Node.js and MongoDB installed on your machine.

1. Clone the repository

git clone [https://github.com/yourusername/saraha-api.git](https://github.com/yourusername/saraha-api.git)
cd saraha-api


2. Install Dependencies

npm install


3. Environment Variables

Create a .env file in the root directory and configure the following variables:

PORT=3000
DATABASE_URI=mongodb://127.0.0.1:27017/saraha
JWT_SECRET=your_super_secret_jwt_signature
SALT_ROUNDS=8


4. Run the Server

# For development
npm run dev

# For production
npm start


📡 Core API Endpoints

Authentication (/api/auth)

POST /api/auth/register - Register a new user account.

POST /api/auth/login - Authenticate a user and return a JWT.

Messages (/api/messages)

POST /api/messages/:receiverId - Send an anonymous message to a specific user. (No auth required)

GET /api/messages - Get all messages for the logged-in user. (Requires Auth)

DELETE /api/messages/:messageId - Delete a specific message. (Requires Auth)

Users (/api/users)

GET /api/users/profile - View the logged-in user's profile details. (Requires Auth)

GET /api/users/:id - Fetch basic public info of a user to display on their messaging page.

🤝 Contributing

Contributions are welcome! If you have suggestions or find a bug, please open an issue or submit a pull request.

📝 License

This project is open-source and available under the MIT License.