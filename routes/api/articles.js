const express = require('express');
const router = express.Router();
const Article = require('../../models/Article');
const Comment = require('../../models/Comment');
const check = require('../../config/ensureLoggedIn');


// Index Route

router.get("/", (req, res) => {

    Article.find({}, (err, foundArticles) => {
        if (!err) {
            res.status(200).json(foundArticles)
        } else {
            res.status(400).json(err)
        }
    })
})

// Create Route

router.post("/", (req, res) => {
    const { body } = req

    Article.create(body, (err, createdArticle) => {
        if (!err) {
            res.status(200).json({ message: "All good!", createdArticle: createdArticle })
        } else {
            res.status(400).json(err)
        }
    })
})

// Update Route

router.put("/:id", (req, res) => {
    const { body } = req

    Article.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedArticle) => {
        if (!err) {
            res.status(200).json(updatedArticle)
        } else {
            res.status(400).json(err)
        }
    })
})

// Delete Route

router.delete("/:id", (req, res) => {

    Article.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "deleted article" })
        } else {
            res.status(400).json(err)
        }
    })
})

// Post Route

router.post("/:id/comments/", check, async (req, res) => {

    try {
        const { body } = req
        const { id } = req.params
        const article = await Article.findById(id)
        const comment = new Comment(body)
        comment.user = req.user_id
        comment.save()
        article.comments.push(comment._id)
        article.save()
        res.status(200).json({ message: "message saved" });
    } catch (err) {
        res.status(400).json(err)
    }
})

// Show Route

router.get('/:id', async (req, res) => {
    try {
        const query = await Article.findById(req.params.id).populate({
            path: "comments",
            populate: {
                path: "userId",
                model: "User"
            }
        })
        res.status(200).json({ message: "All Good!", query })
    } catch (e) {
        res.status(400).json({ err: e })
    }
    
    // query.exec((err, foundArticle) => {
    //     if (!err) {
    //         res.status(200).json({ message: "All Good!", foundArticle })
    //     } else {
    //         res.status(400).json({ err: error.message })
    //     }
    // })
})





module.exports = router;