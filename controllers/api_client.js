const traitement = require('../controllers/treatment');
const api = require('../controllers/api');
const axios = require('axios')


const URL = 'http://127.0.0.1:3000';

const  GeteResponseContext= async (request, response ) => //, response 
{

    key = request.body.key;
    id_context = request.body.id_context;
    question = request.body.question;
    lang=request.body.lang;


console.log(('00000000000000000000000000000'))
           const veri_key = await  axios.put(URL+'/api/verif',{key});         

           const  context_text  = await  axios.put(URL+'/api/getcontext',{id_context});        
 console.log('1111111111111111111111111')

         if(veri_key && veri_key.data && veri_key.data[0].ctl_verif_key == true && context_text && context_text.data &&context_text.data[0].text.length > 0)
            
         {
             console.log('1.2.1.1.1.')
           let context = context_text.data[0].text ;
            result  = await axios.post(URL+'/treatment/text',{context,question});
            //console.log(result)
            console.log('2222222222222222222222222222222222222222222')
            if(result && result.data )

            {
                model='Bert';
                answer= result.data.response;
                var ddd = result.data;
                await axios.put(URL+'/context_conversation/api/add',{id_context,key,model,lang,question,answer}); 
                console.log('dddddddddddddddddddddddd');
                console.log(ddd)
                response.send(ddd)
            }

            else 

            {
                //response.send (null)
                response.status(500).json({msg: "error", API_KEY: veri_key.data[0].ctl_verif_key});

            }
   

         }
         else
         {
            console.log('verif API KEY ', veri_key, "context text = ",context_text);
           // response.send('verif API KEY = '+veri_key.data[0].ctl_verif_key);
           //response.JSON(veri_key.data[0].ctl_verif_key);
           response.status(500).json({msg: "error", API_KEY: veri_key.data[0].ctl_verif_key});

         }
    


};


const  GeteResponseGPT_3 = async (request, res ) => //, response 
{
    
    key = request.body.key;
    question = request.body.question;
    lang=request.body.lang;

    console.log(('verif key'))
           const veri_key = await  axios.put(URL+'/api/verif1',{key});         
    
    console.log('verif key ok ',veri_key.data)

         if(veri_key && veri_key.data && veri_key.data[0].ok == true) 
         {
           //let context = context_text.data[0].text ;
            result  = await axios.post(URL+'/treatment/gpt3',{question});
            //console.log(result)

            console.log('2222222222222222222222222222222222222222222')
            if(result && result.data )

            {

                id_context = '0';
                model='GPT 3';
                answer= result.data.response;
                
                
                var ddd = result.data;
                await  axios.put(URL+'/context_conversation/api/add',{id_context,key,model,lang,question,answer}); 
                console.log('dddddddddddddddddddddddd');
                console.log(ddd)
                res.send(ddd)
            }

            else 

            {
                res.status(500).json({msg: "error", API_KEY: veri_key.data[0].ok});
                //response.send (null)
            }
        

         }
         else
         {
            console.log('verif API KEY ', veri_key.data);
           // response.send('verif API KEY = '+veri_key.data[0].ctl_verif_key);
           //response.JSON(veri_key.data[0].ctl_verif_key);
           res.status(500).json({msg: "error", API_KEY: veri_key.data[0].ok});

         }
    


};




const  GetResponsewiki = async (request, response ) => //, response 
{

    key = request.body.key;
    question = request.body.question;
    lang=request.body.lang;

    console.log(('verif key'))
           const veri_key = await  axios.put(URL+'/api/verif1',{key});         
    
    console.log('verif key ok ',veri_key.data)

         if(veri_key && veri_key.data && veri_key.data[0].ok == true) 
         {
           //let context = context_text.data[0].text ;
            result  = await axios.post(URL+'/treatment/wiki',{question,lang});
            //console.log(result)

            console.log('2222222222222222222222222222222222222222222')
            if(result && result.data )

            {
                id_context = '0';
                model='Wikipedia';
                answer= result.data.answer;
                var ddd = result.data;
                await  axios.put(URL+'/context_conversation/api/add',{id_context,key,model,lang,question,answer}); 
                console.log('dddddddddddddddddddddddd');
                console.log(ddd)
                response.send(ddd)
            }

            else 

            {
                response.status(500).json({msg: "error", API_KEY: veri_key.data[0].ok});
                //response.send (null)
            }
        

         }
         else
         {
            console.log('verif API KEY ', veri_key.data);
           // response.send('verif API KEY = '+veri_key.data[0].ctl_verif_key);
           //response.JSON(veri_key.data[0].ctl_verif_key);
           response.status(500).json({msg: "error", API_KEY: veri_key.data[0].ok});

         }
    


};





module.exports = {
    GeteResponseContext,
    GeteResponseGPT_3,
    GetResponsewiki
}

