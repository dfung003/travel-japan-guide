const Articles = require('../../models/Article');

module.exports = {
    Index,
};

// Index Route //
async function Index(req, res) {
    try {
        const articles = await Articles.find({})
        res.status(200).json(articles)
    } catch (e) {
        res.status(400).json(e)
    }
};


// Delete //

// Update //

// Create //

// Show //