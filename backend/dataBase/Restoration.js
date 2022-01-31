const { Schema, model } = require('mongoose');

const restorationSchema = new Schema({
    name: {
        type: String,
        required:true,
        trim: true
    },
    number_person: {
        type: Number,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        default: 0,
        required: true,
        trim: true
    },
    view_statistics: {
        type: Number,
        default: 0,
        required: true,
        trim: true
    },
    photo: {
        type: String
    },
    contact_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'address'
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    response_id: {
        type: Schema.Types.ObjectId,
        ref: 'review'
    },
    invite_guests_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'invite_guests'
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

module.exports = model('restoration', restorationSchema);

