var colors = require('colors');
const inquirer = require('inquirer');


const preguntas = [
    {
        type: 'list',
        name: 'options',
        message: '¿Qué quieres hacer?',
        choices: [
            {
                value: '1',
                name: '1 Registrar nuevo usuario',
            },
            {
                value: '2',
                name: '2 Buscar usuario',
            },
            {
                value: '3',
                name: '3 Modificar usuario',
            },
            {
                value: '4',
                name: '4 Eliminar usuario',
            },
            {
                value: '5',
                name: '5 Filtrar usuarios',
            },
            {
                value: '0',
                name: '0 Finalizar',
            }
        ]
    }
]

const menu = () => {

    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.red}`);
    console.log(`${'           First Application'.grey}`);
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.red}`);

    inquirer.prompt(preguntas).then(({entry}) => {
        console.log(entry);
    })
}




module.exports = {
    menu
};
