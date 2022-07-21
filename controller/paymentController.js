const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET,
});

exports.create = (req, res) => {
	const { amount, currency, receipt } = req.body;
	instance.orders.create(
		{
			amount: parseInt(amount) * 100,
			currency,
			receipt,
		},
		(err, order) => {
			if (err) {
				res.status(500).json({
					message: "An error occured while creating order",
					error: err,
				});
			} else {
				res.status(200).json({
					message: "Order created successfully",
					order,
				});
			}
		}
	);
};

exports.verify = (req, res) => {
	let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

	const expectedSignature = crypto
		.createHmac("sha256", process.env.RAZORPAY_KEY)
		.update(body.toString())
		.digest("hex");
	console.log("Signature received:", req.body.razorpay_signature);
	console.log("Signature generated:", expectedSignature);
	let response = { signatureIsValid: false };
	if (expectedSignature === req.body.razorpay_signature)
		response = { signatureIsValid: true };
	res.send(response);
};
