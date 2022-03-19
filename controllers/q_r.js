const  db = require('../config/db.config.js');
const qr = db.qr;
const logger = require('../config/logger');


const Q_r_GetByContext =(request, response) => {


    p_id_context = request.body.id_context;

    db.sequelize.query('SELECT * FROM ctl_qr_select(:id_context) ',

        { replacements: {id_context :p_id_context}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: qr,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(qr => {
        logger.info(qr)
        response.json(qr)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


const Q_r_Add =(request, response) => {

    p_id_context = request.body.id_context;
    p_question = request.body.question;
    p_reponse = request.body.reponse;

    db.sequelize.query('SELECT * FROM ctl_qr_add(:id_context,:question , :reponse) ',

        { replacements: {id_context :p_id_context ,question:p_question,reponse:p_reponse}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: qr,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(qr => {
        logger.info(qr)
        response.json(qr)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};
module.exports = {
    Q_r_GetByContext,
    Q_r_Add
}