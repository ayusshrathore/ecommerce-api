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
	firstName: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	phone: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3,
		maxlength: 15,
	},
	address: addressSchema,
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	updatedAt: {
		type: Date,
		default: new Date(),
	},
	deletedAt: {
		type: Date,
		default: null,
	},
});

module.exports = mongoose.model("user", userSchema, "user");
