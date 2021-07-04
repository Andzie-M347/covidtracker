import React, { useEffect} from 'react';
import { RiVirusLine} from 'react-icons/all';

function StatusBox({title, total}) {
    // const [data, setData] = useState([]);

    useEffect(() =>{
        const last20Days = async() => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }


        last20Days();
     
    }, []);


    return (
        <div className="status-box">
            <div className="status-box__icon">
                <span> 
                    <RiVirusLine />
                </span>
            </div>
            <div className="status-box__content">
                <h4 className="status-box__content--title">{title}</h4>
                <div className="status-box__content__case">
                      <strong> {total} </strong>  
                </div>
                {/* Progress */}
            </div>
        </div>
    )
}

export default StatusBox;
