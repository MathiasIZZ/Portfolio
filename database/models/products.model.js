const mongoose = require('mongoose');
const schema = mongoose.Schema;


const productsSchema = schema({
    id: Number,
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    images: [],
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    short_desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});


productsSchema.post('validate', function (data, next) {

    return Products.countDocuments().exec().then( (nbindex) =>{
        data.id = nbindex + 1;
    })
});

const Products = mongoose.model('products', productsSchema);


module.exports = Products;


