import { combineReducers } from 'redux';
import { todos } from './todos/todo';
import { selectedReddit, postsByReddit} from './feeds/feed';
import { postsByHackerNews } from './feeds/hackernews';
import { forecastWeather } from './weather/weather';
import { auth } from './authentication/auth';
import { widgets } from './widgets';
import { memo  } from './memo';
import { ui } from './ui/ModalSignIn';


const Reducer = combineReducers({
  todos,
  selectedReddit,
  postsByReddit,
  postsByHackerNews,
  forecastWeather,
  auth,
  memo,
  ui,
  widgets
});

export default Reducer;
