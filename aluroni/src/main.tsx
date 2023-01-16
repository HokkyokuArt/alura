import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import AppRouter from 'routes'

import { RouterProvider } from 'react-router-dom';

import Router from './routes';
import Menu from 'components/Menu/Menu';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Menu /> */}
    {/* <RouterProvider router={Router} /> */}
    <Router/>
  </React.StrictMode>,
);
