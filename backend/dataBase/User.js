const { Schema, model } = require('mongoose');
const userRole = require('../configs/user-role-enum');

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: userRole.USER,
        enum: Object.values(userRole)
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        select: false
    },
    avatar: {
        type: String
    }
}, {timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true }});

module.exports = model('user', userSchema);

