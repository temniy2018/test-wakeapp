import React from 'react';
import s from '../styles/Header.module.css';
import logo from '../img/logo.svg';

class Header extends React.Component {
    render() {
        return(
            <header>
                <div className={s.header_left}>
                    <img src={logo} alt="logo" />
                    <a href="#">LOBBY</a>
                    <a href="#">CATEGORIES</a>
                    <a href="#">PROMOTIONS</a>
                    <a href="#">TOURNAMENTS</a>
                </div>
                <div className={s.header_right}>
                    <a href="#" className={s.header_right_login}>LOGIN</a>
                    <a href="#" className={s.header_right_register}>REGISTER</a>
                </div>
            </header>
        )
    }
}

export default Header;