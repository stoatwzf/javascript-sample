var mongodb = require('mongodb'),
	dbServer = new mongodb.Server('localhost', 27017, {
		auto_reconnect: true
	}),
	db = new mongodb.Db('mydb', dbServer, {w: 1});

db.open(function (err, conn){
	db.collection('users', function (err, collection){
		collection.insert({
			name: 'wzf',
			email: 'email@yahoo.com',
			tel: 15222
		}, function (err, result){
			console.log(result);
			db.close();
		});
	});
});