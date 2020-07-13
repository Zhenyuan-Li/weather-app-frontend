import React, { FC } from 'react';

import './Navigation.css';

const Navigation: FC = () => {
  return (
    <nav>
      <div>
        <input className="search-input" value="" />
        <button className="search-btn" type="button">
          <i className="fa fa-search" />
        </button>
        <button className="temp-switch" type="button">
          <i
            className="fa fa-thermometer-empty temp-switch__icon"
            aria-hidden="true"
          />
          <sup>&deg;</sup>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
