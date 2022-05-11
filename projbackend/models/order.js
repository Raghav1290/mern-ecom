const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product",
        count: Number,
        name: String,
        price: Number,
    },
});

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const OrderSchema = mongoose.Schema({
    products: [ProductCartSchema],
    transactionId: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);