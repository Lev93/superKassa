import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import * as actions from '../../actions';

class App extends Component {
  clickHandler = () => {
    this.props.changeButtonState();
  }

  render() {
    const buttonClasses = [
      'app__button',
      this.props.buttonState ? 'app__button--on' : 'app__button--off',
    ];
    return <div className="app">
      <button className={buttonClasses.join(' ')} onClick={this.clickHandler}>
        {this.props.buttonState ? 'ON' : 'OFF'}
      </button>
    </div>;
  }
}

const mapStateToProps = (state) => {
  const props = {
    buttonState: state.buttonState,
  };
  return props;
};

const actionCreators = {
  changeButtonState: actions.changeButtonState,
};

App.propTypes = {
  buttonState: PropTypes.bool,
  changeButtonState: PropTypes.func,
};

export default connect(mapStateToProps, actionCreators)(App);
