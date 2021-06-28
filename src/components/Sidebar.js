import React from 'react';
// import TextField from '@material-ui/core/TextField';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//     //   margin: theme.spacing(1),
//       width: '100%',
//     },
//   },
// }));

function Sidebar({countries, countryInfo, total}) {
    // const classes = useStyles();

    const numberWithCommas = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }


    return (
        <div>
             {/* <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-helperText"
                    label="Search by country"
                    defaultValue="Default Value"
                    variant="outlined"
                    />
                </form>
            <tr value="global"  className="sidebar__global"> 
               <td >
                   <strong> Global </strong>
                </td>
               <td>  {total} </td>
            </tr> */}
            <table>
                
                    <tbody> 
            {countries.map( (country) => {
                return <React.Fragment>
                                   
                <tr key={country.country} className="sidebar">
                    <td >
                        <span className="sidebar__country-flag">
                            <img src={country.countryInfo.flag} alt={country} />
                        </span>
                        <span>
                            <strong> {country.country} </strong>
                        </span>
                    </td>
                    <td>
                     {numberWithCommas(country.cases)} 
                    </td>
                </tr>
                
                </React.Fragment>
            })}
            </tbody>
            </table>
        </div>
               
          
    )
}

export default Sidebar;
