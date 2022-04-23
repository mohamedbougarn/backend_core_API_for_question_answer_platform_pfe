const  db=require('../config/db.config.js');
const stat = db.context;
const logger = require('../config/logger');


const Stat_msg_DateGet = (req, res)=>
{
    p_id_context =req.body.id_context;
    // p_id_client = request.body.id_client;
    db.sequelize.query('SELECT * FROM ctl_stat_message_date_select(:id_context) ',

        { replacements: {id_context:p_id_context}, type: db.sequelize.QueryTypes.SELECT },
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


// //execute after the tretement.js add responce  
// const Visiteur_Context_conversationAdd =(request, response) => {

//     p_id_context = request.body.id_context;
//     p_question = request.body.question;
//     //p_response = request.body.response;

//     db.sequelize.query('SELECT * FROM ctl_visiteur_context_convertation_add(:id_context , :question, :response) ',

//         { replacements: {id_context:p_id_context,question:p_question,response:p_response}, type: db.sequelize.QueryTypes.SELECT },
//         {
//             model: visiteur_conversation,
//             mapToModel: true // pass true here if you have any mapped fields
//         }).then(visiteur_conversation => {
//         logger.info(visiteur_conversation)
//         response.json(visiteur_conversation)
//     }).catch(err => {

//         logger.error(err)
//         response.status(500).json({msg: "error", details: err});
//     });

// };




module.exports = {
    Stat_msg_DateGet,
}