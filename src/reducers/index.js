import { combineReducers } from 'redux';
import { todos } from './todos/todo';
import { postsByReddit} from './feeds/reddit';
import { postsByRSS} from './feeds/rssPosts';
import { postsByHackerNews } from './feeds/hackernews';
import { postsByMedium } from './feeds/medium';
import { postsByTechmeme } from './feeds/techmeme';
import { postsByBehance } from './feeds/behance';
import { postsByDribble } from './feeds/dribble';
import { forecastWeather } from './weather/weather';
import { subscription } from './feeds/rss';
import { personalization } from './personalization';
import { auth } from './authentication/auth';
import { widgets } from './widgets';
import { taste } from './taste';
import { ui } from './ui';

const Reducer = combineReducers({
  auth,
  todos,
  taste,
  postsByReddit,
  postsByHackerNews,
  postsByMedium,
  postsByBehance,
  postsByDribble,
  postsByTechmeme,
  postsByRSS,
  forecastWeather,
  subscription,
  personalization,
  ui,
  widgets
});

export default Reducer;
