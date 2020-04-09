


const argv = require('./config/yargs').argv;
const colors = require('colors');

//destructuracion 
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){

    case 'listar':
      listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.base)
        .then(archivo => console.log(`Archivo credo: ${archivo.green}`))
        .catch(e => console.log(e));
    break;

    default:
    console.log(`Comando no reconocido`);
}


//let parametro = argv[2];
//let base = parametro.split('=')[1]


