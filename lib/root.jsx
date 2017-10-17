import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './app'

export const Root = ({ store }) => (
    <HashRouter>
      <App/>
    </HashRouter>
);
