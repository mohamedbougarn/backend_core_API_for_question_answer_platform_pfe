const  db=require('../config/db.config.js');
const visiteur_conversation = db.context;
const logger = require('../config/logger');


const Visiteur_Context_conversationGet = (req, res)=>
{
    p_id_context =req.body.id_context;
    // p_id_client = request.body.id_client;
    db.sequelize.query('SELECT * FROM ctl_context_convertation_select(:id_context) ',

        { replacements: {id_context:p_id_context}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: visiteur_conversation,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(visiteur_conversation => {
        logger.info(visiteur_conversation)
        res.json(visiteur_conversation)
    }).catch(err => {

        logger.error(err)
        res.status(500).json({msg: "error", details: err});
    });

}


//execute after the tretement.js add responce  



module.exports = {
    Visiteur_Context_conversationAdd,
    Visiteur_Context_conversationGet
}