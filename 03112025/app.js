const express = require('express');
const path = require('path');

//rutas
const pagesRouter = require('./routes/pages');

const app = express();
const port = 3025;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pagesRouter);

app.get('/', (req, res) => {
  res.redirect('/page1');
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});

