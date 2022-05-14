//Text

//const  db=require('../config/db.config.js');
//const context = db.context;
const logger = require('../config/logger');
const axios = require('axios');

const GetTextResponse = async(request, response) => {


    p_context =request.body.context;
    p_question = request.body.question;
    console.log('params params    ')
    console.log(p_context,p_question)
    console.log('params params    ')

    resp = await axios.post('http://127.0.0.1:5000/get/response',{context:p_context,question:p_question})

   
    if(resp && resp.data)
    {
        result = resp.data;
        console.log(result['response'])
        //return result['response']
        //return result//.final_text
        response.json(result)
    }

    else

     return null
    //response.cancel();

};



module.exports = {
    GetTextResponse
}

