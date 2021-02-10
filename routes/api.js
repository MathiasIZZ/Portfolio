const express = require('express')
const router = express.Router();
const projects = require('./projects');
const products = require('./products');


router.use('/projects', projects);
router.use('/products', products);




module.exports = router;
