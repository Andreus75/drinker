const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    rating: {
        type: String,
        default: 0,
        required: true,
        trim: true
    },
    text: {
        type: String,
        trim: true
    },
    check: {
        type: Number,
        trim: true
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

module.exports = model('review', reviewSchema);
