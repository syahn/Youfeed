import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import ViewWeather from '../../components/weather/ViewWeather';
import {forecastsByDark} from '../../reducers/weather/weather';


const mapStateToProps = state => {
  const { forecastWeather } = state

  return {
    forecast: forecastWeather["forecast"],
    receivedAt: forecastWeather["receivedAt"],

  }
}

export default connect(mapStateToProps)(ViewWeather)
