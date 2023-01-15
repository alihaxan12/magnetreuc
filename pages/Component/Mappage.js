import React from 'react'
import Map, { Marker } from 'react-map-gl';
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";



function Mappage() {
const Token= "pk.eyJ1IjoiYWxpcmF6YW5hcXZpIiwiYSI6ImNsY3Z6YXlneDEyb3czd3F0OXMwcTQ5MmcifQ.MKpJk3PxcGoxELCATOffdg"

    return <Map
    mapboxAccessToken = {Token}
    initialViewState={{
      longitude: -2.213981709043007,
      latitude:53.471299067670785,
      zoom: 15
      
    }}
    
    style={{ width: "100%", height: "100%",  }}
    
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >

<Marker
longitude= "-2.213981709043007"
latitude="53.471299067670785 "

/>

  </Map>
}

export default Mappage;