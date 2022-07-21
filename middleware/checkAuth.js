const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
	const token = req.headers["access-token"];
	if (!token) {
		return res.status(401).json({
			message: "Auth failed",
		});
	}
	let decodedToken;
	try {
		decodedToken = jwt.verify(token, process.env.JWT_SECRET);
	} catch (err) {
		return res.status(401).json({
			message: "Auth failed",
		});
	}
	if (!decodedToken) {
		return res.status(401).json({
			message: "Auth failed",
		});
	}
	req.user = decodedToken.user;
	console.log("Auth successful!");
	next();
};
