

var router = express.Router();
const { signout, signup } = require("../controllers/auth");
var express = require('express');

router.post('/signup', signup);
router.get('/signout', signout);

module.exports = router;