/* * * * * * * * * * * * * * * * * * * * *
 * 
 * Local Businesses
 * 
 * GeoJSON features for fire stations and emergency services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var emergency = {
    "type": "FeatureCollection",
    "features": [ 
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"661 Garner Rd. E",
		"status": "Local",
	    "amenity": "Fire",
	    "phone": "(905)-546-2424",
        "url": "<a href='https://www.hamilton.ca/emergency-services/fire/fire-stations'>Visit the Fire Station</a>",
        "name": "Hamilton (Ancaster) Fire Station 20"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.953454,
            43.206845
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"365 Wilson St. W",
		"status": "Local",
	    "amenity": "Fire",
	    "phone": "(905)-546-2424",
        "url": "<a href='https://www.hamilton.ca/emergency-services/fire/fire-stations'>Visit the Fire Station</a>",
        "name": "Hamilton (Ancaster) Fire Station 21"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-80.002205,
            43.208538
        ]
      }
    }
  ]
};