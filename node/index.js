var http = require('http'),
	fs = require('fs');

http.createServer(function (req, res){
	var stream = fs.createReadStream('index.html');

	stream.on('error', function (err){
		res.statusCode = 500;
		res.end(String(err));
	});
	res.writeHead(200, {
		'Content-type': 'text/html'
	});
	stream.pipe(res);
}).listen(8000);
console.log('Server running on port 8000.');