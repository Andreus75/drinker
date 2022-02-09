const { Schema, model } = require('mongoose');
const { daysEnum } = require('../configs');

const restorationSchema = new Schema({
    name: {
        type: String,
        required:true,
        trim: true
    },
    persons: {
        type: Number,
        default: 0,
        required: true,
        trim: true
    },
    average_check: {
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
    start_day_work: {
        type: String,
        required: true,
        enum: Object.values(daysEnum)
    },
    end_day_work: {
        type: String,
        required: true,
        enum: Object.values(daysEnum)
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
    },
    weekend: {
        type: String,
        required: true,
        enum: Object.values(daysEnum)
    },
    photo: {
        type: String
    },
    moderation_admin: {
        type: Boolean,
        default: false,
        required: true,
        trim: true
    },
    address_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'address'
    },
    contact_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'contact'
    },
    user_id: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'user'
    },
    review_id: {
        type: Schema.Types.ObjectId,
        ref: 'review'
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

module.exports = model('restoration', restorationSchema);

