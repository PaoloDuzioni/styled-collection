import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import Theme from './config/theme';
import GlobalStyle from './config/globalStyles';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        {/* Theme available in all styled components */}
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {/* 
            Theme available to normal components passed
            like a normal prop
            */}
            <App theme={Theme} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
