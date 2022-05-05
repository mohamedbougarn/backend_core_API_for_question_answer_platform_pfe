module.exports = function(app) {
    const stat = require('../controllers/stat'); 

    app.post('/stat/msg_date', stat.Stat_msg_DateGet);
    app.post('/stat/top_msg_title', stat.Top_msg_per_title);
    app.post('/stat/top_msg_annee', stat.Top_msg_per_annee);
    app.post('/stat/top_msg_month', stat.Top_contextmsg_per_month);

    
}