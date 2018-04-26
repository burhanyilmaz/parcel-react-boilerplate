import React from 'react';
import { Route , BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ParcelHome } from '../../scenes/Parcel/index';

export default(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={ParcelHome} />
            </div>
        </BrowserRouter>
    </Provider>
);