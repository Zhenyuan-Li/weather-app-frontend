import React, { FC } from 'react';

import './App.css';
import Weather from './containers/Weather';
import Header from './components/UI/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/UI/Footer/Footer';

const App: FC = () => {
  return (
    <div className="weather-channel__container">
      <Header />
      <Navigation />
      <Weather />
      <Footer />
    </div>
  );
};

export default App;
