import {useState,useRef} from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "./map.css"
import LocationOnIcon from '@material-ui/icons/LocationOn'; 

export const icon = new Icon({
  iconUrl:<LocationOnIcon/>,
  iconSize: [25, 25]
});

export default function Map() {
    const [center, setCenter] = useState({lat:13.084622,lng: 80.248357})
    const ZOOM_LEVEL = 9
    const mapRef= useRef()
    return (
        <>
            <MapContainer center={center}
                zoom={ZOOM_LEVEL} ref={mapRef} className="map">
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                 <Marker position={center} icon={icon} />
            </MapContainer>
        </>
    )
}
