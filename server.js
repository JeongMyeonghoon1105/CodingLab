var http = require('http');
var fs = require('fs');

// 서버 생성
var app = http.createServer((request, response) => {
  if(request.url == '/'){
    url = '/html/index.html';
  }
  if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});

const PORT = process.env.PORT || 3000

// 3000번 포트를 통해 서버 실행
app.listen(PORT);