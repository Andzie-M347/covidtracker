import React from 'react';
import {MapContainer, TileLayer, useMap} from 'react-leaflet';
import { showDataOnMap } from '../helpers';
import './Map.css';

function Map({countries, affected, center, zoom, setAffected}) {
    function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

    return (
        <div className="map">
    
            
             <MapContainer 
             center={center} 
             zoom={zoom} 
             cases={affected}
             scrollWheelZoom={false}
             >
            
                 
             <ChangeView center={center} zoom={zoom} />
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {showDataOnMap(countries, affected)}
             </MapContainer>
        </div>
    )
}

export default Map;
