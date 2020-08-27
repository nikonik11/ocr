
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/openclass', {
    useMongoClient: true
});

mongoose.connection
    .once('open', () => {
        console.log('la connexion est établi');
    })
    .on('erreur', () => {
        console.warn('Erreur lors de la connexion')
    })