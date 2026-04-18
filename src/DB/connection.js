import mongoose from "mongoose";
import {config} from '../config/env.js'
export const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI || 'mongodb://localhost:27017/sarahadb');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export default connectDB;