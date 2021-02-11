const mongoose = require('mongoose');
const schema = mongoose.Schema;

const newsletterSchema = schema({
    content: {
        type: String,
        minlength: [6, 'Votre email est sûrement trop petit'],
        maxlength: [35, 'Votre email est trop long'],
        required: [true, 'Votre email est requis']
    }
})

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;


