var express = require('express');
var app = express();
var url = require('url');
var mysql = require('mysql');
var template = require('./template.js');
const popup = require('node-popup');
// DB Settings
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'audgns9809',
  database : 'codinglab',
});
db.connect();
// Parse Settings
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(express.static('public'));
// Main Page
app.get('/', (req, res) => {
  signin = 0;
  db.query(`SELECT id, title, DATE_FORMAT(datetime, '%y-%m-%d') AS datetime FROM post`, (err, topics) => {
    var list = `<br>`;
    if (err) throw err;
    topics.forEach((elem) => {
      list = `<a href="/posting?id=${elem.id}" class="posting-items">
                <div class="title">${elem.title}</div>
                <div class="datetime">${elem.datetime}</div>
              </a>` + list
    });
    var main = template.main(list);
    var render = template.basic(main);
    res.send(render)
  })
});
// Post Writing Page
app.get('/write', (req, res) => {
    var write = template.write();
    var render = template.basic(write);
    res.send(render)
});
// Posting Page
app.get('/posting', (req, res) => {
  var queryData = url.parse(req.url, true).query;
  db.query(`SELECT id, title, content FROM post WHERE id=${queryData.id}`, (err, topics) => {
    if (err) throw err;
    var posting = template.top();
    posting = posting + `<h1 style="font-size: 2.5rem; display: block; font-size: 2em; font-weight: bold;">${topics[0].title}</h1>`;
    posting = posting + `<div style="width: 100%; height: 1px; margin: 50px 0; background-color: lightgray;"></div>`;
    posting = posting + topics[0].content;
    posting = posting + template.bottom();
    render = template.basic(posting);
    res.send(render);
  })
});
// Post Uploading Process
app.post('/post', (req, res) => {
  var title = req.body.title;
  var content = req.body.editordata;

  db.query(`INSERT INTO post(title, content, datetime) VALUES (?, ?, DATE_FORMAT(now(), '%Y-%m-%d'))`, [title, content], (err, topics) => {
    if (err) throw err;
    res.redirect('/');
  })
});
// Set Port
const PORT = 3000
app.listen(PORT);
