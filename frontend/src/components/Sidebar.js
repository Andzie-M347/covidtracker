import React from 'react';
import { numberWithCommas } from '../helpers';

function Sidebar({countries, global}) {

    return (
        <React.Fragment>
            <table>
                
            <tbody> 
                <tr value="global"  className="sidebar__global"> 
                    <td>
                        <strong> Global </strong>
                    </td>
                    <td>{numberWithCommas(global)}</td>
                </tr> 

                <tr>
                    <td> 
                        <h4 className="sidebar__header"> Top 10 Most affected countries</h4>
                    </td>
                </tr>
                
                {countries.map( (country, index) => {
                    return <React.Fragment key={index} >
                                    
                    <tr className="sidebar">
                        <td >
                            <span className="sidebar__country-flag">
                                <img src={country.countryInfo.flag} alt={country} />
                            </span>
                            <span>
                                <strong> {country.country} </strong>
                            </span>
                        </td>
                        <td>{numberWithCommas(country.cases)}</td>
                    </tr>
                    
                    </React.Fragment>
                })}
            </tbody>
            </table>
        </React.Fragment>
               
          
    )
}

export default Sidebar;
