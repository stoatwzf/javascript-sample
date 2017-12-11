(function (){
	var _isMobile = isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch;
	
	if (_isMobile){
		switch (window.orientation){
			case 0:
			case 180:
				console.log('vertical');
				break;
			case 90:
			case -90:
				console.log('hertical');
				break;
		}
	}
	if (window.matchMedia('(max-device-width: 480px)').matches){
		console.log('480')
	}
})();
$(function (){
	$('p:nth-of-type(2)')[0].addEventListener('touchstart', function (e){
		// alert(e.touches.length);
		var _x = e.touches[0].pageX,
			_y = e.touches[0].pageY,
			_x1 = e.touches[1].pageX,
			_y1 = e.touches[1].pageY;

		$('p:last-of-type').html('(' + _x + ',' + _y + ')' + ',(' + _x1 + ',' + _y1 + ')');
	});
});