//importando as funcionalidades do express
const express = require('express');
//variável que vai armazenar minha apricação
const app =  express();
//criando a primeira rota
app.get('/',(request, response)=>{ 
    return response.json({
        evento:'Semana OmniStack 11.0',
        aluno: 'Weslley Leocadio'
    })
});
//a aplicação vai ouvir a porta 3333
app.listen(3333);