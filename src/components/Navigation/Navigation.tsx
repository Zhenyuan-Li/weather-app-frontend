import React, { FC } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import './Navigation.css';
import * as actions from '../../store/actions/navigation';

const Navigation: FC = () => {
  const search = useSelector(
    (state: RootStateOrAny) => state.navigation.search
  );
  const unit = useSelector((state: RootStateOrAny) => state.navigation.unit);

  const dispatch = useDispatch();
  const onToggleUnit = () => dispatch(actions.toggleUnit());
  const onSetSearchValue = (value: string) =>
    dispatch(actions.setSearchValue({ value }));
  const onFetchWeather = (city: string) => dispatch(actions.fetchWeather(city));

  const handleSearch = () => {
    onFetchWeather(search);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav>
      <div>
        <input
          className="search-input"
          onChange={(event) => onSetSearchValue(event.target.value)}
          onKeyPress={() => handleKeyPress}
          value={search}
        />
        <button className="search-btn" type="button" onClick={handleSearch}>
          <i className="fa fa-search" />
        </button>
        <button className="temp-switch" type="button" onClick={onToggleUnit}>
          <i
            className="fa fa-thermometer-empty temp-switch__icon"
            aria-hidden="true"
          />
          <sup>&deg;</sup>
          {unit.toUpperCase()}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
