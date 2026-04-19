// src/DB/models/message.model.js
import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true // We add an index here because we will frequently search for messages by receiver ID!
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 500
    }
}, 
// Automatically handles createdAt and updatedAt
{ timestamps: true } 
);

messageSchema.index({ receiver: 1, createdAt: -1 });

export const Message = model("Message", messageSchema);