import React from 'react';
import {MapContainer, TileLayer, useMap} from 'react-leaflet';
import { showDataOnMap } from '../helpers';
import {VscCircleFilled} from 'react-icons/vsc';

function Map({countries, affected, center, zoom, setAffected}) {
    function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

    return (
      <>
       <header className="map__header">
                <h4 className="map__header--title">Covid-19 Infected Areas</h4>
                <div className="map__header--legend">
                    <div 
                    onClick={(e) => setAffected('cases')}
                    active={affected === 'cases'}
                    >
                        <VscCircleFilled />
                        <span className={affected === 'cases' ? 'active' : 'not-active'}> 
                            <strong >Total Cases </strong>
                        </span>
                    </div>
                    <div 
                    onClick={(e) => setAffected('recovered')}
                    active={affected === 'recovered'}
                    >
                         <VscCircleFilled id="second" />
                         <span className={affected === 'recovered' ? 'active-recovered' : 'not-active'} >
                             <strong> Total Recovered </strong>
                          </span>
                    </div> 
                </div>
            </header>
        <div className="map"> 
             <MapContainer 
             center={center} 
             zoom={zoom} 
             affected={affected}
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
        </>
    )
}

export default Map;
