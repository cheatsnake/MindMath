import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Azeret Mono', monospace;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #0e151c;
  }
  ::-webkit-scrollbar-thumb {
    background: #0fa36a;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #13c581;
  }
}

body {
  background-color: #1c1c1c;
}
`
const theme = {
  colors: {
    dark: '#1c1c1c',
    grey: '#2e2e2e',
    light: '#fff',
    accent: '#0fa36a'
  },
  font: {
    dark: '#fff',
    light: '#000'
  }
}

ReactDOM.render(
    <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Global/>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);