const Blog = require("../model/blog");

exports.add = (req, res) => {
	const blog = new Blog({
		title: req.body.title,
		content: req.body.content,
		image: req.file.path,
		description: req.body.description,
		category: req.body.category,
		author: req.body.author,
	});
	if (
		!blog.title ||
		!blog.content ||
		!blog.image ||
		!blog.description ||
		!blog.category ||
		!blog.author
	) {
		return res.status(400).send({
			message: "All fields are required",
		});
	}

	blog.save((err, blog) => {
		if (err) {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Blog.",
			});
		} else {
			res.send({
				message: "Blog created successfully!",
				data: blog,
			});
		}
	});
};

exports.update = (req, res) => {
	if (!req.query._id) {
		return res.status(400).send({
			message: "Blog id is required",
		});
	}

	Blog.findByIdAndUpdate(
		req.query._id,
		{
			title: req.body.title,
			content: req.body.content,
			image: req.file.path,
			description: req.body.description,
			category: req.body.category,
			author: req.body.author,
			tags: req.body.tags,
		},
		{ upsert: true, new: true },
		(err, blog) => {
			if (err) {
				res.status(500).send({
					message:
						err.message ||
						"Some error occurred while updating the Blog.",
				});
			} else {
				res.send({
					message: "Blog updated successfully!",
					data: blog,
				});
			}
		}
	);
};

exports.delete = (req, res) => {
	if (!req.query._id) {
		return res.status(400).send({
			message: "Blog id is required",
		});
	}

	Blog.findByIdAndUpdate(
		req.query._id,
		{
			deletedAt: new Date(),
		},
		{ upsert: true, new: true },
		(err, blog) => {
			if (err) {
				res.status(500).send({
					message:
						err.message ||
						"Some error occurred while deleting the Blog.",
				});
			} else {
				res.send({
					message: "Blog deleted successfully!",
				});
			}
		}
	);
};

exports.get = (req, res) => {
	Blog.find({}, (err, blogs) => {
		if (err) {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving blogs.",
			});
		} else {
			res.send({
				message: "Blogs retrieved successfully!",
				data: blogs,
			});
		}
	});
};
