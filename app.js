const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening at http://localhost:${port}`);
});
