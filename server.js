var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

const PORT = process.env.PORT || 3000
app.listen(PORT);