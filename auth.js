var express = require('express');
var router = express.Router();
var template = require('./template.js');
var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '!Codinglab1122@',
  database : 'codinglab',
});
db.connect();

// 로그인 화면
router.get('/login', (request, response) => {
  var html = template.html(template.body("", template.basic("#212529", "display: none;", `
    <h2>로그인</h2>
    <form action="/auth/login_process" method="post">
    <p><input class="login" type="password" name="pwd" placeholder="비밀번호"></p>
    <p><input class="btn" type="submit" value="로그인"></p>
    </form>
  `)))
  response.send(html);
});

// 로그인 프로세스
router.post('/login_process', (request, response) => {
  var password = request.body.pwd;
  if (password) {             // id와 pw가 입력되었는지 확인
    db.query('SELECT * FROM pw WHERE id = ? AND pw = ?', [1, password], function(error, results, fields) {
      if (error) throw error;
      if (results.length > 0) {       // db에서의 반환값이 있으면 로그인 성공
        console.log(request.session);
        request.session.is_logined = true;      // 세션 정보 갱신
        request.session.save(() => {
          response.redirect(`/`);
        });
      } else {              
        response.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); 
        document.location.href="/auth/login";</script>`);    
      }            
    });
  } else {
    response.send(`<script type="text/javascript">alert("비밀번호를 정확히 입력하세요!"); 
    document.location.href="/auth/login";</script>`);    
  }
});

// 로그아웃
router.get('/logout', (request, response) => {
  request.session.destroy((err) => {
    response.redirect('/');
  });
});

module.exports = router;