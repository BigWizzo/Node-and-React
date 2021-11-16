import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import PeopleByNamePage from '../../components/people-byname-page/poeple-byname-page';

test('should render the people by name in pages', () => {
  const component = renderer.create(
    <MockedProvider>
      <Router>
        <PeopleByNamePage />
      </Router>
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
