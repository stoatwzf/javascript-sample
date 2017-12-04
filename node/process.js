var spawn = require('child_process').spawn,
	ls = spawn('ls', ['-a']);

ls.stdout.on('data', function (data){
	console.log(data.toString());
});
ls.stderr.on('data', function (data){
	console.log(data);
});
ls.on('exit', function (code){
	console.log(code);
});