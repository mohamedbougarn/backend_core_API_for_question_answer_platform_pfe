module.exports = function(app) {
    const treatment = require('../controllers/treatment'); 

    app.post('/treatment/text', treatment.GetTextResponse);
    app.post('/treatment/gpt3', treatment.GetGPT_3);

}