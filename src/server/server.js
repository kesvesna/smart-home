const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const winston = require('winston');

const app = express();
const db = new sqlite3.Database('sqlite.db'); // In-memory database, change this for a file-based one
const PORT = 5000;
const SECRET_KEY = 'Snusmumrik';

app.use(cors());
app.use(express.json());

const logger = winston.createLogger({
    level: 'info', // Set the log level
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: './src/server/error.log' }) // Log file
    ],
});

// Initialize database
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
});

// Register user
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(500).json({ message: "Empty credentials" });
    }

    db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
        if (user) {
            return res.status(500).json({ message: "User already exists" });
        } else {
            const hashedPassword = bcrypt.hashSync(password, 8);
            const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");

            stmt.run(username, hashedPassword, function (err) {
                if (err) {
                    logger.error(err);
                    return res.status(500).json({ message: "Error registering user." });
                }
                res.status(201).json({ message: "User registered", id: this.lastID, username });
            });

            stmt.finalize();
        }
      });

});

// Login user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
    return res.status(500).json({ message: "Empty password or username" });
    }

    db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {

        if (err || !user) {
            return res.status(404).json({ message: 'Invalid credentials or user not found' });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            logger.error({message: 'Invalid credentials!'});
            return res.status(401).json({ accessToken: null, message: "Invalid credentials!" });
        }

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: 86400 });  // Expires in 24 hours, 86400 seconds
        res.status(200).json({ message: "User logged in", id: user.id, username: user.username, accessToken: token });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
