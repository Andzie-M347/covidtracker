import React from 'react';
import { RiVirusLine} from 'react-icons/all';

function StatusBox({title, total, cases, deaths}) {

    // const numberWithCommas = (value) => {
    //     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    // }

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
