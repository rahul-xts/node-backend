const express = require('express');
const app = express();
console.log("hello i am here");
app.get('/', (req, res) => res.send('Hello from git -> jenkins -> Node.js Backend.. 2025 thanks!!!'));
app.listen(3000, () => console.log('Server running on port 3000')); 


/*

// Import required modules
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const port = 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',    // Replace with your MySQL username
  password: '',    // Replace with your MySQL password
  database: 'userDB'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session configuration
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Serve static files (for login page)
app.use(express.static('public'));

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      return res.send('Username already taken');
    }

    // Hash the password before saving
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) throw err;

      // Insert the new user into the database
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
        if (err) throw err;
        res.send('Signup successful');
      });
    });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username exists
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.send('User not found');
    }

    const user = results[0];

    // Compare the password with the stored hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        // Start a session for the logged-in user
        req.session.userId = user.id;
        req.session.username = user.username;
        res.send('Login successful');
      } else {
        res.send('Invalid password');
      }
    });
  });
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Error in logging out');
    }
    res.send('Logged out successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
*/