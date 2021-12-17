import React from "react";
import ReactDOM from "react-dom";
import App from './components/app'
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { createTheme } from '@material-ui/core';

const theme = createTheme({ typography: { fontFamily: ['Mulish'].join(','), }, })

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);