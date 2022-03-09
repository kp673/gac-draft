import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parse from 'parse';


Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'sRjlTukJ2ph5XAgrF5OmbIoibhk17N4JAOJb1wgb', // This is your Application ID
  '0Esq6dKZqpiBT80LlRKh5deHH9YJcv4iEuBjmzFx');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);