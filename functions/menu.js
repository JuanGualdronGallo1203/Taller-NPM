const chalk = require('chalk');
const { registerUser, loginUser, changePassword } = require('./authentication');
const { askQuestion, closeRL } = require('./utils');
2

async function showMenu() {

    try {
        console.log(chalk.cyan('================================='));
        console.log(chalk.cyan('      SISTEMA DE AUTENTICACIÓN'));
        console.log(chalk.cyan('================================='));
        console.log(chalk.yellow('1. Iniciar sesión'));
        console.log(chalk.yellow('2. Registrarse'));
        console.log(chalk.yellow('3. cambiar contraseña'));
        console.log(chalk.yellow('4. Salir'));
        console.log(chalk.cyan('================================='));

        const option = await askQuestion('Selecciona una opción (1-4): ');

        switch (option) {
            case '1':
                await loginUser();
                break;
            case '2':
                await registerUser();
                break;
            case '3':
                await changePassword();
                break;
            case '4':
                console.log(chalk.blue('¡Hasta pronto!'));
                closeRL();
                return;
            default:
                console.log(chalk.red('Opción inválida. Por favor, selecciona 1, 2, 3 o 4.'));
        }

        // Esperar y volver al menu
        await askQuestion('\nPresiona Enter para continuar...');
        console.clear();
        await showMenu();  // se hace un llamdo recursivo


    }catch (error) {
        console.error("Error:", error);
        closeRL();
    }
}


module.exports = { showMenu, closeRL };