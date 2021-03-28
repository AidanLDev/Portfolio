import React from 'react';
import Blog from 'containers/Blog/Blog';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Blog />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
