import React from 'react';
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import iconBack from "./images/back.svg";
import iconNotify from "./images/notify.svg";
import iconMore from "./images/more.svg";
import iconGeo from "./images/mappin.svg";

export function Header(props) {


    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="header">
            {(location.pathname !== '/') &&
                <div onClick={() => navigate(-1)} className="icon back" >
                    <img src={iconBack} />
                </div>
            }
            {(location.pathname === '/') &&
                <React.Fragment>
                    <div className="icon geo">
                        <img src={iconGeo} />
                    </div>
                    <div className="title">
                        {props.geoTitle}
                    </div>
                </React.Fragment>
            }
            {(location.pathname !== '/') &&

                <div className="title">{props.appData.title}</div>

            }


            <div className="icon notify">
                <img src={iconNotify} />
            </div>
            <div className="icon menu">
                <img src={iconMore} />
            </div>
        </div>
    )
}