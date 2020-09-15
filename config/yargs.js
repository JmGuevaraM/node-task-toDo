const description = {
    alias: 'd',
    demandOption: true
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'crea una nueva tarea', {
        description
    })
    .command('actualizar', 'actualiza el estadio de una tarea', {
        description,
        completado
    })
    .command('listar', 'muestra la lista de tareas')
    .command('borrar', 'elimina una tarea de la lista', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}