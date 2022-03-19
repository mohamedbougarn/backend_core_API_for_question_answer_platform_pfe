module.exports = function(app) {
    const qr = require('../controllers/q_r'); 
    
   
    app.put('/qr/get', qr.Q_r_GetByContext);

    app.put('/qr/add', qr.Q_r_Add);



}