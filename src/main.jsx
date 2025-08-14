import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import ScrollToHash from './components/ScrollToHash';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<ScrollToHash />

    <App />
    <Toaster/>
  </BrowserRouter>
);
