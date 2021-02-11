const express = require('express')
const router = express.Router();
const projects = require('./projects');
const products = require('./products');
const newsletter = require('./newsletter')


router.use('/projects', projects);
router.use('/products', products);
router.use('/newsletter', newsletter)




module.exports = router;
