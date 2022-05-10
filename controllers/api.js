const  db=require('../config/db.config.js');
const api = db.api;
const logger = require('../config/logger');

const api_Add =(request, response) => {

     p_id_client =request.body.id_client;
     p_key = request.body.key;
     
    db.sequelize.query('SELECT * FROM ctl_langue_select(:id_langue) ',

        { replacements: {id_langue:p_id_langue}, type: db.sequelize.QueryTypes.SELECT },
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


module.exports = {
    api_Add
}