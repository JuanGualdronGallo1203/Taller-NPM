const generatePassword = require('generate-password');
const clipboardy = require('clipboardy');
const chalk = require('chalk');

function generateSecurePassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    excludeSimilarCharacters: true,
    strict: true
  });

  // Copiar al portapapeles
  try {
    clipboardy.writeSync(password);
    console.log(chalk.green('✓ Contraseña generada y copiada al portapapeles'));
  } catch (error) {
    console.log(chalk.yellow('⚠ Contraseña generada pero no se pudo copiar al portapapeles'));
    console.log(chalk.yellow('⚠ Esto es normal en algunos entornos de servidor'));
  }
  
  return password;
}

module.exports = { generateSecurePassword };