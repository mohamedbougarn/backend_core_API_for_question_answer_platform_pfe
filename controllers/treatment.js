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



const GetGPT_3 = async(request, response) => {


    p_question = request.body.question;
    p_lang = request.body.lang;
    console.log('params params    ')
    console.log(p_question,p_lang)
    console.log('params params    ')

    resp = await axios.post('http://127.0.0.1:5000/get/gpt3',{question:p_question,lang:p_lang})

   
    if(resp && resp.data)
    {
        result = resp.data;
        console.log(result)
        //return result['response']
        //return result//.final_text
        response.json(result)
    }

    else

     return null
    //response.cancel();

};




const GetWiki = async(request, response) => {


    question = request.body.question;
    lang = request.body.lang;

    console.log('params params    ')
    console.log(question,lang)
    console.log('params params    ')

    resp = await axios.post('http://127.0.0.1:5000/wiki/question',{question:question,lang:lang})

   
    if(resp && resp.data)
    {
        result = resp.data;
        console.log(result)
        //return result['response']
        //return result//.final_text
        response.json(result)
    }

    else

     return null
    //response.cancel();

};



const GetWikiconversation = async(request, response) => {


    question = request.body.question;
    lang = request.body.lang;

    console.log('params params    ')
    console.log(question,lang)
    console.log('params params    ')

    resp = await axios.post('http://127.0.0.1:5000/wiki/question/translate',{question:question,lang:lang})

   
    if(resp && resp.data)
    {
        result = resp.data;
        console.log(result)
        //return result['response']
        //return result//.final_text
        response.json(result)
    }

    else

     return null
    //response.cancel();

};

module.exports = {
    GetTextResponse,
    GetGPT_3,
    GetWiki,
    GetWikiconversation
}

