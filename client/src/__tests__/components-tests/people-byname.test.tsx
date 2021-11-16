import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import PeopleByName from '../../components/people-byname/people-byname';

test('should render the people by name list page', () => {
  const component = renderer.create(
    <MockedProvider>
      <Router>
        <PeopleByName />
      </Router>
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
