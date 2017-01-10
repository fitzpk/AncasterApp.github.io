/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for driving schools
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */

var edudrive = {
    "type": "FeatureCollection",
    "features": [
     {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"81 Wilson St. W",
		"status": "Local",
	    "amenity": "School",
	    "phone": "(905)-648-4888",
        "url": "<a href='http://www.a1academyofdriving.com/'>Learn to Drive</a>",
        "name": "A1 Academy of Driving"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.990652,
            43.216002
        ]
      }
    }, 
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"1330 Sandhill Dr.",
		"status": "Local",
	    "amenity": "School",
	    "phone": "(905)-547-7769",
        "url": "<a href='http://www.unipol.ca/driving-courses-in-ancaster-schedule-registration/'>Learn to drive</a>",
        "name": "UNIPOL Academy of Driving"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-80.025386,
            43.193465
        ]
      }
    }                            
  ]
};   
