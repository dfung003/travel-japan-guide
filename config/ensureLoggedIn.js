module.exports = function (req, res, next) {
    console.log('ensureLoggedIn')
    if (!req.user) return res.status(401).json('Unauthorized');
    next();
};