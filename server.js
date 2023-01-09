var express = require('express');
var app = express();
var url = require('url');
var mysql = require('mysql');
var template = require('./template.js');
var details = require('./details.js');
var authRouter = require('./auth');
var authCheck = require('./authCheck.js');
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
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
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
        list = `<div class="posting-items">
                  <div class="title">
                    <i class="fa-solid fa-trash" onclick=location.href='/delete?id=${queryData.id}'></i>
                    &nbsp;
                    <i class="fa-solid fa-pen-to-square" onclick=location.href='/edit?id=${queryData.id}'></i>
                    &nbsp;
                    <a href="/posting?id=${elem.id}" style="text-decoration: none;">${elem.title}</a>
                  </div>
                  <div class="datetime">${elem.datetime}</div>
                </div>` + list
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
      var render = template.html(template.body("toggleMainPopup()", template.basic("transparent", "", content)))
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
      var render = template.html(template.body("toggleMainPopup()", template.basic("transparent", "", content)))
      res.send(render)
    })
  }
});
// Post Writing Page
app.get('/write', (req, res) => {
    var write = template.write();
    var render = template.html(template.body("", template.basic("#212529", "display: none;", write)))
    res.send(render)
});
// Posting Page
app.get('/posting', (req, res) => {
  var queryData = url.parse(req.url, true).query;
  db.query(`SELECT id, title, content FROM post WHERE id=${queryData.id}`, (err, topics) => {
    if (err) throw err;
    var render = template.html(template.body("", template.basic("#212529", "display: none;", template.post(topics[0].title, topics[0].content))))
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
  console.log(queryData.id);
  req.on('end', () => {
    db.query(`DELETE FROM post WHERE id='${queryData.id}'`, (err) => {
      res.redirect('/');
    });
  });
});
// Post Update Process
app.get('/edit', (req, res) => {
  var queryData = url.parse(req.url, true).query;
  req.on('end', () => {
    db.query(`DELETE FROM post WHERE id='${queryData.id}'`, (err) => {
        if (err) throw err;
        var title = req.body.title;
        var content = req.body.editordata;
        db.query(`INSERT INTO post(title, content, datetime) VALUES (?, ?, DATE_FORMAT(now(), '%Y-%m-%d'))`, [title, content], (err, topics) => {
          if (err) throw err;
          res.redirect('/');
        })
      }
    )
  });
});
// Set Port
const PORT = 3000
app.listen(PORT);
