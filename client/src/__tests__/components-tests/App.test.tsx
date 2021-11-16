import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';

test('should render the Application', () => {
  const component = renderer.create(
    <MockedProvider>
      <Router>
        <App />
      </Router>
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
