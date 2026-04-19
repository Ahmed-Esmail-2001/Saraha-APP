// src/DB/models/user.model.js
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";
import { USER_ROLES, GENDER } from "../../config/constant.js";
import { config } from "../../config/env.js";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,  
        maxlength: 30,
        trim: true // Removes extra spaces before saving
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Converts email to lowercase before saving
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'] // Basic email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select : false // By default, do not return password in queries
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: Object.values(GENDER), // Dynamically extracts ['male', 'female'] from constant.js
        required: true
    },
    role: {
        type: String,
        enum: Object.values(USER_ROLES), // Dynamically extracts ['user', 'admin']
        default: USER_ROLES.USER
    },
    isActivated: {
        type: Boolean,
        default: false
    }
}, { timestamps: true } );

userSchema.index({ email: 1 }, { unique: true });

// ==========================================
// Mongoose Document Middleware (Hooks)
// ==========================================
userSchema.pre('save', async function (next) {
    // 1. Encrypt Phone Number (Only if it was modified or newly created)
    if (this.isModified('phone')) {
        if (!config.PHONE_SECRET_KEY) {
            return next(new Error('PHONE_SECRET_KEY is required to encrypt phone data'));
        }
        this.phone = CryptoJS.AES.encrypt(this.phone, config.PHONE_SECRET_KEY).toString();
    }

    // 2. Hash Password (Only if it was modified or newly created)
    if (this.isModified('password')) {
        const salt = Number(config.SALT_ROUNDS);
        if (!Number.isInteger(salt) || salt < 4) {
            return next(new Error('SALT_ROUNDS must be an integer >= 4'));
        }
        this.password = await bcrypt.hash(this.password, salt);
    }

    next(); // Move to the next middleware or save to DB
});

export const User = model("User", userSchema);