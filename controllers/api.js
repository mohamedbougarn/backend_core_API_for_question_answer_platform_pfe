const  db=require('../config/db.config.js');
const api = db.api;
const context =db.api; 
const logger = require('../config/logger');


const api_Add =(request, response) => {

     p_id_client =request.body.id_client;
     p_key = request.body.key;
     
    db.sequelize.query('SELECT * FROM ctl_api_add(:id_client,:key) ',

        { replacements: {id_client:p_id_client,key:p_key}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: api,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(api => {
        logger.info(api)
        response.json(api)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


const api_Get =(request, response) => {

    p_id_client =request.body.id_client;
    // p_key = request.body.key;
    
   db.sequelize.query('SELECT * FROM ctl_api_select(:id_client)',

       { replacements: {id_client:p_id_client}, type: db.sequelize.QueryTypes.SELECT },
       {
           model: api,
           mapToModel: true // pass true here if you have any mapped fields
       }).then(api => {
       logger.info(api)
       response.json(api)
   }).catch(err => {

       logger.error(err)
       response.status(500).json({msg: "error", details: err});
   });

};


const api_verif_key = (request, response) => 
{
    
    p_key = request.body.key;
    
   db.sequelize.query('SELECT * FROM ctl_verif_key(:key)',

       { replacements: {key:p_key}, type: db.sequelize.QueryTypes.SELECT },
       {
           model: api,
           mapToModel: true // pass true here if you have any mapped fields
       }).then(api => {
       logger.info(api)
       response.json(api)
   }).catch(err => {

       logger.error(err)
       response.status(500).json({msg: "error", details: err});
   });

};


const getcontext =(request, response) => {

    p_id_context =request.body.id_context;
    db.sequelize.query('SELECT * FROM ctl_context_select(:id_context) ',

        { replacements: {id_context:p_id_context}, type: db.sequelize.QueryTypes.SELECT },
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
    api_Add,
    api_Get,
    api_verif_key,
    getcontext
}