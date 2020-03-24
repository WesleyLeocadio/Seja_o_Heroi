const express= require('express');
const routes = express.Router();


routes.post('/users',(request, response)=>{ 
    console.log(request.body);
    return response.json({
        evento:'Semana OmniStack 11.0',
        aluno: 'Weslley Silva'
    })
});
module.exports = routes;