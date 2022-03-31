const  db=require('../config/db.config.js');
const context_conversation = db.context;
const logger = require('../config/logger');


const Context_conversationGet =(request, response) => {

     p_id_context =request.body.id_context;
    // p_id_client = request.body.id_client;
    db.sequelize.query('SELECT * FROM ctl_context_convertation_select(:id_context) ',

        { replacements: {id_context:p_id_context}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: context_conversation,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(context_conversation => {
        logger.info(context_conversation)
        response.json(context_conversation)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

//execute after the tretement.js add responce  
const Context_conversationAdd =(request, response) => {

    p_id_context = request.body.id_context;
    p_question = request.body.question;
    p_response = request.body.response;

    db.sequelize.query('SELECT * FROM ctl_context_convertation_add(:id_context , :question, :response) ',

        { replacements: {id_context:p_id_context,question:p_question,response:p_response}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: context_conversation,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(context_conversation => {
        logger.info(context_conversation)
        response.json(context_conversation)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

// const Context_conversationAdd =(request, response) => {

//     p_id_context = request.body.id_context;
//     p_question = request.body.question;

//     db.sequelize.query('SELECT * FROM ctl_context_convertation_add(:id_context , :question) ',

//         { replacements: {id_context:p_id_context,question:p_question}, type: db.sequelize.QueryTypes.SELECT },
//         {
//             model: context_conversation,
//             mapToModel: true // pass true here if you have any mapped fields
//         }).then(context_conversation => {
//         logger.info(context_conversation)
//         response.json(context_conversation)
//     }).catch(err => {

//         logger.error(err)
//         response.status(500).json({msg: "error", details: err});
//     });

// };

const Context_conversationUpload =(request, response) => {

    p_id_context = request.body.id_context;
    p_photo = request.body.photo;

    db.sequelize.query('SELECT * FROM ctl_context_convertation_add_photo(:id_context ,:photo)',

        { replacements: {id_context:p_id_context,photo:p_photo}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: context_conversation,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(context_conversation => {
        logger.info(context_conversation)
        response.json(context_conversation)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


module.exports = {
    Context_conversationAdd,
    Context_conversationGet,
    Context_conversationUpload
}