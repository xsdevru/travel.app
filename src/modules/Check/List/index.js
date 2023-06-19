import React from 'react';
import {Link} from "react-router-dom";
import './style.css';




export function CheckList(props) {
    let data = props.appData;
    data.title="Чек Лист";
    props.setAppData(data);

    return (
        <React.Fragment>
            ЧекЛист
        </React.Fragment>
    )
}