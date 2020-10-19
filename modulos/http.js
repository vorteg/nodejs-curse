const http = require('http');

/*
  Crear un servidor basico,
  createServer recibe el siguiente parametro.
  1. Una funcion, que recibe 2 parametros
    1. request.
    2. response
*/

function router(req, res){
  console.log('Nueva peticion');
  console.log(req.url);

  switch(req.url){
    case '/hola':
      res.write('<h1>Hola, que tal</h1>');
      res.end();
    break;

    default:
      res.write('<h1>Error 404</h1>');
      res.end();
  }

  // Headers
  // res.writeHead(201, {'Content-Type':'text/plain'});

  // // Responder la peticion
  // res.write('Hola ya se usar HTTPS con NodeJS');

  // res.end();
}

http.createServer(router).listen(3000);

console.log('Escuchando en el puerto 3000');