const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/api/articles');


// Index Route

router.get('/', articlesCtrl.Index);






module.exports = router;