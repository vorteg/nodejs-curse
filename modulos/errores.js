function malaFuncion(x){
    console.log('iniciamos la función');
    return 5 + z;
}
malaFuncion(10);
console.log('terminamos la función');
/* 
Esta función se rompería puesto que estamos pidiendo un Z y le estamos dando un X.
por tanto la respuesta de la terminal sería:
- iniciamos la función
y luego se rompería y no nos enviaría la ultima consola
*/


try {
    malaFuncion(10);
} catch (error) {
    console.log('hubo un error en la función debido a: '+ error)
}
console.log('terminamos la función');
/* 
Con try/catch la respuesta de la terminal sería:
- iniciamos la función
- hubo un error en la función debido a ERROR (no se rompe; le damos una solución en caso de que la función falle).
- terminamos la función
*/