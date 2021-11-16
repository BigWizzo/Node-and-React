import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import PeopleByPage from '../../components/people-bypage/poeple-bypage';

test('should render people by pages', () => {
  const component = renderer.create(
    <MockedProvider>
      <Router>
        <PeopleByPage />
      </Router>
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
