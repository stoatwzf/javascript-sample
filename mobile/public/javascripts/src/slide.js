$(function (){
	var hammer = new Hammer(document.getElementById('elham'));

	hammer.get('pinch').set({enable: true});
	hammer.get('rotate').set({enable: true});
	hammer.get('pan').set({direction: Hammer.DIRECTION_ALL});
	hammer.on('pan', function (e){
		alert(e.direction);
	});

	if (!navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function (opt){
			alert(opt.coords.latitude);
		});
	}
	// window.location = 'tel:15224038595'
});
