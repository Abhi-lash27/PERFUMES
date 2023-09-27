import mongoose from "mongoose";

const OrderData = new mongoose.Schema({
        name: {type: String, required: true},
        email: { type: String, required: true },
        phno: { type: String, required: true, maxLength: 10 },
        order: { type: String, required: true }
    },
    {collection: "customer-data"}
)

const Order = new mongoose.model("Orders", OrderData)

export default Order