const { program } = require('commander');
const chalk = require('chalk');
const { showMenu } = require('./functions/menu');
const { closeRL } = require('./functions/utils');


// Manejar cierre de la aplicacion
process.on('SIGINT', () => {
    console.log(chalk.blue('\n¡Hasta pronto!'));
    closeRL();
    process.exit(0);
});

// Configuracion de commander
program
    .version('1.0.0')
    .description('Sistema de autenticación de usuarios con Node.js')
    .action(async () => {
        console.clear();
        try {
            await showMenu();
        } catch (error) {
            console.error("Error fatal:", error);
            closeRL();
            process.exit(1);
        }
    });

program.parse(process.argv);