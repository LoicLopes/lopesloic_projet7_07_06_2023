import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/Main.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={{ 
      fontSize : 55,
      width : 200,
      height : 80,
      backgroundColor : "red" ,
      border : "3px  solid blue"
    }}>test da page index</h1>
    <App />
  </React.StrictMode>
);

