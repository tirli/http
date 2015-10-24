var net = require('net');
var fs = require('fs');
var mime = require('mime');

function parseRequest(req) {
  var allRequest = req.split('\n');
  var firstLine = allRequest[0].split(' ');

  var reqObj = {
    method: firstLine[0],
    url: firstLine[1],
    protocol: firstLine[2].split('/')[0],
    protocolVersion: firstLine[2].split('/')[1].split('\r')[0],
    headers: {},
  };

  for (var i = 1; i < allRequest.length; i += 1) {
    var splitedLine = allRequest[i].split(/: (.+)/);
    if (splitedLine.length > 1) {
      reqObj.headers[splitedLine[0]] = splitedLine[1];
    }
  }

  return reqObj;
}

function generateResponse(req, type, status) {
  var str = '';

  str += req.protocol + '/' + req.protocolVersion + ' ' + status.code + ' ' + status.text + '\r\n';
  str += 'Content-Type: ' + type + '\r\n';

  return str;
}

var server = net.createServer(function (connection) { //'connection' listener
  connection.on('data', function (data) {
    var req = data.toString();
    console.log(req);
    req = parseRequest(req);
    var path = './public' + req.url;

    try {
      var file = fs.readFileSync(path);
      var type = mime.lookup(path);
      var res = generateResponse(req, type, {code: 200, text: 'OK'});

      connection.write(res + '\r\n');
      connection.write(file);
    } catch (e) {
    }

    connection.end();
  });

});

server.listen(process.env.PORT || 3000, function () { //'listening' listener
  console.log('Server listening on port ' + (process.env.PORT || 3000));
});
