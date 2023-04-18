import React from 'react';
import ReactDOM from 'react-dom/client';
import io from 'socket.io-client';
import App from './App';
import {HashRouter} from "react-router-dom";

const socket = io('http://192.168.3.6:5000');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
    <HashRouter>
        <App/>
    </HashRouter>

);
