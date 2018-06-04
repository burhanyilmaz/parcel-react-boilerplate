import { ACTION_CHANGE_COUNTER } from '../constants';

const INITIAL_STATE = {
    counter: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_CHANGE_COUNTER:
            return { ...state, counter: action.payload.counter };
        default:
            return state;
    }
}