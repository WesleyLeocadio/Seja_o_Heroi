const express = require('express');
const app =  express();
//converte o json em objeto javascript
app.use(express.json());
/* TIPO DE PARAMETROS
 *
 * Query Params: Parâmetros noemados enviandos na rota após "?" (filtros, paginação)
 * ROute Params: Parâmetros utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recurso
 */

app.post('/users',(request, response)=>{ 
    console.log(request.body);
    return response.json({
        evento:'Semana OmniStack 11.0',
        aluno: 'Weslley Silva'
    })
});
app.listen(3333);