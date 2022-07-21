const Product = require("../model/product");

exports.add = (req, res) => {
	const product = new Product({
		name: req.body.name,
		price: req.body.price,
		description: req.body.description,
		image: req.file.path,
		category: req.body.category,
	});
	if (
		!product.name ||
		!product.price ||
		!product.description ||
		!product.image ||
		!product.category
	) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}

	product.save((err, product) => {
		if (err) {
			res.send({
				status: "error",
				message: err.message,
			});
		}
		res.json({
			message: "Product added successfully",
			data: product,
		});
	});
};

exports.update = (req, res) => {
	if (
		!req.body.name ||
		!req.body.price ||
		!req.body.description ||
		!req.body.image ||
		!req.body.category ||
		!req.query._id
	) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}

	Product.findByIdAndUpdate(
		req.query._id,
		{
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			image: req.body.image,
			category: req.body.category,
		},
		(err, product) => {
			if (err) {
				res.send({
					status: "error",
					message: err.message,
				});
			}
			res.json({
				message: "Product updated successfully",
				data: product,
			});
		}
	);
};

exports.delete = (req, res) => {
	if (!req.query._id) {
		return res.status(400).send({
			message: "Product id is required",
		});
	}

	Product.findByIdAndUpdate(
		req.query._id,
		{
			deletedAt: new Date(),
		},
		(err, product) => {
			if (err) {
				res.send({
					status: "error",
					message: err.message,
				});
			}
			res.json({
				message: "Product deleted successfully",
			});
		}
	);
};

exports.get = (req, res) => {
	Product.find({ deletedAt: null }, (err, products) => {
		if (err) {
			res.send({
				status: "error",
				message: err.message,
			});
		}
		res.json({
			message: "Products fetched successfully",
			data: products,
		});
	});
};
