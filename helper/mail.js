const nodemailer = require("nodemailer");
require("dotenv").config();

exports.send = (req, res) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const mailOptions = {
		from: "E-commerce < " + process.env.EMAIL + " >",
		to: req.body.email,
		subject: "E-Commerce",
		html: `<h3>Welcome to E-commerce</h3>
				<p> Hello there, ${req.body.name}! We are glad to have you on board. </p>
		`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log("Message sent: %s", info.messageId);
		res.send({
			message: "Mail sent successfully!",
		});
	});
};
