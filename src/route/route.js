import React from 'react';
import { Route , BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { CounterHome } from '../modules/Counter/index';

export default(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={CounterHome} />
        </BrowserRouter>
    </Provider>
);