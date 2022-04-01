module.exports = function(app) {
    const language = require('../controllers/langue'); 
    
   
    app.put('/langue/get',language.Language_Get);
    


}