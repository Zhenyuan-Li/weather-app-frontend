import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { render } from '@testing-library/react';

import App from './App';
import rootReducer from './store/reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getByText('Powered by React & TypeScript');
  expect(linkElement).toBeInTheDocument();
});
