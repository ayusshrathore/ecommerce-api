const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	price: {
		type: Number,
		required: true,
		trim: true,
		min: 0,
	},
	image: {
		type: String,
		// required: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	category: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	mimeType: {
		type: String,
	},
	tags: {
		type: [String],
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

module.exports = mongoose.model("product", productSchema, "product");
