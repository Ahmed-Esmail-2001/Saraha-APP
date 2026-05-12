import { createNotFoundError } from "../utils/APIError.js";

export const notFound = (req, res, next) => {
    const error = createNotFoundError(`Resource Not Found - ${req.originalUrl}`);
    next(error); 
};