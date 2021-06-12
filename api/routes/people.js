const express = require('express');
const router = express.Router();
const people = require('../controllers/people');

router.get('/',people.getData)

exports.router = router;