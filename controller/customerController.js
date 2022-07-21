const Customer = require("../model/customer");

exports.add = (req, res) => {
	const customer = new Customer({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
	});
	if (!customer.name || !customer.email || !customer.phone) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}

	Customer.findOne({
		$or: [{ email: customer.email }, { phone: customer.phone }],
	})
		.then((existingCustomer) => {
			if (existingCustomer) {
				res.status(400).send({
					message: "Customer already exists",
				});
			} else {
				customer.save((err, customer) => {
					if (err) {
						res.status(500).send({
							message:
								err.message ||
								"Some error occurred while creating the Customer.",
						});
					} else {
						res.send({
							message: "Customer created successfully!",
							data: customer,
						});
					}
				});
			}
		})
		.catch(() => {
			res.status(500).send({
				message: "Error processing request",
			});
		});
};

exports.get = (req, res) => {
	Customer.find({}, (err, customers) => {
		if (err) {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving customers.",
			});
		} else {
			res.send({
				message: "Customers retrieved successfully!",
				data: customers,
			});
		}
	});
};
