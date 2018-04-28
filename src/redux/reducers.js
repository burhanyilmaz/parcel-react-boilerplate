import { combineReducers } from 'redux';
import { STATE_PARCEL } from '../scenes/Parcel/constants';
import ParcelReducer from '../scenes/Parcel/reducer/ParcelReducer';

export default combineReducers({
    [STATE_PARCEL]: ParcelReducer,
});