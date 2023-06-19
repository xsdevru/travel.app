import React from 'react';
import {Link} from "react-router-dom";
import './style.css';




export function Chat(props) {
    let data = props.appData;
    data.title="Чат";
    props.setAppData(data);

    return (
        <React.Fragment>
            Чат
        </React.Fragment>
    )
}