import React from 'react';
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";


const casesTypeColors = {
  cases: {
    hex: "#FF3E29",
    mulitiplier: 800,
  },

  recovered: {
    hex: "#00DB75",
    mulitiplier: 950,
  },

};

export const sortData = (data) => {
   const sortedData = [...data]; 
   return sortedData.sort((a, b) => a.cases < b.cases ? 1 : -1); 
};


export const numberWithCommas = (value) => {
  // return value ?  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';

  return value ? `${numeral(value).format('0.0a')}` : '';
}




export const showDataOnMap = (data, affected) =>
  data.map((country, index) => (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.54}
      
      pathOptions={{
        color: casesTypeColors[affected].hex,
        fillColor: casesTypeColors[affected].hex,
       
      }}
      radius={
        Math.sqrt(country[affected] / 10) *
        casesTypeColors[affected].mulitiplier
      }
    >
      <Popup>
          <div className="popup">
              <div
                className="popup__flag"
                style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
              />

              <article>
                <div className="popup__name"><strong> {country.country} </strong></div>

                {affected === 'cases' ? 
                <div className="popup__confirmed-cases">
                  Cases: {numeral(country.cases).format("0,0")}
                </div> :
                <div className="popup__recovered">
                  Recovered: {numeral(country.recovered).format("0,0")}
                </div> }
                <div className="popup__active">
                  Active: {numeral(country.active).format("0,0")}
                </div>
                <div className="popup__deaths">
                  Deaths: {numeral(country.deaths).format("0,0")}
                </div>
              </article>
        </div>{/* Flag */}
      </Popup>
    </Circle>
  ));
