const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 3000;

// Crear una conexión a la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'contra123',
    database: 'ferroar',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Middleware para servir archivos estáticos de Vue.js desde la carpeta 'dist'
const staticMiddleware = express.static(path.join(__dirname, 'dist'));

// Middleware para analizar solicitudes POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para manejar el enrutamiento de la aplicación Vue.js en modo de historial de HTML5
app.use(history());

// Usar el middleware de archivos estáticos para servir la aplicación Vue.js
app.use(staticMiddleware);

// Manejar la solicitud POST para el registro de usuarios
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validar que los campos no estén vacíos
    if (!username || !email || !password) {
        return res.status(400).send('Por favor, complete todos los campos.');
    }

    try {
        // Verificar si el nombre de usuario o correo ya existen
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);

        if (rows.length > 0) {
            if (rows.some(row => row.username === username && row.email === email)) {
                return res.status(400).send('El nombre de usuario y el correo ya existen.');
            } else if (rows.some(row => row.username === username)) {
                return res.status(400).send('El nombre de usuario ya existe.');
            } else if (rows.some(row => row.email === email)) {
                return res.status(400).send('El correo electrónico ya existe.');
            }
        }

        // Guardar los datos del usuario en la base de datos
        await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
        return res.send('¡Registro exitoso!');
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error interno del servidor');
    }
});

// Manejar la solicitud POST para el inicio de sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Validar que los campos de nombre de usuario y contraseña no estén vacíos
    if (!username || !password) {
        return res.status(400).send('Por favor, complete todos los campos.');
    }

    try {
        // Leer el archivo de usuarios y verificar si las credenciales coinciden
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

        if (rows.length > 0) {
            return res.status(200).send('Inicio de sesión exitoso.');
        } else {
            return res.status(401).send('Nombre de usuario o contraseña incorrectos.');
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error interno del servidor');
    }
});

// Manejar la solicitud POST para restablecer la contraseña
app.post('/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;

    // Validar que los campos no estén vacíos
    if (!email || !newPassword) {
        return res.status(400).send('Por favor, complete todos los campos.');
    }

    try {
        // Leer el archivo de usuarios y buscar el usuario con el correo proporcionado
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            // El correo no existe en la base de datos
            return res.status(400).send('El correo electrónico no existe.');
        } else {
            // El correo existe, actualizar la contraseña
            await pool.query('UPDATE users SET password = ? WHERE email = ?', [newPassword, email]);
            return res.send('Contraseña restablecida con éxito.');
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error interno del servidor');
    }
});

// Configurar el servidor HTTPS
const server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app);

// Iniciar el servidor
server.listen(port, () => {
    console.log(`Servidor HTTPS iniciado en el puerto ${port}`);
});