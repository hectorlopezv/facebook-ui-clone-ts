import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyles';
import {StateProvider} from './Store/StateContext';
import reducer, {initialState} from './Store/reducer';
ReactDOM.render(
    <React.StrictMode>
    <GlobalStyle />
    <StateProvider initialState={initialState} reducer={reducer}>
       <App />
    </StateProvider>
     

  </React.StrictMode>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
