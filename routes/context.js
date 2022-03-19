module.exports = function(app) {
    const context = require('../controllers/context'); 
    
   
    app.put('/context/get',context.ContextGetbyId);
    app.put('/context/add', context.ContextAdd);


}