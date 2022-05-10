module.exports = function(app) {
    const api = require('../controllers/api'); 
    
   
    app.put('/api/add',api.api_Add);
    


}