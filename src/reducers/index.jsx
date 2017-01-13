import { combineReducers } from 'redux'
import { todosReducer, visibilityReducer} from './todos/todo'
import { selectedReddit, postsByReddit} from './feeds/feed'
import { forecastWeather } from './weather/weather';
import { auth } from './authentication/auth';


const Reducer = combineReducers({
  visibilityFilter : visibilityReducer,
  todos : todosReducer,
  selectedReddit,
  postsByReddit,
  forecastWeather,
  auth
})

export default Reducer
