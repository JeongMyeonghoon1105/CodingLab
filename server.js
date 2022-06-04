var http = require('http');
var fs = require('fs');
const { normalize } = require('path');

// 서버 생성
var app = (request, response) => {
  var url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
};

var port =  normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

// 3000번 포트를 통해 서버 실행
// app.listen(3000);