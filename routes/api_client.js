
module.exports = function(app) {

    const apiclient = require('../controllers/api_client'); 
    
   
    app.put('/api/getresponse/context',apiclient.GeteResponseContext);


}