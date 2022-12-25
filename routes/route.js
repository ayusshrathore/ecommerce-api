const express = require("express");
const router = express();

const adminController = require("../controller/adminController");
const userController = require("../controller/userController");
const productController = require("../controller/productController");
const blogController = require("../controller/blogController");
const customerController = require("../controller/customerController");
const cartController = require("../controller/cartController");
const orderController = require("../controller/orderController");
const paymentController = require("../controller/paymentController");

const mail = require("../helper/mail");
const upload = require("../helper/storage");
const checkAuth = require("../middleware/checkAuth");

// Home route
router.get("/", (req, res) => {
	res.send("Server is up and running...");
});

// Admin routes
router.post("/api/v1/admin/register", adminController.register);
router.post("/api/v1/admin/login", adminController.login);
router.post("/api/v1/admin/delete", checkAuth, adminController.delete);
router.get("/api/v1/admin", checkAuth, adminController.get);

// User routes
router.post("/api/v1/user/register", userController.register);
router.post("/api/v1/user/login", userController.login);
router.post("/api/v1/user/update", checkAuth, userController.update);
router.post(
	"/api/v1/user/update/address",
	checkAuth,
	userController.updateAddress
);
router.post("/api/v1/user/delete", checkAuth, userController.delete);
router.get("/api/v1/user", checkAuth, userController.get);
router.get("/api/v1/user/list", checkAuth, userController.getAll);

// Product routes
router.post(
	"/api/v1/product/add",
	checkAuth,
	upload.single("image"),
	productController.add
);
router.post(
	"/api/v1/product/update",
	checkAuth,
	upload.single("image"),
	productController.update
);
router.post("/api/v1/product/delete", checkAuth, productController.delete);
router.get("/api/v1/product", productController.get);

// Blog routes
router.post(
	"/api/v1/blog/add",
	checkAuth,
	upload.single("image"),
	blogController.add
);
router.post(
	"/api/v1/blog/update",
	checkAuth,
	upload.single("image"),
	blogController.update
);
router.post("/api/v1/blog/delete", checkAuth, blogController.delete);
router.get("/api/v1/blog", blogController.get);

// Customer routes
router.post("/api/v1/customer/add", customerController.add);
router.get("/api/v1/customer", customerController.get);

// Mail routes
router.post("/api/v1/mail/send", mail.send);

// Cart routes
router.post("/api/v1/cart/add", checkAuth, cartController.add);
router.post("/api/v1/cart/update", checkAuth, cartController.update);
router.post("/api/v1/cart/delete", checkAuth, cartController.delete);
router.get("/api/v1/cart", checkAuth, cartController.get);
router.get("/api/v1/cart/list", checkAuth, cartController.getAll);

// Order routes
router.post("/api/v1/order/create", checkAuth, orderController.create);
router.post("/api/v1/order/cancel", checkAuth, orderController.cancel);
router.get("/api/v1/order", checkAuth, orderController.get);

// Payment routes
router.post("/api/v1/payment/create", checkAuth, paymentController.create);
router.post("/api/v1/payment/verify", checkAuth, paymentController.verify);

// Check authentication
router.post("/api/v1/auth", checkAuth, (req, res) => {
	res.send({
		message: "Authentication successful!",
	});
});

module.exports = router;
