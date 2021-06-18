import React,{useState,useRef} from 'react'
import "../css/Map.css"
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from "../images/icon-location.svg"

const Map = () => {
    const [center, setCenter] = useState({lat:13.084622,lng: 80.248357})
    const ZOOM_LEVEL = 9
    const mapRef= useRef()
    return (
        <div className="maps">
            <MapContainer center={center}
                zoom={ZOOM_LEVEL} ref={mapRef} className="app__map">
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                 <Marker position={center} icon={L.icon({ iconUrl:"../images/icon-location.svg" })} />
            </MapContainer>
        </div>
    )
}

export default Map
