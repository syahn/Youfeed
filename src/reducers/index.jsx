import { combineReducers } from 'redux'
import { todosReducer, visibilityReducer} from './todos/todo'
import { selectedReddit, postsByReddit} from './feeds/feed'
import { forecastWeather } from './weather/weather'


const Reducer = combineReducers({
  visibilityFilter : visibilityReducer,
  todos : todosReducer,
  selectedReddit,
  postsByReddit,
  forecastWeather
})

export default Reducer
