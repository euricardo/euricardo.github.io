/**
 * Javascript to handle open street map for property single page.
 */
jQuery( function( $ ) {
	'use strict';

	if( typeof contactMapData !== "undefined" ) {

		if( contactMapData.lat && contactMapData.lng ) {

			var officeLocation = new google.maps.LatLng( contactMapData.lat, contactMapData.lng );

			var mapZoom = 14;
			if( contactMapData.zoom ) {
				mapZoom = parseInt( contactMapData.zoom );
			}

			var contactMapOptions = {
				center : officeLocation,
				zoom : mapZoom,
				scrollwheel : false
			};

			// Setting Google Map Type
			switch (contactMapData.type) {
				case 'satellite':
					contactMapOptions.mapTypeId = google.maps.MapTypeId.SATELLITE;
					break;
				case 'hybrid':
					contactMapOptions.mapTypeId = google.maps.MapTypeId.HYBRID;
					break;
				case 'terrain':
					contactMapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN;
					break;
				default:
					contactMapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
			}

			var contactMap = new google.maps.Map( document.getElementById( "map_canvas" ), contactMapOptions );
			var contactMarker = new google.maps.Marker( {
				position : officeLocation,
				map : contactMap
			} );

		}

	}

} );