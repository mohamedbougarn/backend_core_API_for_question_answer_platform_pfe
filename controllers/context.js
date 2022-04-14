const  db=require('../config/db.config.js');
const context = db.context;
const logger = require('../config/logger');


const ContextGetbyId =(request, response) => {

    p_id_context =request.body.id_context;
    p_id_client = request.body.id_client;
    db.sequelize.query('SELECT * FROM ctl_context_select(:id_context,:id_client) ',

        { replacements: {id_context:p_id_context,id_client:p_id_client}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: context,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(context => {
        logger.info(context)
        response.json(context)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


const ContextAdd =(request, response) => {

    p_title = request.body.title;
    p_text = request.body.text;
    p_id_client = request.body.id_client;

    db.sequelize.query('SELECT * FROM ctl_context_add(:text , :id_client,:title) ',

        { replacements: {text:p_text,id_client:p_id_client,title:p_title}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: context,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(context => {
        logger.info(context)
        response.json(context)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


const ContextCountbyId =(request, response) => {

    //p_id_context =request.body.id_context;
    p_id_client = request.body.id_client;
    db.sequelize.query('SELECT * FROM ctl_count_context_select(:id_client)',

        { replacements: {id_client:p_id_client}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: context,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(context => {
        logger.info(context)
        response.json(context)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};



module.exports = {
    ContextGetbyId,
    ContextAdd,
    ContextCountbyId
}