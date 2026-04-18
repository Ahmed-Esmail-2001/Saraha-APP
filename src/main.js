// Imports
import express from "express";
import { config } from "./config/env.js";

const bootstrap = async () => {
  // Initialize Express app
  const app = express();
  // Middleware
  app.use(express.json());
  // Router handler
  app.get("/", (req, res) => {
    res.send("Welcome to the Saraha API!");
  });
  // Start the server
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
};
export default bootstrap;
