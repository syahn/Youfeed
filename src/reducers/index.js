import { combineReducers } from 'redux';
import { todos } from './todos/todo';
import { selectedReddit, postsByReddit} from './feeds/feed';
import { postsByHackerNews } from './feeds/hackernews';
import { postsByMedium } from './feeds/medium';
import { postsByTechmeme } from './feeds/techmeme';
import { postsByBehance } from './feeds/behance';
import { postsByDribble } from './feeds/dribble';
import { forecastWeather } from './weather/weather';
import { auth } from './authentication/auth';
import { widgets } from './widgets';
import { memo  } from './memo';
import { ui } from './ui/ModalSignIn';

const Reducer = combineReducers({
  auth,
  todos,
  memo,
  selectedReddit,
  postsByReddit,
  postsByHackerNews,
  postsByMedium,
  postsByBehance,
  postsByDribble,
  postsByTechmeme,
  forecastWeather,
  ui,
  widgets
});

export default Reducer;
