import React from 'react';
import Sidedrawer from 'containers/Navigation/Sidedrawer/Sidedrawer';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Sidedrawer />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
