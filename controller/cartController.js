const Cart = require("../model/cart");

exports.add = (req, res) => {
	const cart = new Cart({
		id: req.body.id,
		name: req.body.name,
		price: req.body.price,
		image: req.body.image,
		category: req.body.category,
		quantity: req.body.quantity,
		userId: req.body.userId,
	});
	if (
		!cart.name ||
		!cart.price ||
		!cart.quantity ||
		!cart.category ||
		!cart.userId
	) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}
	Cart.findOne({ id: req.body.id }, (err, item) => {
		if (err) {
			return res.status(400).send({
				message: "An error while adding product to cart",
			});
		}
		if (item) {
			res.status(400).send({
				message: "Product already exists in cart",
				data: item,
			});
		} else {
			cart.save((err, cart) => {
				if (err) {
					res.status(400).send({
						status: "error",
						message: "An error while adding product to cart",
					});
				}
				res.status(200).send({
					message: "Product added to cart successfully",
					data: cart,
				});
			});
		}
	});
};

exports.update = (req, res) => {
	if (!req.body.id) {
		return res.status(400).send({
			message: "Product id is required",
		});
	}
	Cart.findOneAndUpdate(
		{ id: req.body.id },
		{ $inc: { quantity: 1 } },
		{ new: true },
		(err, cart) => {
			if (err) {
				res.status(400).send({
					status: "error",
					message: "An error while increasing quantity",
				});
			}
			if (!cart)
				return res.status(400).send({
					message: "Product not found",
				});
			res.status(200).send({
				message: "Quantity increased successfully",
				data: cart,
			});
		}
	);
};

exports.delete = (req, res) => {
	const id = req.body.id;
	if (!id) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}
	Cart.findOneAndUpdate(
		id,
		{ $inc: { quantity: -1 } },
		{ new: true },
		(err, cart) => {
			if (err) {
				res.status(400).send({
					status: "error",
					message: "An error while decreasing quantity",
				});
			}
			if (!cart)
				return res.status(400).send({
					message: "Product not found",
				});
			if (cart.quantity === 0) {
				Cart.findOneAndRemove(id, (err) => {
					if (err) {
						res.status(400).send({
							status: "error",
							message:
								"An error while deleting product from cart",
						});
					}
					res.status(200).send({
						message: "Product removed from cart successfully",
						data: null,
					});
				});
			} else {
				res.status(200).send({
					message: "Quantity decreased successfully",
					data: cart,
				});
			}
		}
	);
};

exports.get = (req, res) => {
	const userId = req.body.userId;
	if (!userId) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}
	Cart.find({ userId: userId }, (err, cart) => {
		if (err) {
			return res.status(400).send({
				message: "An error while getting cart",
			});
		}
		if (!cart)
			return res.status(400).send({
				message: "Cart not found",
			});
		res.send({
			message: "Cart retrieved successfully",
			data: cart,
		});
	});
};

exports.getAll = (req, res) => {
	Cart.find({}, (err, cart) => {
		if (err) {
			res.status(400).send({
				status: "error",
				message: "An error while getting all products",
			});
		}
		res.status(200).send({
			message: "All items fetched from cart successfully",
			data: cart,
		});
	});
};
