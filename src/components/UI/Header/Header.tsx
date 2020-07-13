import React, { FC } from 'react';

import './Header.css';
import logo from '../../../assets/icons/logo.png';

const Header: FC = () => (
  <header>
    <img className="header__logo" src={logo} alt="logo" />
    <h1 className="header__title">Weather Channel</h1>
  </header>
);

export default Header;
