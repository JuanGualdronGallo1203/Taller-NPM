const chalk = require('chalk');
const { generateSecurePassword } = require('./generate-password');
const { addUser, verifyUser } = require('./storage');
const { askQuestion } = require('./utils');

async function registerUser() {
    try {
        console.log(chalk.blue('\n=== REGISTRO DE USUARIO ==='));

        const username = await askQuestion('Ingresa un nombre de usuario: ');

        // Preguntar si desea generar contraseña segura
        let generatePass = '';
        while (generatePass !== 's' && generatePass !== 'n') {
            generatePass = await askQuestion('¿Deseas generar una contraseña segura? (s/n): ');
            generatePass = generatePass.toLowerCase().trim();

            if (generatePass !== 's' && generatePass !== 'n') {
                console.log(chalk.red('Opción inválida. Por favor, ingresa "s" o "n".'));
            }
        }

        let password;

        // CORRECIÓN: Usar if-else if-else en lugar de if separados
        if (generatePass === 's') {
            password = generateSecurePassword();
            console.log(chalk.blue('Tu contraseña generada es:'), chalk.yellow(password));
        } else if (generatePass === 'n') {
            password = await askQuestion('Ingresa tu contraseña: ');
        } else {
            console.log(chalk.red('Opción inválida. Por favor, ingresa "s" o "n".'));
            return;
        }

        // Registrar usuario
        const result = addUser(username, password);
        if (result.success) {
            console.log(chalk.green('✓ ' + result.message));
        } else {
            console.log(chalk.red('✗ ' + result.message));
        }

    } catch (error) {
        console.error('Error en registro:', error);
    }
}

async function loginUser() {
    try {
        console.log(chalk.blue('\n=== INICIO DE SESIÓN ==='));

        const username = await askQuestion('Usuario: ');
        const password = await askQuestion('Contraseña: ');

        // Verificar credenciales
        const result = verifyUser(username, password);
        if (result.success) {
            console.log(chalk.green('✓ Login exitoso! Bienvenido, ' + username + '!'));
        } else {
            console.log(chalk.red('✗ ' + result.message));
        }

    } catch (error) {
        console.error('Error en login:', error);
    }
}

async function changePassword() {
    try {
        const chalk = require('chalk');
        const { askQuestion } = require('./utils');
        const { updatePassword, readUsers } = require('./storage');
        const { generateSecurePassword } = require('./generate-password');

        console.log(chalk.blue('\n=== CAMBIAR CONTRASEÑA ==='));

        // Mostrar usuarios existentes
        const users = readUsers();
        if (users.length === 0) {
            console.log(chalk.yellow('No hay usuarios registrados.'));
            return;
        }

        console.log(chalk.cyan('\nUsuarios disponibles:'));
        users.forEach(user => {
            console.log(chalk.yellow(`- ${user.username}`));
        });

        // Pedir username para cambiar contraseña
        const usernameToChange = await askQuestion('\nIngresa el username al que deseas cambiar la contraseña: ');

        // Verificar que el usuario existe
        const userExists = users.find(user => user.username === usernameToChange);
        if (!userExists) {
            console.log(chalk.red('✗ Usuario no encontrado.'));
            return;
        }

        // Opciones para la nueva contraseña
        console.log(chalk.cyan('\nOpciones para la nueva contraseña:'));
        console.log(chalk.yellow('1. Generar contraseña segura automáticamente'));
        console.log(chalk.yellow('2. Ingresar contraseña manualmente'));

        const option = await askQuestion('\nSelecciona una opción (1-2): ');

        let newPassword;

        if (option === '1') {
            newPassword = generateSecurePassword();
            console.log(chalk.blue('Nueva contraseña generada:'), chalk.yellow(newPassword));
        } else if (option === '2') {
            newPassword = await askQuestion('Ingresa la nueva contraseña: ');
            const confirmPassword = await askQuestion('Confirma la nueva contraseña: ');

            if (newPassword !== confirmPassword) {
                console.log(chalk.red('✗ Las contraseñas no coinciden.'));
                return;
            }
        } else {
            console.log(chalk.red('✗ Opción inválida.'));
            return;
        }

        // Actualizar la contraseña
        const result = updatePassword(usernameToChange, newPassword);
        if (result.success) {
            console.log(chalk.green('✓ ' + result.message));
        } else {
            console.log(chalk.red('✗ ' + result.message));
        }

    } catch (error) {
        console.error('Error al cambiar contraseña:', error);
    }
}

// Exportar la nueva función
module.exports = { registerUser, loginUser, changePassword };