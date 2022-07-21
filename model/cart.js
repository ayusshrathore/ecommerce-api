const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	productId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
	},
	category: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model("cart", cartSchema, "cart");
