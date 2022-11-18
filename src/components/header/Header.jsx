import React from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import style from './header.module.sass'

const Header = () => {

    return (
        <header className={style.header}>
            <a href="/">
                <img src={logo} alt="logo"/>
            </a>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/bmi-calc">BMI Calc</a></li>
                    <li><a href="/">Item3</a></li>
                    <li><a href="/">Item4</a></li>
                    <li><a href="/">Item5</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;