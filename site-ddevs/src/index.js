import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import '../src/CSS/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
