var net = require('net');

var req = 'GET /favicon.ico HTTP/1.1\
Host: localhost:3000\
Connection: keep-alive\
Pragma: no-cache\
Cache-Control: no-cache\
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36\
Accept: */*\
 Referer: http://localhost:3000/cat.gif\
 Accept-Encoding: gzip, deflate, sdch\
 Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,de;q=0.2\
 Cookie: org.cups.sid=7d071419f7075cd733ab353e8d147080; _csrf=07a076fd58298e7cb1862d0d3bad56f3013291709e36c785bcd4995981e70cd3a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22Vx_pS8ozge5VSnFE8jXO5VlZ2x1gZbIg%22%3B%7D; PHPSESSID=h09h32q5l87rgd87d0v1s6hhi4; DWRSESSIONID=l6lstUIbae1SARkaKYIrBrwyZOk; connect.sid=s%3A0VZl5MiHG7zywkV7Jt55RLJxfTyXEjfC.bSYHhNpTT10IzW5%2Fiq2heYgbgiT7W9owoVl1CZjp%2FfE; __ngDebug=false';
