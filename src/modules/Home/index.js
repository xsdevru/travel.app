import React from 'react';
import {Link} from "react-router-dom";
import './style.css';
export function Home(props) {

    let data = props.appData;
    //data.title="Приложение";
    //props.setAppData(data);

    return (
        <React.Fragment>
            <div className='block-start-search'>
                <div className='wrapper-side-margin'>
                <Link className="q" to="/search">Куда планируете поездку?</Link>
                <div className='links'>
                    <Link className="quickLink" to="/search">Москва</Link>
                    <Link className="quickLink" to="/search">Калининград</Link>
                    <Link className="quickLink" to="/search">Алтай</Link>
                    <Link className="quickLink" to="/search">Кипр</Link>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}