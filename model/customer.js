const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
	name: {
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
		maxlength: 10,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model("customer", customerSchema, "customer");
