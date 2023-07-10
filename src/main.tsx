import React from 'react';
import ReactDOM from 'react-dom/client';
import { Signin } from './pages/Signin';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Signin />
  </React.StrictMode>,
);
