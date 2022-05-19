
module.exports = function(app) {

    const apiclient = require('../controllers/api_client'); 
    
   
    app.put('/api/getresponse/context',apiclient.GeteResponseContext);
    app.put('/api/getresponse/gpt3',apiclient.GeteResponseGPT_3);
    app.put('/api/getresponse/wiki',apiclient.GetResponsewiki);

}