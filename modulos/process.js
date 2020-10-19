const { exec, spawn } = require('child_process')

exec('ls -la', (error, stdout, sterr) =>{
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})

exec('node modulos/console.js', (error, stdout, sterr) =>{
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})


let proceso = spawn('ls', ['-la'])

console.log(proceso)
console.group('DETALLE DEL PROCESO')
console.log(`ID: ${proceso.pid}`)

console.log(`CONNECTED: ${proceso.connected}`)
proceso.stdout.on('data', (dato) =>{
    console.log(`El proceso termino: ${proceso.killed}`)
    console.log(dato.toString())
})

proceso.stdout.on('exit', () =>{
    console.log('El proceso termino')
    console.log(proceso.killed)
    console.groupEnd()
})