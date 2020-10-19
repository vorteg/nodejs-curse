function soyAsincrona(micallback){
    setTimeout(() => {
        console.log('Hola soy una funcion Asincrona');
        micallback();
    }, 1000);
    
}

console.log('iniciando proceso...');
soyAsincrona(function(){
    console.log('Terminando Proceso...')
});
