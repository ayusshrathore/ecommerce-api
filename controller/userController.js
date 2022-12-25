const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
	if (
		!req.body.firstName ||
		!req.body.lastName ||
		!req.body.email ||
		!req.body.phone ||
		!req.body.password
	) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}

	const { firstName, lastName, email, phone, password } = req.body;
	User.findOne({ email }).then((user) => {
		if (user) {
			return res.status(400).json({
				message: "User already exists",
			});
		}
		const newUser = new User({
			firstName,
			lastName,
			email,
			phone,
			password,
		});
		bcrypt.genSalt(10, (err, salt) => {
			if (err) throw err;
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser
					.save()
					.then((user) => {
						res.status(200).json({
							message: "User created successfully",
							data: user,
						});
					})
					.catch(() => {
						res.status(400).json({
							message: "User creation failed",
						});
					});
			});
		});
	});
};

exports.login = (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			message: "All fields are required",
		});
	}

	User.findOne({ email }).then((user) => {
		if (!user) {
			return res.status(400).json({
				message: "User not found",
			});
		}
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch) {
				return res.status(400).json({
					message: "Invalid credentials",
				});
			}
			const payload = {
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				phone: user.phone,
			};
			jwt.sign(
				payload,
				process.env.JWT_SECRET,
				{ expiresIn: 86400 },
				(err, token) => {
					if (err) throw err;
					res.status(200).json({
						message: "Login successful",
						token: token,
						data: user,
					});
				}
			);
		});
	});
};

exports.update = (req, res) => {
	const { firstName, lastName, email, phone } = req.body;
	if (!firstName || !lastName || !email || !phone) {
		return res.status(400).json({
			message: "All fields are required",
		});
	}
	User.findOne({ email }).then((user) => {
		if (!user) {
			return res.status(400).json({
				message: "User not found",
			});
		}
		user.firstName = firstName;
		user.lastName = lastName;
		user.email = email;
		user.phone = phone;
		user
			.save()
			.then((user) => {
				res.status(200).json({
					message: "User updated successfully",
					data: user,
				});
			})
			.catch(() => {
				res.status(400).json({
					message: "User update failed",
				});
			});
	});
};

exports.updateAddress = (req, res) => {
	const { house, street, city, state, pincode, email } = req.body;
	if (!house || !street || !city || !state || !pincode) {
		return res.status(400).json({
			message: "All fields are required",
		});
	}
	User.findOne({ email }).then((user) => {
		if (!user) {
			return res.status(400).json({
				message: "User not found",
			});
		}
		user.address = { house, street, city, state, pincode };
		user
			.save()
			.then((user) => {
				res.status(200).json({
					message: "User address updated successfully",
					data: user,
				});
			})
			.catch(() => {
				res.status(400).json({
					message: "User address update failed",
				});
			});
	});
};

exports.delete = (req, res) => {
	if (!req.query._id) {
		return res.status(400).json({
			message: "User id is required",
		});
	}

	User.findByIdAndDelete(req.query._id).then((user) => {
		if (!user) {
			return res.status(400).json({
				message: "User not found",
			});
		}
		res.status(200).json({
			message: "User deleted successfully",
		});
	});
};

exports.get = (req, res) => {
	if (!req.body.email) {
		return res.status(400).json({
			message: "User email is required",
		});
	}
	User.findOne({ email: req.body.email }).then((user) => {
		if (!user) {
			return res.status(400).json({
				message: "User not found",
			});
		}
		res.status(200).json({
			message: "User found",
			data: user,
		});
	});
};

exports.getAll = (req, res) => {
	User.find().then((users) => {
		if (!users.length) {
			return res.status(400).json({
				message: "User not found",
			});
		}
		res.status(200).json({
			message: "Users fetched successfully",
			data: users,
		});
	});
};
