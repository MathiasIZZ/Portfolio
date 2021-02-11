const mongoose = require('mongoose');
const Products = require('../database/models/products.model');
const Newsletter = require('../database/models/newsletter.model')




mongoose.connect('mongodb+srv://izza:admin@cluster0.iwyr4.mongodb.net/portfolio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => {
        console.log("Connexion OK");
/*
        const newProduct = new Products({
            title: "Pousse de bambou2",
            image: "image de bambou2",
            images: [],
            description: "Petites pousses de bambou toutes faîches! 1500 euros le KG",
            price: 15,
            quantity: 85,
            short_desc: "Pousses-bambou2",
            category: "Bambou2"
        });

        const news = new Newsletter({
            content: "nicolas.sarckosy@gmail.com"
        });

        news.save();

*/







    }).catch( err => console.log(err) );

