# 🔐 Sistema de Autenticación con Generador de Contraseñas Seguras

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-8%2B-blue.svg)](https://www.npmjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Una aplicación de consola robusta que gestiona autenticación de usuarios con generación automática de contraseñas seguras, perfecta para aprender sobre seguridad y manejo de dependencias NPM.

## ✨ Características

- 🎯 **Registro seguro** de usuarios con validaciones
- 🔄 **Generación automática** de contraseñas complejas
- 💾 **Almacenamiento persistente** en JSON
- 🎨 **Interfaz colorida** y amigable
- 📋 **Gestión completa** de credenciales
- ⚡ **Copiado automático** al portapapeles

## 🛠️ Tecnologías Utilizadas

| Librería | Versión | Propósito |
|----------|---------|-----------|
| [**generate-password**](https://www.npmjs.com/package/generate-password) | ^1.7.0 | Generación de contraseñas seguras |
| [**clipboardy**](https://www.npmjs.com/package/clipboardy) | ^2.3.0 | Copiado al portapapeles |
| [**chalk**](https://www.npmjs.com/package/chalk) | ^4.1.2 | Colores en consola |
| [**commander**](https://www.npmjs.com/package/commander) | ^8.0.0 | Manejo de comandos |

## 📦 Instalación

### Prerrequisitos
- **Node.js** 18+ 
- **npm** 8+

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/taller-npm.git
   cd taller-npm

## 📋 Menú de opciones
Al ejecutar la aplicación, verás este menú interactivo:
```
=================================
      SISTEMA DE AUTENTICACIÓN
=================================
1. Iniciar sesión
2. Registrarse
3. Cambiar contraseña
4. Salir
=================================
Selecciona una opción (1-4):
```

## 🏗️ Estructura del Proyecto
```
taller-npm/
├── 📁 functions/
│   ├── 🔐 authentication.js              # Lógica de autenticación
│   ├── 🎯 generate-password.js # Generador de contraseñas
│   ├── 💾 storage.js           # Manejo de datos JSON
│   ├── 📋 menu.js              # Interfaz de menú
│   └── ⚙️ utils.js             # Utilidades comunes
├── 📁 data/
│   └── 📄 users.json           # Base de datos de usuarios
├── 🚀 main.js                  # Punto de entrada
├── 📦 package.json             # Dependencias
└── 📖 README.md               # Documentación
```
# 🎥 Video
https://drive.google.com/file/d/1KMbC_cax2rIVl4aBUeW0eGl2E365_KFb/view?usp=sharing
- Duración: 4:15 minutos
Contenido:

📌 Explicación del problema de seguridad

🛠️ Demostración de las librerías NPM

🎯 Funcionamiento completo de la aplicación

🔐 Generación de contraseñas en tiempo real

## 📝 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

# 👨‍💻 Autores    
- Juan sebastian Gualdron
- Cristian Miguel Perez