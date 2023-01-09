var express = require('express');
var app = express();
var url = require('url');
var mysql = require('mysql');
var template = require('./public/js/template.js');
var details = require('./public/js/details.js');
var authRouter = require('./public/js/auth');
var authCheck = require('./public/js/authCheck.js');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
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
const { query } = require('express');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
// Public
app.use(express.static('public'));
// Session
app.use(session({
  secret: '~~~',
  resave: false,
  saveUninitialized: true,
  store:new FileStore(),
}))
// Main Page
app.get('/', (req, res) => {
  // Logged In Status
  if (authCheck.isOwner(req, res)) {
    var queryData = url.parse(req.url, true).query;
    db.query(`SELECT id, title, DATE_FORMAT(datetime, '%y-%m-%d') AS datetime FROM post`, (err, topics) => {
      var list = `<br>`;
      if (err) throw err;
      topics.forEach((elem) => {
        list = template.posting(elem.id, elem.title, elem.datetime) + list
      });
      var bannerTotal = ""
      var curriculumTotal = ""
      var content = "";
      for (var i = 0; i < 4; i++) {
        bannerTotal += template.banner(details.bgcolor[i], details.title[i], details.subtitle[i], details.button[i], details.src[i]);
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
      var render = template.html(template.body("toggleMainPopup()", "", template.basic("transparent", "", content)))
      res.send(render)
    })
  // Logged Out Status
  } else {
    db.query(`SELECT id, title, DATE_FORMAT(datetime, '%y-%m-%d') AS datetime FROM post`, (err, topics) => {
      var list = `<br>`;
      if (err) throw err;
      topics.forEach((elem) => {
        list = `<a href="/posting?id=${elem.id}" class="posting-items"><div class="title">${elem.title}</div><div class="datetime">${elem.datetime}</div></a>` + list
      });
      var bannerTotal = ""
      var curriculumTotal = ""
      var content = "";
      for (var i = 0; i < 4; i++) {
        bannerTotal += template.banner(details.bgcolor[i], details.title[i], details.subtitle[i], details.button[i], details.src[i]);
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
      var render = template.html(template.body("toggleMainPopup()", "", template.basic("transparent", "", content)))
      res.send(render)
    })
  }
});
// Post Writing Page
app.get('/write', (req, res) => {
  var write = template.write("", "");
  var render = template.html(template.body("", "background-color: rgb(153, 143, 181)", write))
  res.send(render)
});
// Posting Page
app.get('/posting', (req, res) => {
  var queryData = url.parse(req.url, true).query;
  db.query(`SELECT id, title, content FROM post WHERE id=${queryData.id}`, (err, topics) => {
    if (err) throw err;
    var render = template.html(template.body("", "", template.basic("#212529", "display: none;", template.post(topics[0].title, topics[0].content))))
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
// Signin Process
app.use('/auth', authRouter);
// Post Delete Process
app.get('/delete', (req, res) => {
  var queryData = url.parse(req.url, true).query;
  db.query(`DELETE FROM post WHERE id='${queryData.id}'`, (err) => {
    res.redirect('/');
  });
});
// Post Update Process
app.get('/edit', (req, res) => {
  var queryData = url.parse(req.url, true).query;
  db.query(`SELECT * FROM post WHERE id='${queryData.id}'`, (err, topics) => {
    if (err) throw err;
    var title = topics[0].title;
    var content = topics[0].content;
    var write = template.write(title, content)
    db.query(`DELETE FROM post WHERE id='${queryData.id}'`, (err) => {
      var render = template.html(template.body("", "background-color: rgb(153, 143, 181)", write))
      res.send(render)
    })
  });
});
// Set Port
const PORT = 3000
app.listen(PORT);
