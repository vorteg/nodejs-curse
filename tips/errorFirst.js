/*
 ErrorFirst
*/

function asincrona(callback){
    setTimeout(() => {
      try {
        let a = 3 + z;
        callback(null, a);
      } catch(error) {
        callback(error);
      }
    }, 1000);
  }
  
  /*
    Con errorFirst, no funciona el throw, este es mejor
    usarlo en funciones sincronas
  */
  
  asincrona(function(error, dato){
    if(error) {
      console.error('Tenemos un error', error.message);
      // throw error;
      return false;
    };
  
    console.log('Todo ha ido bien', dato);
  });