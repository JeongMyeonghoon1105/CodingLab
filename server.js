var express = require('express');
var app = express();
var url = require('url');
var mysql = require('mysql');
var template = require('./template.js');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'codinglab',
  password : '!Codinglab1122@',
  database : 'codinglab'
});
db.connect();

var bodyParser = require('body-parser');
const { summernote } = require('./template.js');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(express.static('public'));

var signin = 0;

// 메인 페이지
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
// 게시물 작성 페이지
app.get('/write', (req, res) => {
    var write = template.summernote();
    var render = template.basic(write);
    res.send(render)
});
// 게시물 페이지
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
// 게시물 업로딩 프로세스
app.post('/post', (req, res) => {
  var title = req.body.title;
  var content = req.body.editordata;

  db.query(`INSERT INTO post(title, content, datetime) VALUES (?, ?, DATE_FORMAT(now(), '%Y-%m-%d'))`, [title, content], (err, topics) => {
    if (err) throw err;
    res.redirect('/');
  })
});
// 로그인 페이지
app.get('http://xn--2q1byy48co33bttb.com/signin', (req, res) => {
  if (signin == 0){
    res.sendFile(__dirname + "/public/html/signin.html");
  } else {
    res.redirect('/');
  }
});
// 로그인 프로세스
app.post('/signin_process', (req, res) => {
  db.query(`SELECT pw FROM pw WHERE id=1`, (err, topics) => {
    if (err) throw err;
    var password = req.body.password;
    if (topics[0].pw == password) {
      signin = 1;
      res.redirect('/write');
    } else {
      res.redirect('/signin');
    }
  })
});
// 포트 지정 및 Listen
const PORT = 3000
app.listen(PORT);

// $ npm install query-string
// $ npm install mysql
// $ npm install --save body-parser
