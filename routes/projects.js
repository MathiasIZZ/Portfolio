const router = require('express').Router();
const Projects = require('../database/models/projects.model')
const util = require('util');

router.post('/', (req, res) => {

    const requete = req.body;

    const newProject = new Projects({
        ...requete,
        infos: {
            author: requete.author
        }
    })

    newProject.save().then( project => {
        console.log(project)

    })
        .catch( (err, res) => {
            console.log(util.inspect(err, { compact: true, depth: 5, breakLength: 80, colors: true }));
            res.status(400).render('index');
        })



    res.end();
})

router.get('/', (req, res) => {
    res.render('projects');
})

module.exports = router;
