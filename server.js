var express = require('express');
var app = express();
var url = require('url');
var mysql = require('mysql');
var template = require('./template.js');
var details = require('./details.js');
// DB Settings
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '!Codinglab1122@',
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
  db.query(`SELECT id, title, DATE_FORMAT(datetime, '%y-%m-%d') AS datetime FROM post`, (err, topics) => {
    var list = `<br>`;
    if (err) throw err;
    topics.forEach((elem) => {
      list = `<a href="/posting?id=${elem.id}" class="posting-items"><div class="title">${elem.title}</div><div class="datetime">${elem.datetime}</div></a>` + list
    });
    var bannerTotal = ""
    var curriculumTotal = ""
    var content = "";
    for (var i = 0; i < 3; i++) {
      bannerTotal += template.banner(details.bgcolor[i], details.color[i], details.font[i], details.title[i], details.subtitle[i], details.src[i], details.id[i], details.opacity[i]);
    }
    for (var i = 0; i < 5; i++) {
      curriculumTotal += template.curriculum(details.img[i], details.main[i], details.sub[i]);
    }
    var contents = [
      template.banners(bannerTotal),
      template.curriculums(curriculumTotal),
      template.gallery(),
      template.consulting(),
      template.notice(list),
      template.adress(),
      template.modals()
    ]
    contents.forEach((value) => {
      content += value;
    })
    var render = template.html(template.body("toggleMainPopup()", template.basic(content)))
    res.send(render)
  })
});
// Post Writing Page
app.get('/write', (req, res) => {
    var write = template.write();
    var render = template.html(template.body("", template.basic(write)))
    res.send(render)
});
// Posting Page
app.get('/posting', (req, res) => {
  var queryData = url.parse(req.url, true).query;
  db.query(`SELECT id, title, content FROM post WHERE id=${queryData.id}`, (err, topics) => {
    if (err) throw err;
    var render = template.html(template.body("", template.basic(template.post(topics[0].title, topics[0].content))))
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
