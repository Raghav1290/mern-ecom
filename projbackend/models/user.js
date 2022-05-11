import mongoose from 'mongoose';
const { createHmac } = await import('crypto');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 32,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        maxlength: 32,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    userinfo: {
        type: String,
        trim: true
    },
    encyp_password: {
        type: String,
        required: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    purchases: {
        type: Array,
        default: [],
    },
}, { timestamps: true });

userSchema.virtual("password").set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encyp_password = this.securePassword(password);
}).get();

userSchema.methods = {

    authenticate: function (plainPassword) {
        return this.securePassword(plainPassword === this.encyp_password);
    },

    securePassword: function (plainPassword) {
        if (!plainPassword) return "";

        try {

            return createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest('hex');
        } catch (err) {
            return "";
        }
    }
}

module.exports = mongoose.Schema("User", userSchema);