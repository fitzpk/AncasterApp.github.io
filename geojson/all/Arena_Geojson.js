/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for rinks or arenas
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var arena = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"385 Jerseyville Rd. W",
		"status": "Local",
	    "amenity": "Arena",
	    "phone": "(905)-546-2489",
        "url": "<a href='https://www.hamilton.ca/parks-recreation/drop-in-recreation-programs/morgan-firestone-arena'>Visit the Community Park or Arena</a>",
        "name": "Morgan Fire Stone Arena"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-80.007548,
            43.218000
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"29 Orchard Dr. W",
		"status": "Local",
	    "amenity": "Arena",
	    "phone": "(905)-648-4404",
        "url": "<a href='http://www.arenamaps.com/arenas/1758.htm'>Need Ice time?</a>",
        "name": "Spring Valley Arena"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.997967,
            43.217073
        ]
      }
    }    
  ]
};