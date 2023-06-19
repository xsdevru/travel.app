import React from 'react';
import {Link} from "react-router-dom";
import './style.css';




export function CashList(props) {
    let data = props.appData;
    data.title="Расходы";
    props.setAppData(data);

    return (
        <React.Fragment>
            Расходы
        </React.Fragment>
    )
}