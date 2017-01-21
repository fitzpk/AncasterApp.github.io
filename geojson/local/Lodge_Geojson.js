/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for lodging services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var lodge = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"425 Wilson St. E",
		"status": "Local",
	    "amenity": "Hotel",
	    "phone": "(289)-445-1234",
        "url": "<a href='http://www.thebarracksinn.com/'>Visit The Barracks Inn</a>",
        "name": "The Barracks Inn"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.975163,
            43.229531
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"1075 Wilson St. W",
		"status": "Local",
	    "amenity": "Hotel",
	    "phone": "(905)-648-1821",
        "url": "<a href='https://www.facebook.com/pages/Motel-California/1055806731108677'>Enjoy a night at the Motel California</a>",
        "name": "Motel California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-80.016953,
            43.200242
        ]
      }
    },
    {
      "type": "Feature",
      "id": "3",
      "properties": {
		"address":"902 Shaver Rd.",
		"status": "Local",
	    "amenity": "Hotel",
	    "phone": "(905)-648-0116",
        "url": "<a href='http://theheartofontario.com/operators/view/340/ridgemoor-bed--breakfast#.WEcjchorIxE'>Visit Ridgemoor</a>",
        "name": "Ridgemoor Bed & Breakfast"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-80.007977,
            43.183025
        ]
      }
    }
  ]
};