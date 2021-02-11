const router = require('express').Router();
const Products = require('../database/models/products.model')



router.get('/', (req, res) => {

    Products.find({})
        .exec()
        .then( products => {
            res.render('products', { products });
    })




});


module.exports = router;

