const express = require('express');
const router = express.Router();
const Article = require('../../models/Article');


// Index Route

router.get("/", (req, res) => {
    // try {
    //     const articles = await Article.find({})
    //     res.status(200).json(articles)
    // } catch (err) {
    //     res.status(400).json(err)
    // }
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
    // try {
    //     const id = await req.params.id
    //     const article = await Article.findByIdAndDelete(id, (err) => {
    //         if (err) res.status(400).json(err)
    //     })
    // } catch (err) {
    //     res.status(400).json(err)
    // }
    Article.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "deleted article" })
        } else {
            res.status(400).json(err)
        }
    })
})

// Show Route

router.get("/:id", (req, res) => {
    // try {
    //     const id = await req.params.id
    //     const article = await Article.findById(id)
    //     res.status(200).json(article)
    // } catch (err) {
    //     res.status(400).json(err)
    // }
    Article.findById(req.params.id, (err, foundArticle))
    if (!err) {
        res.status(200).json(foundArticle)
    } else {
        res.status(400).json(err)
    }
})





module.exports = router;