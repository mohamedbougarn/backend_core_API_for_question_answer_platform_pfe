module.exports = function(app) {
    console.log('Iam inrouting 000000000000000000')

    require('./context')(app);
    require('./context_conversation')(app);
    require('./client')(app);
    require('./q_r')(app);
    require('./treatment')(app);
    require('./langue')(app);
    require('./visiteur')(app);
    require('./stat')(app);
    require('./api')(app);

   

}