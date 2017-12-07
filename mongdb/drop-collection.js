var mongodb = require('mongodb'),
	dbServer = new mongodb.Server('localhost', 27017, {
		auto_reconnect: true
	}),
	db = new mongodb.Db('mydb', dbServer, {w: 1});

db.open(function (err, conn){
	db.dropCollection('myCollection', function (err, result){
		if (err){
			console.log(err);
		} else {
			console.log(result);
		}
		db.close();
	});
});