import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Questions from './questionbank';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(

    <BrowserRouter>
    <App />
</BrowserRouter>, 

     document.getElementById('root')
);

    