import React, {useState, useEffect} from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import StatusBox from '../StatusBox';
import { GiWireframeGlobe } from 'react-icons/all';
import Sidebar from '../Sidebar';
import Map from '../Map';
import {sortData, numberWithCommas  } from '../../helpers';
import "leaflet/dist/leaflet.css";
import '../../assets/styles/main.css';



function Dashboard() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('global');
  const [countryInfo, setCountryInfo] = useState({});
  const [sidebarData, setSidebarData] = useState([]);
  const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796});
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [affected, setAffected] = useState("cases");
  const [global, setGlobal] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  

  useEffect( () => {
    const getCountries = async () => {

      setLoadingData(true);

      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then(data => {
          const countries = data.map( (country)  => (
            {
              name: country.country,
              value: country.countryInfo.iso3,
              flag: country.countryInfo.flag,
              
            }
          ));


          const sortedData = sortData(data);
          
          setSidebarData(sortedData.splice(0, 10));
          setCountries(countries);
          setMapCountries(data);

          setLoadingData(false)
      })
      .catch(err => {
        console.error(err);
      });

    }

    getCountries();
   }, []);

   useEffect( () => {
      fetch('https://disease.sh/v3/covid-19/all')
          .then((response) => response.json())
          .then(data => {
              setCountryInfo(data);
              setGlobal(data.cases)
          })
          .catch(err => {
            console.error(err);
          })
   }, []);


   const handleCountryChange = async (e) => {
      const countryName = e.target.value;
      setCountry(countryName);

      const url = countryName === 'global' ? 'https://disease.sh/v3/covid-19/all' :
      `https://disease.sh/v3/covid-19/countries/${countryName}`;


      await fetch(url)
      .then(response => response.json())
      .then(data => {
          setCountry(countryName);
          setCountryInfo(data);

          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(6);
      })
      .catch(err => {
          console.error(err);
        })
   };


    return (
        <>
        {/* Intro section */}
        <section className="status-section">
          <div className="status-section__row">
              <div className="status-box">
                <div className="status-box__icon">
                  <span> < GiWireframeGlobe /> </span>
                </div>
                <div className="status-box__content">
                   <h4 className="status-box__content--title">Stats Overview</h4>
                  <FormControl>
                    <Select value={country} onChange={handleCountryChange}>
                      <MenuItem value="global">Global</MenuItem>
                      {countries.map( (country, index) => {
                        return <MenuItem key={index} value={country.value}>{country.name} {country.updated} </MenuItem>
                      })}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <StatusBox title="Total Covid-19 Cases" total={ numberWithCommas(countryInfo.cases)} />
              <StatusBox title="Total Recovered" total={ numberWithCommas(countryInfo.recovered)} />
              <StatusBox title="Total Deaths" total={ numberWithCommas(countryInfo.deaths)} />
          </div> 
        </section>

        {/* main content */}

        {loadingData ? 
        <div className="spinner">
          <div className="spinner__center"></div>
        </div> :
        <section className="stats-section">
          <div className="stats-section__row">
          <aside className="stats-section__left">
            <Sidebar countries={sidebarData} total={countryInfo.cases} global={global} handleCountryChange={handleCountryChange}/>
          </aside>
          <article className="stats-section__right">
             
            <Map center={mapCenter} zoom={mapZoom} countries={mapCountries} affected={affected} setAffected={setAffected} />
          </article>
          </div>
        </section>}

        </>
    )
}

export default Dashboard;
