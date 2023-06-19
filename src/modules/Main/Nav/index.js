import iconHome from './images/home.svg';
import iconEvents from './images/events.svg';
import iconTravel from './images/compass.svg';
import iconFav from './images/fav.svg';
import iconProfile from './images/profile.svg';
import React from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';

function NavItem(props) {
    return (
        <React.Fragment>
            <img className="icon" src={props.icon} />
            <div className="title" >
                {props.title}
            </div>
        </React.Fragment>
    )
}

export function Nav() {
    return (
        <React.Fragment>
            <NavLink className={({ isActive }) => isActive ? "active item" : "item"} to="/"><NavItem icon={iconHome} title="Главная"  /></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active item" : "item"} to="/events"><NavItem icon={iconEvents} title="События" /></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active item" : "item"} to="/travel"><NavItem icon={iconTravel} title="Маршруты" /></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active item" : "item"} to="/fav"><NavItem icon={iconFav} title="Избранное" /></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active item" : "item"} to="/profile"><NavItem icon={iconProfile} title="Профиль" /></NavLink>
        </React.Fragment>
    )
}