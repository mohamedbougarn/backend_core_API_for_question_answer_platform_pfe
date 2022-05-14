module.exports = function(app) {
    const api = require('../controllers/api'); 
    
   
    app.put('/api/add',api.api_Add);
    app.put('/api/get',api.api_Get);
    app.put('/api/verif',api.api_verif_key);
    app.put('/api/getcontext',api.getcontext);


}