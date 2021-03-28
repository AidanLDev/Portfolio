import React from 'react';
import Projects from 'containers/Projects/Projects';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Projects />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
