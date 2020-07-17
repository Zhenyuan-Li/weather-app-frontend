import { Action } from 'redux';
import { isType } from 'typescript-fsa';

import { setSearchValue, toggleUnit } from '../actions/navigation';

export type navigationState = {
  readonly search: string;
  readonly unit: 'c' | 'f';
};

const initialState: navigationState = {
  search: '',
  unit: 'c',
};

const navigation = (
  state: navigationState = initialState,
  action: Action
): navigationState => {
  if (isType(action, setSearchValue)) {
    return {
      ...state,
      search: action.payload.value,
    };
  }

  if (isType(action, toggleUnit)) {
    const unit = state.unit === 'c' ? 'f' : 'c';

    return {
      ...state,
      unit,
    };
  }

  return state;
};

export default navigation;
