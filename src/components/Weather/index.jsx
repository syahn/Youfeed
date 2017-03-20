import React, { Component, PropTypes } from 'react';

const propTypes = {

};
const defaultProps = {

};

class Weather extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>Weather</div>
    );
  }
}

Weather.propTypes = propTypes;
Weather.defaultProps = defaultProps;

export default Weather;
