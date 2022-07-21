const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	content: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
	},
	image: {
		type: String,
	},
	mimeType: {
		type: String,
	},
	description: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
	},
	category: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
	tags: {
		type: [String],
	},
	author: {
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

module.exports = mongoose.model("blog", blogSchema, "blog");
