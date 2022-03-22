module.exports = function(app) {
    const contextconversation = require('../controllers/context_convertation'); 
    
   
    app.put('/Context_conversation/get',contextconversation.Context_conversationGet);
    app.put('/Context_conversation/add', contextconversation.Context_conversationAdd);
    //app.put('/Context_conversation/upload', contextconversation.Context_conversationUpload);


}
