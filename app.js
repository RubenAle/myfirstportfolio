const emailButton = document.getElementById('copy')
emailButton.addEventListener('click', ()=>{
    const emailAddress = 'tojsumpango@gmail.com'
    navigator.clipboard.writeText(emailAddress);
    emailButton.innerHTML= 'Copied!'
})



// Initialize and add the map
let map;

async function initMap() {
  // The location of Tigre
  const position = { lat:14.634915, lng: -90.506882 };
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  console.log('estoy funcionando');
  
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Tigre
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Tigre
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Mi Ubicacion",
    
  });
}

initMap();