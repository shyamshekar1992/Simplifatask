import React from 'react';
import EmployerDetails from '../EmployerDetails'
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<EmployerDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});
