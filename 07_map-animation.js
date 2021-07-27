

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JlYXRmdWxkYWQiLCJhIjoiY2tyNXN4YWIxMzhmbjJ2bW5scWNkZ2ZqeCJ9.HIwDtyrx4yAr8eoegCvQoA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14
  });

  var marker = new mapboxgl.Marker()
    //think that mapboxgl is an expression
    .setLngLat([-71.0927, 42.357575])
    .addTo(map);

  
    

async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}


run();



