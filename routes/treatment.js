module.exports = function(app) {
    const treatment = require('../controllers/treatment'); 

    app.post('/treatment/text', treatment.GetTextResponse);


}