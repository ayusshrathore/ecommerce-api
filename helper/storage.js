const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images/");
	},
	filename: (req, file, cb) => {
		console.log(file);
		let filetype = "";
		if (file.mimetype === "image/png") {
			filetype = "png";
		}
		if (file.mimetype === "image/jpeg") {
			filetype = "jpg";
		}
		const fileName = file.originalname.split(".")[0];
		cb(null, `${fileName}.${filetype}`);
	},
});

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: (req, file, cb) => {
		if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error("Only .png or .jpg format allowed!"));
		}
	},
});

module.exports = upload;
