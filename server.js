var express = require('express');
var fs = require('fs');
var app = express();

// $ npm install --save body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get('/write', (req, res) => {
  res.sendFile(__dirname + "/public/html/writing.html");
});

app.get('/posting', (req, res) => {
  res.sendFile(__dirname + "/public/List/post.html");
});

app.post('/post', (req, res) => {
  var text = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>동탄코딩랩학원</title>
    <!-- Style -->
    <link rel="stylesheet" href="/css/styles.css">
  </head>
  <body style="background-color: background-color: rgb(238, 238, 238);">
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container" id="posting">
          <a class="navbar-brand" href="/">
            Coding lab
          </a>
      </div>
  </nav>
  <div class="container" style="background-color: white; margin-top: 5rem">`
  text = text + req.body.editordata;
  text = text + `
  </div>
  </body>
  </html>`;

  filePath = __dirname + '/public/List/post.html';

  fs.writeFileSync(filePath, text);
  res.redirect('/');
});

const PORT = process.env.PORT || 3000
app.listen(PORT);
