import React from 'react';
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";


const casesTypeColors = {
  cases: {
    hex: "#FF3E29",
    // rgb: "rgb(204,16,52)",
    // half_op: "rgba(204,16,52,0.5)",
    mulitiplier: 800,
  },

  recovered: {
    hex: "#7DD71D",
    // rgb: "rgb(125,215,29)",
    // half_op: "rgba(125,215,29,0.5)",
    mulitiplier: 1200,
  },

  deaths: {
    hex: "#C0C0C0",
    // rgb: "rgb(251,68,67)",
    // half_op: "rgba(251,68,67,0.5)",
    mulitiplier: 2000,
  },
};

export const sortData = (data) => {
   const sortedData = [...data]; 
   return sortedData.sort((a, b) => a.cases < b.cases ? 1 : -1); 
};


export const showDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.54}
      
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
       
      }}
      radius={
        Math.sqrt(country[casesType] / 10) *
        casesTypeColors[casesType].mulitiplier
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
                <div className="popup__confirmed-cases">
                  Cases: {numeral(country.cases).format("0,0")}
                </div>
                <div className="popup__recovered">
                  Recovered: {numeral(country.recovered).format("0,0")}
                </div>
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
