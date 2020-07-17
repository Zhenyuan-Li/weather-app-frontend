import { combineReducers } from 'redux';

import navigation from './navigation';
import weather from './weather';

export default combineReducers({
  navigation,
  weather,
});
