var init = {
	map: function() {
		var map = new google.maps.Map(document.querySelector('.location__map'), {
			center: {
				lat: 50.4471435,
				lng: 30.5160441
			},
			zoom: 17,
			zoomControl: true,
			panControl: false,
			scrollwheel: false,
			rotateControl: false,
			scaleControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			overviewMapControl: false
		});

		var marker = new google.maps.Marker({
			position: {
				lat: 50.4474271,
				lng: 30.5159097
			},
			map: map
		});
	}
};
