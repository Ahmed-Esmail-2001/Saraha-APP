import { HTTP_STATUS } from "../config/constant.js";
import { config } from "../config/env.js";

export const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    error.statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;

    // 1. Mongoose Bad ObjectId (CastError)
    if (err.name === "CastError") {
        error.statusCode = HTTP_STATUS.NOT_FOUND;
        error.message = "Resource not found";
    }

    // 2. Mongoose Duplicate Key (Unique Constraint)
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        error.statusCode = HTTP_STATUS.CONFLICT;
        error.message = `${field} already exists`;
    }

    // 3. Mongoose Validation Error
    if (err.name === "ValidationError") {
        error.statusCode = HTTP_STATUS.BAD_REQUEST;
        error.message = Object.values(err.errors).map(val => val.message).join(', ');
    }

    // Final Response Structure
    res.status(error.statusCode).json({
        success: false,
        message: error.message || "Internal Server Error",
        // Only show stack trace in development for security
        ...(config.NODE_ENV === 'development' && { stack: err.stack }),
        // Operational flag helps Frontend distinguish between expected vs unexpected errors
        isOperational: err.isOperational || false 
    });
};