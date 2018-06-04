import { combineReducers } from 'redux';
import { STATE_COUNTER } from '../modules/Counter/constants';

import CounterReducer from '../modules/Counter/reducer/CounterReducer';

export default combineReducers({
    [STATE_COUNTER]: CounterReducer,
});