// Imports
import express from "express";
import { config } from "./config/env.js";
import connectDB from "./DB/connection.js";
import { notFound } from "./middlewares/notFound.middleware.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const bootstrap = async () => {
  // Initialize Express app
  const app = express();
  // Connect to the database
  await connectDB();

  // Middleware
  app.use(express.json());
  // Router handler
  // Import and use routes
  app.get("/", (req, res) => {
    res.send("Welcome to the Saraha API!");
  });
  // app.use("/api/v1/auth", authRoutes);
  // app.use("/api/v1/users", userRoutes);
  // app.use("/api/v1/messages", messageRoutes);
  // Not Found Middleware (for unmatched routes)
  app.use(notFound);
  // Global Error Handler
  app.use(errorHandler);
  // Start the server
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
};
export default bootstrap;
