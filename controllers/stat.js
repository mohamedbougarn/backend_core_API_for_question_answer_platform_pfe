const  db=require('../config/db.config.js');
const stat = db.context;
const logger = require('../config/logger');


const Stat_msg_DateGet = (req, res)=>
{
    //p_id_context =req.body.id_context;
    // p_id_client = request.body.id_client;
    db.sequelize.query('SELECT * FROM ctl_stat_message_date_select() ',

        { replacements: {}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: stat,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(stat => {
        logger.info(stat)
        res.json(stat)
    }).catch(err => {

        logger.error(err)
        res.status(500).json({msg: "error", details: err});
    });

}


//execute after the stat.js get count message per title  
const Top_msg_per_title =(request, response) => {

    p_id_client = request.body.id_client;
    p_top = request.body.top;
    //p_response = request.body.response;

    db.sequelize.query('SELECT * FROM ctl_top_countmsg_per_title_select(:id_client, :top)',

        { replacements: {id_client:p_id_client,top:p_top}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: stat,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(stat => {
        logger.info(stat)
        response.json(stat)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};




module.exports = {
    Stat_msg_DateGet,
    Top_msg_per_title
}