import * as actionTypes from '../constants';

export const authReducer = (state = { message: '' }, action) => {
  switch (action.type) {
    case actionTypes.AUTH_BEGIN:
      return Object.assign({}, state, {
        message: action.message,
      });
    case actionTypes.AUTH_SUCCESS:
      return Object.assign({}, state, {
        message: action.message,
      });
    case actionTypes.AUTH_ERROR:
      return Object.assign({}, state, {
        message: action.message,
      });
    default:
      return state;
  }
};
