import { HTTP_STATUS } from "../config/constant.js";

export class APIError extends Error {
  constructor(
    message = "Internal server error",
    statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    isOperational = true,
    stack = ""
  ) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const createBadRequestError = (message = "Bad request") => {
  return new APIError(message, HTTP_STATUS.BAD_REQUEST);
};

export const createUnauthorizedError = (message = "Unauthorized - Please login") => {
  return new APIError(message, HTTP_STATUS.UNAUTHORIZED);
};

export const createForbiddenError = (message = "Forbidden - You don't have permission") => {
  return new APIError(message, HTTP_STATUS.FORBIDDEN);
};

export const createNotFoundError = (message = "Resource not found") => {
  return new APIError(message, HTTP_STATUS.NOT_FOUND);
};

export const createConflictError = (message = "Resource already exists") => {
  return new APIError(message, HTTP_STATUS.CONFLICT);
};

export const createValidationError = (message = "Validation error") => {
  return new APIError(message, HTTP_STATUS.UNPROCESSABLE_ENTITY);
};

export const createTooManyRequestsError = (message = "Too many requests") => {
  return new APIError(message, HTTP_STATUS.TOO_MANY_REQUESTS);
};

export const createInternalError = (message = "Internal server error") => {
  return new APIError(message, HTTP_STATUS.INTERNAL_SERVER_ERROR);
};
