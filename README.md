# ✉️ Saraha API

> A high-performance, scalable anonymous feedback platform built with a **clean architecture mindset**.

---

## 📝 Overview

This project is a modern re-engineered version of the famous Saraha platform, designed with an **architecture-first approach**.

The goal is to provide a **secure and scalable environment** where users can receive anonymous feedback, while strictly applying software engineering principles like **Separation of Concerns (SoC)** and modular design.

---

## 🚀 Architecture & Design

The system is built around strong engineering practices:

* **Modular Architecture**
  The project is split into independent modules (`Auth`, `User`, `Message`) to improve scalability and maintainability.

* **Security First Approach**

  * Passwords are hashed using **Bcrypt** via Mongoose hooks
  * Sensitive data (e.g. phone numbers) is encrypted using **CryptoJS**

* **Absolute Anonymity**
  Messages are stored without any sender reference (**No-Sender Logic**) to guarantee full privacy at the database level.

---

## ✨ Features

* 🔐 **Authentication System**
  Secure signup & login using **JWT**

* 📨 **Anonymous Messaging**
  Send messages to any user without creating an account

* 📥 **Message Management**
  Users can view and delete received messages

* ✅ **Input Validation**
  Strong validation using **Joi** to prevent invalid or malicious data

* ⚠️ **Global Error Handling**
  Centralized error handling for consistent API responses

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB + Mongoose
* **Security:** JWT, Bcrypt, CryptoJS
* **Validation:** Joi
* **Email Service:** Nodemailer (SMTP)

---

## 📂 Project Structure

```
src/
├── config/           # Environment variables & configurations
├── DB/               # Database connection & models
├── middlewares/      # Auth, validation & error handling
├── modules/          # Core features
│   ├── auth/         # Authentication & email confirmation
│   ├── messages/     # Anonymous messaging logic
│   └── users/        # User management
├── utils/            # Helpers (errors, async handler, email templates)
└── main.js           # App entry point
```

---

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Ahmed-EsmaiL-web/saraha-api.git
cd saraha-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file and add:

```
PORT=
MONGODB_URI=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASS=
```

### 4. Run the project

```bash
npm run dev
```

---

## 🧠 Developer Notes

This project follows a clean and scalable architecture approach:

* Business logic is separated from controllers
* Middleware is used to handle cross-cutting concerns (validation, errors, security)
* Sensitive operations (like encryption) are abstracted away from core logic
* Database features like timestamps are handled automatically via Mongoose

---

## 👨‍💻 Author

**Ahmed Ismail**

---

⭐ If you found this project useful, consider giving it a star!
