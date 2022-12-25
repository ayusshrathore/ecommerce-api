const Admin = require("../model/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
	if (!req.body.name || !req.body.email || !req.body.password) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}

	const { name, email, password } = req.body;
	Admin.findOne({ email }).then((user) => {
		if (user) {
			return res.status(400).json({
				message: "Admin already exists",
			});
		}
		const newUser = new Admin({
			name,
			email,
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
							message: "Admin created successfully",
							data: user,
						});
					})
					.catch((err) => {
						console.log(err);
						res.status(400).json({
							message: "Admin creation failed",
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

	Admin.findOne({ email }).then((user) => {
		if (!user) {
			return res.status(400).json({
				message: "Admin not found",
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
				name: user.name,
				email: user.email,
				isAdmin: true,
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

exports.delete = (req, res) => {
	if (!req.query._id) {
		return res.status(400).json({
			message: "Admin id is required",
		});
	}

	Admin.findByIdAndDelete(req.query._id).then((user) => {
		if (!user) {
			return res.status(400).json({
				message: "Admin not found",
			});
		}
		res.status(200).json({
			message: "Admin deleted successfully",
		});
	});
};

exports.get = (req, res) => {
	Admin.find().then((users) => {
		if (!users.length) {
			return res.status(400).json({
				message: "Admin not found",
			});
		}
		res.status(200).json({
			message: "Admins fetched successfully",
			data: users,
		});
	});
};
