const express =require('express');


const app = express();

app.get('/', (request, response) => { 
  return response.json({message: 'Heloo Lôbo!'});
});

app.listen(3333);