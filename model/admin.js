const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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

module.exports = mongoose.model("admin", adminSchema, "admin");
