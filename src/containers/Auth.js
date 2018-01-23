import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleAuthGoogle } from '../actions';

const Auth = ({ message, handleAuth }) => (
  <div className="Auth">
    <h1 className="Auth-message">{message}</h1>
    <button className="Auth-btn" onClick={handleAuth}>Click me</button>
  </div>
);

Auth.propTypes = {
  message: PropTypes.string.isRequired,
  handleAuth: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = {
  handleAuth: handleAuthGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
