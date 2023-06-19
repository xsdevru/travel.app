import React from 'react';
import {Link} from "react-router-dom";
import './style.css';




export function LocationDetail(props) {
    let data = props.appData;
    data.title="Локация";
    props.setAppData(data);

    return (
        <React.Fragment>
            Детальная локация
        </React.Fragment>
    )
}