import OrderModel from "../model/order.model.js";

export const newOrder = async (req, res, next) => {
    console.log(req.body)
    try {
        const details = await OrderModel.create({
            name: req.body.name,
            phno: req.body.phno,
            email: req.body.email,
            order: req.body.order
        })
    } catch (err) {
        console.log(err)
    }
}