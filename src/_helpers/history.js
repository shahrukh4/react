import createHistory from 'history/createBrowserHistory';
import {createMemoryHistory} from 'history';

export const history = typeof window === 'undefined' ? createMemoryHistory() : createHistory();