import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import style from './header.module.sass'
import './header.module.css'

const Header = () => {
    let activeLink = 'active'

    return (
        <header className={style.header}>
            <a href="/">
                <img src={logo} alt="logo"/>
            </a>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({isActive}) =>
                                (isActive ? {fontWeight: '700', textDecoration: 'underline'} :
                                    {fontWeight: '400'})}
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bmi-calc"
                            style={({isActive}) =>
                                (isActive ? {fontWeight: '700', textDecoration: 'underline'} :
                                    {fontWeight: '400'})}
                        >BMI Calc
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            style={({isActive}) =>
                                (isActive ? {fontWeight: '700', textDecoration: 'underline'} :
                                    {fontWeight: '400'})}
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            style={({isActive}) =>
                                (isActive ? {fontWeight: '700', textDecoration: 'underline'} :
                                    {fontWeight: '400'})}
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            style={({isActive}) =>
                                (isActive ? {fontWeight: '700', textDecoration: 'underline'} :
                                    {fontWeight: '400'})}
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            style={({isActive}) =>
                                (isActive ? {fontWeight: '700', textDecoration: 'underline'} :
                                    {fontWeight: '400'})}
                        >Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;