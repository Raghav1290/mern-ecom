const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;
const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 25,
    },
    desc: {
        type: String,
        trim: true,
        required: true,
        maxLength: 2000,
    },

    price: {
        type: Number,
        trim: true,
        required: true,
        maxLength: 25,
    },

    category: {
        id: objectId,
        ref: "Category",
        required: true
    },

    stock: {
        type: Number,
    },

    sold: {
        type: Number,
        default: 0,
    },
    photo: {
        data: Buffer,
        contentType: String,
    }
}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema);