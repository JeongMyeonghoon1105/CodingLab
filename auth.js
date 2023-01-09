var express = require('express');
var router = express.Router();
var template = require('./template.js');
var mysql = require('mysql');
// DB Settings
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '!Codinglab1122@',
  database : 'codinglab',
});
db.connect();
// Public
router.use(express.static('public'));

// 로그인 화면
router.get('/login', (req, res) => {
  var render = template.html(template.body("", "background-color: rgb(153, 143, 181);", template.signin()))
  res.send(render);
});

// 로그인 프로세스
router.post('/login_process', (req, res) => {
  var password = req.body.pwd;
  if (password) {             // id와 pw가 입력되었는지 확인
    db.query('SELECT * FROM pw WHERE id = ? AND pw = ?', [1, password], function(error, results, fields) {
      if (error) throw error;
      if (results.length > 0) {       // db에서의 반환값이 있으면 로그인 성공
        console.log(req.session);
        req.session.is_logined = true;      // 세션 정보 갱신
        req.session.save(() => {
          res.redirect(`/`);
        });
      } else {              
        res.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); 
        document.location.href="/auth/login";</script>`);    
      }            
    });
  } else {
    res.send(`<script type="text/javascript">alert("비밀번호를 정확히 입력하세요!"); 
    document.location.href="/auth/login";</script>`);    
  }
});

// 로그아웃
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

module.exports = router;