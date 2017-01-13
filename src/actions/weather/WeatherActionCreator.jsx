import fetch from 'isomorphic-fetch'

export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export const fetchWeatherIfNeeded = () => (dispatch) => {
  return dispatch(fetchForecasts())
}

// TODO: To get lat/lng info from user
//       Error handling
const fetchForecasts = () => dispatch => {
  dispatch(requestWeather())
  return fetch(`https://api.darksky.net/forecast/3f74bbcdd7043616080d6b844c97c015/37.5665,126.9780`)
    .then(response => response.json())
    .then(json => dispatch(receiveWeather(json)))
}

export const requestWeather = () => ({
  type: REQUEST_WEATHER
})

export const receiveWeather = (json) => ({
  type: RECEIVE_WEATHER,
  forecast: json.hourly.summary,
  receivedAt: Date.now()
})
