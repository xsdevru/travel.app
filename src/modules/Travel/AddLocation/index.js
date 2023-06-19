import React from 'react';
import {Link, useParams} from "react-router-dom";


export function TravelAddLocation(props) {
    const params = useParams();
    let data = props.appData;
    data.title="Добавить";
    props.setAppData(data);

    return (
        <React.Fragment>
            Добавить локацию в путешествие {params.travelId} после {params.prevId}
        </React.Fragment>
    )
}