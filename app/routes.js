'use strict';

var pageController = require('./controllers/pageController');

module.exports = function(app) {
    app.route('/').get(pageController.index);
    app.route('/fileUpload').get(pageController.upload)
    app.route('/fileUpload').post(pageController.uploadBackend)
 }