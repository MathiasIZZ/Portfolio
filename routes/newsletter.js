const router = require('express').Router();
const Newsletter = require('../database/models/newsletter.model');


router.post('/new', (req, res) => {
    const requete = req.body;

    const newEmail = new Newsletter({
        ...requete
    });
    newEmail.save().then( data => console.log(data) );

});


router.get('/', (req, res) => {

    Newsletter.find({})
        .exec()
        .then( newsletters => {

            res.render('list-newsletter', { newsletters });
        });

})




module.exports = router;
