module.exports = function(app) {
    const stat = require('../controllers/stat'); 

    app.post('/stat/msg_date', stat.Stat_msg_DateGet);


}