var http = require('http');
var fs = require('fs');

// 서버 생성
var app = http.createServer((request, response) => {
  var url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});

// 3000번 포트를 통해 서버 실행
app.listen(80);