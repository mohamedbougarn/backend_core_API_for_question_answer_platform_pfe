const  db=require('../config/db.config.js');
const langue = db.langue;
const logger = require('../config/logger');

const Language_Get =(request, response) => {

     p_id_langue =request.body.id_langue;
     
    db.sequelize.query('SELECT * FROM ctl_langue_select(:id_langue) ',

        { replacements: {id_langue:p_id_langue}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: langue,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(langue => {
        logger.info(langue)
        response.json(langue)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


module.exports = {
    Language_Get
}