import { combineReducers } from 'redux';
import { todos, visibilityFilter} from './todos/todo';
import { selectedReddit, postsByReddit} from './feeds/feed';
import { forecastWeather } from './weather/weather';
import { auth } from './authentication/auth';
import { widgets } from './widgets/widget';
import { ui } from './ui/ModalSignIn';


const Reducer = combineReducers({
  visibilityFilter,
  todos,
  selectedReddit,
  postsByReddit,
  forecastWeather,
  auth,
  ui,
  widgets
});

export default Reducer;
