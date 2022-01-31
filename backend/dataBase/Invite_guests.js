const { Schema, model} = require('mongoose');

const inviteGuestsSchema = new Schema({
    days: {
        type: String,
        required: true,
        trim: true
    },
    start_hour: {
        type: String,
        required: true,
        trim: true
    },
    end_hour: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

module.exports = model('invite_guests', inviteGuestsSchema);
