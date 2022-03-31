//Text

//const  db=require('../config/db.config.js');
//const context = db.context;
const logger = require('../config/logger');
const axios = require('axios');



// const GetTextResponse =async(request, response) => {
//     let data = JSON.stringify({
//         p_context : request.body.context,
//         p_question : request.body.question
//       });
   
//  axios.post('http://127.0.0.1:5000/get/response',data)
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log('eurreur axios in ',error);
//   });
// }



const GetTextResponse = async(request, response) => {


    p_context =request.body.context;
    p_question = request.body.question;
    console.log('params params    ')
    console.log(p_context,p_question)
    console.log('params params    ')

    resp = await axios.post('http://127.0.0.1:5000/get/response',{context:p_context,question:p_question})
    // .then(response => {
    //         //console.log(response);
    //         //console.log(response.data.explanation);
    //         result = response.data;
    //         console.log(result['response']);
    //         console.log('haloooooooooooooooooooooooooooooooo')
    //         //return result['response']
    //         return result


    //       })
    //       .catch(error => {
    //         console.log('eurreur axios in ',error);
    //       });
   
    if(resp && resp.data)
    {
        // console.log(response.data.url);
        // console.log(response.data.explanation);
        // console.log(response.data)
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






// const getBreeds = (request, response) => {
//     try {
//         p_context =request.body.context;
//         p_question = request.body.question;
//       return axios.post('http://127.0.0.1:5000/get/response',{context:p_context,question:p_question})
//     } catch (error) {
//       console.error(error)
//     }
//   }
  
//   const GetTextResponse = async () => {
//     const breeds = getBreeds()
//       .then(response => {
//         if (response.data.message) {
//         //   console.log(
//         //     `Got ${Object.entries(response.data.message).length} breeds`
//         //   )

//         result = response.data
//         console.log(result['response'])
//         return result['response']

//         }
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }


// const GetTextResponse =async(p_context, p_question) => {

//     // p_context =request.body.context;
//     // p_question = request.body.question;

//     try{

//         const responseapi = await axios.post('http://127.0.0.1:5000/get/response',{context:p_context,question:p_question})
   
//     if(responseapi && responseapi.data)
//     {
//         console.log(responseapi.data)
//         result = responseapi.data;
//         console.log(responseapi)
    
//          return result.final_text
//     }

//     else

//      return null

//     }
//     catch(error)
//     {
//         console.error(error);
//     }
    

// };

module.exports = {
    GetTextResponse
}

