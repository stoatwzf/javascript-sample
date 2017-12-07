var mongodb = require('mongodb'),
	dbServer = new mongodb.Server('localhost', 27017, {
		auto_reconnect: true
	}),
	db = new mongodb.Db('mydb', dbServer, {w: 1});

db.open(function (err, conn){
	db.collection('newCollection', function (err, collection){
		var count = 0;

		for (var i = 0; i < 5; i += 1){
			collection.insert({
				num: i,
				age: i * 10
			}, function (err, result){
				console.log(result);
				count += 1;
				if (count > 4){
					db.close();
				}
			});
		}
	});
});