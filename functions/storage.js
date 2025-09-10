const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

// Asegurarse de que el directorio data existe
if (!fs.existsSync(path.dirname(usersFilePath))) {
    fs.mkdirSync(path.dirname(usersFilePath), { recursive: true });
}



// Guardar usuarios en el archivo JSON
function saveUsers(users) {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        return true;
    } catch (error) {
        console.error('Error guardando usuarios:', error);
        return false;
    }
}

// Añadir un nuevo usuario
function addUser(username, password) {
    const users = readUsers();

    // Verificar si el usuario ya existe
    if (users.find(user => user.username === username)) {
        return { success: false, message: 'El usuario ya existe' };
    }

    users.push({ username, password });
    const saved = saveUsers(users);

    return {
        success: saved,
        message: saved ? 'Usuario registrado exitosamente' : 'Error al guardar usuario'
    };
}

// Verificar credenciales de usuario
function verifyUser(username, password) {
    const users = readUsers();
    const user = users.find(user => user.username === username && user.password === password);
    return user ? { success: true, user } : { success: false, message: 'Credenciales inválidas' };
}

// Función para actualizar la contraseña de un usuario
function updatePassword(username, newPassword) {
    const users = readUsers();
    const userIndex = users.findIndex(user => user.username === username);

    if (userIndex === -1) {
        return { success: false, message: 'Usuario no encontrado' };
    }

    users[userIndex].password = newPassword;
    const saved = saveUsers(users);

    return {
        success: saved,
        message: saved ? 'Contraseña actualizada exitosamente' : 'Error al actualizar la contraseña'
    };
}

function readUsers() {
    try {
    if (fs.existsSync(usersFilePath)) {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);
    }
    } catch (error) {
    console.error('Error leyendo usuarios:', error);
    }
    return [];
}


// Exportar la nueva función
module.exports = { addUser, verifyUser, updatePassword, readUsers };

