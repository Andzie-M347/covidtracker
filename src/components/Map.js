import React from 'react';
import {MapContainer, TileLayer, useMap} from 'react-leaflet';
import { showDataOnMap } from '../helpers';
import './Map.css';

function Map({countries, casesType, center, zoom}) {
    function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

    return (
        <div className="map">
            <h4 className="map__title">Covid-19 Infected Areas</h4>
             <MapContainer 
             center={center} 
             zoom={zoom} 
             cases={casesType}
             scrollWheelZoom={false}
             >
            
                 
             <ChangeView center={center} zoom={zoom} />
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {showDataOnMap(countries, casesType)}
             </MapContainer>
        </div>
    )
}

export default Map;
