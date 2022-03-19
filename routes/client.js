module.exports = function(app) 
{
    const client = require('../controllers/client'); 
    console.log('Iam inrouting 1111111111111111111');
    app.put('/client/add', client.ClientAdd);
    app.put('/login', client.Clientlogin);
    app.put('/client/get', client.ClientGet);//pas verifier

}