import { combineReducers } from 'redux';

const buttonState = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_BUTTON_STATE': {
      return !state;
    }
    default:
      return state;
  }
};

export default combineReducers({
  buttonState,
});
