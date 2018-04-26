import { ACTION_CHANGE_COUNTER } from '../constants';

export const changeCounter = number => (dispatch) => {
    return dispatch({
        type: ACTION_CHANGE_COUNTER,
        payload: {
            counter: number,
        },
    });
}