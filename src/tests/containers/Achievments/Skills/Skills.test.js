import React from 'react';
import Skills from 'containers/Achievements/skills/Skills';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Skills />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
