var events = require('events'),
	em = new events.EventEmitter(),
	counter = 0;

em.on('tick', function (){
	counter += 1;
	console.log(counter % 2 ? 'Tick' : 'Tock');
});
setInterval(function (){
	em.emit('tick');
}, 5000);