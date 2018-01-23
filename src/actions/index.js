import * as actionTypes from '../constants';

const authBegin = message => ({
  type: actionTypes.AUTH_BEGIN,
  message,
});

const authSuccess = message => ({
  type: actionTypes.AUTH_SUCCESS,
  message,
});

const authError = message => ({
  type: actionTypes.AUTH_ERROR,
  message,
});

const randrange = max => Math.floor(Math.random() * max);

export const handleAuthGoogle = () => (dispatch) => {
  dispatch(authBegin('Processing'));

  if (randrange(2) === 0) {
    dispatch(authSuccess('Successful'));
  } else {
    dispatch(authError('Failed'));
  }
};
