import { combineReducers } from 'redux';
import { todos } from './todos/todo';
import { selectedReddit, postsByReddit} from './feeds/reddit';
import { postsByRSS} from './feeds/rssPosts';
import { postsByHackerNews } from './feeds/hackernews';
import { postsByMedium } from './feeds/medium';
import { postsByTechmeme } from './feeds/techmeme';
import { postsByBehance } from './feeds/behance';
import { postsByDribble } from './feeds/dribble';
import { forecastWeather } from './weather/weather';
import { subscription } from './feeds/rss';
import { auth } from './authentication/auth';
import { widgets } from './widgets';
import { memo } from './memo';
import { taste } from './taste';
import { ui } from './ui/ModalSignIn';

const Reducer = combineReducers({
  auth,
  todos,
  memo,
  taste,
  selectedReddit,
  postsByReddit,
  postsByHackerNews,
  postsByMedium,
  postsByBehance,
  postsByDribble,
  postsByTechmeme,
  postsByRSS,
  forecastWeather,
  subscription,
  ui,
  widgets
});

export default Reducer;
