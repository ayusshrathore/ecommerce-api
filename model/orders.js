const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
	house: {
		type: String,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	pincode: {
		type: String,
		required: true,
	},
});

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: addressSchema,
		required: true,
	},
});

const orderSchema = new mongoose.Schema({
	productId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	amount: {
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
	user: userSchema,
	status: {
		type: String,
		required: true,
		default: "pending",
	},
	deliveredOn: {
		type: Date,
		default: null,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model("order", orderSchema, "order");
