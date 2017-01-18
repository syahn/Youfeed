import React, { Component } from 'react';

import { fetchWeatherIfNeeded } from '../../actions/weather/WeatherActionCreator';

class ViewWeather extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWeatherIfNeeded());
  }

  render() {
    const { forecast, receivedAt } = this.props;
    return (
      <div className="card card__weather">
        <iframe id="forecast_embed"
                type="text/html"
                frameBorder="0"
                height="200"
                width="100%"
                src="http://forecast.io/embed/#lat=37.5665&lon=126.9780&name=Seoul&font=Roboto&units=uk">
        </iframe>
        <div>{forecast}</div>
        <span className="time__weather">{new Date(receivedAt).toLocaleTimeString()}</span>
      </div>
    );
  }
}

export default ViewWeather;
