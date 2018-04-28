import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import routes from '../src/route/route';

const app = document.getElementById('app');

if (app === null) {
    throw new Error("There is no app element.");
}

render(
    routes,
    app,
);