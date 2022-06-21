var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});
app.get('/dimigo', (req, res) => {
  res.sendFile(__dirname + "/public/html/dimigo.html");
});

const PORT = process.env.PORT || 3000
app.listen(PORT);