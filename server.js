const express = require('express');
const app = express();
console.log("hello i am here 1112");
app.get('/', (req, res) => res.send('Hello from Node.js Backend'));
app.listen(3000, () => console.log('Server running on port 3000'));