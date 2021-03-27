import React from 'react';
import Achievemnts from 'containers/Achievements/Achievements';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Achievemnts />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
