import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../../actions/weather/WeatherActionCreator';


export const forecasts = (state = {isFetching: false}, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_WEATHER:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};


export const forecastWeather = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER:
    case REQUEST_WEATHER:
      return {
        forecast: action.forecast,
        receivedAt: action.receivedAt
      };
    default:
      return state;
  }
};
