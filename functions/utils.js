const readline = require('readline');

// Crear una única instancia de readline para toda la aplicación
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

function closeRL() {
    rl.close();
}

module.exports = { askQuestion, closeRL, rl };