import React from "react";
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
                    <li><a href="/">Item <br/> Information</a></li>
                    <li><a href="/">Kcal <br/> Calculator</a></li>
                    <li><a href="/">Item3</a></li>
                    <li><a href="/">Item4</a></li>
                    <li><a href="/">Item5</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;