module.exports = function(app) {
    const context = require('../controllers/context'); 
    
   
    app.put('/context/get',context.ContextGetbyId);
    app.put('/context/add', context.ContextAdd);
    app.put('/context/count', context.ContextCountbyId);
    app.put('/context/type/update',context.ContextAdd);
    app.put('/context/alluser',context.ContextAllUser);

}