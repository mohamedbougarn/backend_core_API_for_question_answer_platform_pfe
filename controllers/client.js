const  db=require('../config/db.config.js');
const client = db.client;
const logger = require('../config/logger');


const ClientGet =(request, response) => {

    p_id_client = request.body.id_client;

    db.sequelize.query('SELECT * FROM ctl_client_select(:id_client)',

        { replacements: {id_client:p_id_client}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: client,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(client => {
        logger.info(client)
        response.json(client)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


const ClientAdd =(request, response) => {

    p_nom_client = request.body.nom_client;
    p_prenom_client = request.body.prenom_client;
    p_mobile_client = request.body.mobile_client;
    p_email_client = request.body.email_client;
    p_password_client = request.body.password_client;

    db.sequelize.query('SELECT * FROM ctl_client_add(:nom_client , :prenom_client , :mobile_client ,:email_client , :password_client) ',

        { replacements: {
            nom_client:p_nom_client, 
            prenom_client:p_prenom_client, 
            mobile_client:p_mobile_client, 
            email_client:p_email_client, 
            password_client :p_password_client
        }, type: db.sequelize.QueryTypes.SELECT },
        {
            model: client,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(client => {
        logger.info(client)
        response.json(client)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

const Clientlogin =(request, response) => {

    p_email_client = request.body.email_client;
    p_password_client = request.body.password_client;

    db.sequelize.query('SELECT * FROM ctl_client_login(:email_client , :password_client) ',

        { replacements: {
            email_client:p_email_client, 
            password_client :p_password_client
        }, type: db.sequelize.QueryTypes.SELECT },
        {
            model: client,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(client => {
        logger.info(client)
        response.json(client)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};




const Clientcount =(request, response) => {

    //p_id_client = request.body.id_client;

    db.sequelize.query('SELECT * FROM ctl_count_client()',

        { replacements: {}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: client,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(client => {
        logger.info(client)
        response.json(client)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

/***
 * update profile core 
 */
 const ClientUpdate =(request, response) => {

    p_id_client = request.body.id_client;
    p_nom_client = request.body.nom_client;
    p_prenom_client = request.body.prenom_client;
    p_mobile_client = request.body.mobile_client;
    p_email_client = request.body.email_client;
    p_password = request.body.password_client;

    db.sequelize.query('SELECT * FROM ctl_client_update(:id_client,:nom_client , :prenom_client , :mobile_client ,:email_client , :password_client) ',

        { replacements: {
            id_client:p_id_client,
            nom_client:p_nom_client, 
            prenom_client:p_prenom_client, 
            mobile_client:p_mobile_client, 
            email_client:p_email_client, 
            password_client :p_password   
        }, type: db.sequelize.QueryTypes.SELECT },
        {
            model: client,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(client => {
        logger.info(client)
        response.json(client)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};




module.exports = {
    ClientGet,
    ClientAdd,
    Clientlogin,
    Clientcount,
    ClientUpdate
}