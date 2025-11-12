const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hola que tal');
});

const port = 3056;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});