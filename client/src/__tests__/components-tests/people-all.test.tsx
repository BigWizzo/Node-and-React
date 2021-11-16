import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import AllPeople from '../../components/poeple-all/poeple-all';

test('should render the all people home page', () => {
  const component = renderer.create(
    <MockedProvider>
      <Router>
        <AllPeople />
      </Router>
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
