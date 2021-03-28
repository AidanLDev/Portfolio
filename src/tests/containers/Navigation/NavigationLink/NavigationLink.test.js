import React from 'react';
import NavigationLink from 'containers/Navigation/NavigationLink/NavigationLink';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavigationLink />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
