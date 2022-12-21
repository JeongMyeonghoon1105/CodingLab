var express = require('express');
var app = express();
var url = require('url');
var mysql = require('mysql');
var template = require('./template.js');
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
  db.query(`SELECT id, title, DATE_FORMAT(datetime, '%y-%m-%d') AS datetime FROM post`, (err, topics) => {
    var list = `<br>`;
    if (err) throw err;
    topics.forEach((elem) => {
      list = `<a href="/posting?id=${elem.id}" class="posting-items"><div class="title">${elem.title}</div><div class="datetime">${elem.datetime}</div></a>` + list
    });
    var banners = [
      template.banner("#77D4FD", "", "", "디지털미디어고 준비반 운영", "꾸준한 합격 성과의 디미고 대비 특별 수업과 함께하세요", "../assets/img/main/school.svg", "dimigo-image", "opacity: 0.3;"),
      template.banner("rgb(255, 248, 233)", "color: #54544e;", "font-family: 'Staatliches', 'Arial'; margin: 0;", "SW 특기자 전형 준비반 운영", "코딩랩학원과 함께 생기부를 완성하세요", "../assets/img/main/school.png", "dimigo-image"),
      template.banner("#5c23f9", "", "font-family: 'Staatliches', 'Arial';", "UNITY 특강 운영!", "게임 개발에 도전하세요", "../assets/img/main/game.svg", "unity-image")
    ]
    var curriculums = [
      template.curriculum("assets/img/curriculum/Languages.png", "프로그래밍 언어", "Programming Languages"),
      template.curriculum("assets/img/curriculum/Robot.png", "로봇 & 자율주행차", "Robots & Self Driving Car"),
      template.curriculum("assets/img/curriculum/AI.png", "인공지능", "Artificial Intelligence"),
      template.curriculum("assets/img/curriculum/Web.png", "웹 & 앱 개발", "Web & App"),
      template.curriculum("assets/img/curriculum/Unity.jpg", "게임 개발", "Games"),
    ]
    var bannerTotal = ""
    var curriculumTotal = ""
    var content = "";
    banners.forEach((value) => {
      bannerTotal += value;
    })
    curriculums.forEach((value) => {
      curriculumTotal += value;
    })
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
