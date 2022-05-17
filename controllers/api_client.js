const traitement = require('../controllers/treatment');
const api = require('../controllers/api');
const axios = require('axios')


const URL = 'http://127.0.0.1:3000';

const  GeteResponseContext= async (request, response ) => //, response 
{

    key = request.body.key;
    id_context = request.body.id_context;
    question = request.body.question;

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

         }
         else
         {
            console.log('verif API KEY ', veri_key, "context text = ",context_text);
           // response.send('verif API KEY = '+veri_key.data[0].ctl_verif_key);
           //response.JSON(veri_key.data[0].ctl_verif_key);
           response.status(500).json({msg: "error", API_KEY: veri_key.data[0].ctl_verif_key});

         }
    
console.log('2222222222222222222222222222222222222222222')
    if(result && result.data )

    {
        var ddd = result.data;

        console.log('dddddddddddddddddddddddd');
        console.log(ddd)
         response.send  (ddd)
    }

  else 

  {
      response.send (null)
  }
   

};


const  GeteResponseGPT_3 = async (request, response ) => //, response 
{

    key = request.body.key;
    question = request.body.question;

    console.log(('verif key'))
           const veri_key = await  axios.put(URL+'/api/verif',{key});         
    
    console.log('verif key ok ')

         if(veri_key && veri_key.data && veri_key.data[0].ctl_verif_key == true)
            
         {
           let context = context_text.data[0].text ;
            result  = await axios.post(URL+'/treatment/text',{context,question});
            //console.log(result)

         }
    
console.log('2222222222222222222222222222222222222222222')
    if(result && result.data )

    {
        var ddd = result.data;

        console.log('dddddddddddddddddddddddd');
        console.log(ddd)
         response.send(ddd)
    }

  else 

  {
      response.send (null)
  }
   

};

module.exports = {
    GeteResponseContext,
    GeteResponseGPT_3
}

