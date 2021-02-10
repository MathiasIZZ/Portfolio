const mongoose = require('mongoose');
const Products = require('../database/models/products.model')


mongoose.connect('mongodb+srv://izza:admin@cluster0.iwyr4.mongodb.net/portfolio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => {
        console.log("Connexion OK");

        const newProduct = new Products({
            title: "Pousse de bambou",
            image: "image de bambou",
            images: [],
            description: "  Petites pousses de bambou toutes faîches! 15 euros le KG",
            price: 15,
            quantity: 85,
            short_desc: "Pousses-bambou",
            category: "Bambou"
        });










    }).catch( err => console.log(err) );

