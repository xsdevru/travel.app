import React from 'react';
import {Link} from "react-router-dom";
import './style.css';




export function TravelList(props) {
    let data = props.appData;
    data.title="Маршруты";
    props.setAppData(data);

    return (
        <React.Fragment>

            <div className="tabs">
                <div className="tab active">Текущие</div>
                <div className="tab">Будущие</div>
                <div className="tab">Прощедшие</div>
            </div>
            <div className='wrapper-side-margin'>
                <div className="travel-list">
                    <Link className='travel-list-item' to='/travel/element-1'>
                        Element1
                    </Link>
                    <Link className='travel-list-item' to='/travel/element-1'>
                        Element1
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}