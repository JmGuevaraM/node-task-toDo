const argv = require('./config/yargs').argv;
const toDo = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        toDo.getListado();
        break;
    case 'crear':
        toDo.crear(argv.description);
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.description, argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = toDo.borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
        break;
}