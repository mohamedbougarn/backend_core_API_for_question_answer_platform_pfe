
module.exports = function(app) {
    const visiteurcontextconversation = require('../controllers/visiteur'); 

app.put('/visiteur_conversation/get',visiteurcontextconversation.Visiteur_Context_conversationGet);
app.put('/visiteur_conversation/add', visiteurcontextconversation.Visiteur_Context_conversationAdd);


}