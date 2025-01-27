const express = require('express');
const dotenv = require('dot');
const path = require('path');
dotenv()
const app = express();
const port = 3000;

console.log(process.env.HUMATA_API_KEY)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
