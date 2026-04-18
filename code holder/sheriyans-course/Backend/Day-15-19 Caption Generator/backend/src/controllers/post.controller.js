const postModel = require('../model/post.model')
const generateCaption = require('../service/ai.service')
const uploadFile = require('../service/storage.service')
const { v4: uuidv4 } = require('uuid')

async function createPostController(req, res) {
    try {
        const file = req.file
        console.log("File Received:", file)

        const base64Image = new Buffer.from(file.buffer).toString('base64')

        const caption = await generateCaption(base64Image)
        const result = await uploadFile(file.buffer, `${uuidv4()}`);
        console.log("Caption:", JSON.stringify(response, null, 2));

        const post = await postModel.create({
            caption,
            image: result.url,
            user: req.user._id
        })
        res.status(201).json({
            message: "post created successfully",
            post
        })
    } catch (err) {
        console.error("Error creating post:", err);
        res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }
}

module.exports = { createPostController, };