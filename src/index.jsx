import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import { AppContainer } from 'react-hot-loader';
import App from '@/components/App';
// import RootContainer from '@/containers/RootContainer';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
