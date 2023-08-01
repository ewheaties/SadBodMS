import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

// Use createRoot instead of ReactDOM.render
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);