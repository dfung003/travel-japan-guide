const express = require('express');
const router = express.Router();
const Article = require('../../models/Article');


// Index Route //
router.get('/', (req, res) => {
    Article.find({}, (err, foundArticles) => {
        if (!err) {
            res.status(200).json(foundArticles)
        } else {
            res.status(400).json(err)
        };
    });
});

// Table Route - List Page //
router.get('/table', (req, res) => {
    Article.find({}, (err, foundArticles) => {
        if (!err) {
            const formattedData = foundArticles.reduce((acc, item) => {
                acc[item.name] = acc[item.name] ? [...acc[item.name], item] : [item]
                return acc
            }, {})
            res.status(200).json(formattedData)
        } else {
            res.status(400).json(err)
        };
    });
});

module.exports = router;