const Orders = require("../model/orders");

exports.create = (req, res) => {
	const order = new Orders({
		productId: req.body.productId,
		name: req.body.name,
		amount: req.body.amount,
		image: req.body.image,
		category: req.body.category,
		quantity: req.body.quantity,
		user: req.body.user,
		status: req.body.status,
	});
	Orders.findOne({ _id: req.body.orderId })
		.then((data) => {
			if (data) {
				res.status(200).json({
					message: "Order already exists",
				});
			} else {
				order
					.save()
					.then((data) => {
						res.send({
							message: "Order created successfully",
							data: data,
						});
					})
					.catch(() => {
						res.status(500).send({
							message:
								"Some error occurred while creating the Order.",
						});
					});
			}
		})
		.catch(() => {
			res.status(500).send({
				message: "Some error occurred while creating the Order.",
			});
		});
};

exports.cancel = (req, res) => {
	Orders.findByIdAndUpdate(
		req.body.orderId,
		{
			status: "cancelled",
		},
		{ new: true }
	)
		.then((data) => {
			res.send({
				message: "Order cancelled successfully",
				data: data,
			});
		})
		.catch(() => {
			res.status(500).send({
				message: "Some error occurred while cancelling the Order.",
			});
		});
};

exports.get = (req, res) => {
	const { email } = req.body;
	Orders.find({ user: { email: email } })
		.then((data) => {
			res.send({
				message: "Orders fetched successfully",
				data: data,
			});
		})
		.catch(() => {
			res.status(500).send({
				message: "Some error occurred while fetching the Orders.",
			});
		});
};
