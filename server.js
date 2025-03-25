const express = require('express');
const app = express();
console.log("hello i am here");
app.get('/', (req, res) => res.send('Hello from git -> jenkins -> Node.js Backend 2025'));
app.listen(3000, () => console.log('Server running on port 3000')); 