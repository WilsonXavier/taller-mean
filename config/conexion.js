let mongoose = require('mongoose');

mongoose.connect('mongodb://tallerMean:mean2018.@ds255262.mlab.com:55262/mean-taller', { useMongoClient: true }); //mongodb://localhost:27017/crud

module.exports = mongoose;