module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define('client', {
            // id_context: {type: Sequelize.INTEGER, primaryKey: true},
            // text: Sequelize.STRING,
            // entry_date:Sequelize.DATE,
            // edit_date:Sequelize.DATE,
            // id_client:Sequelize.INTEGER,
            // status :Sequelize.numeric
        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: 'id_context',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return Client;
    }