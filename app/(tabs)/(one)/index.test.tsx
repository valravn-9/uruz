import React from 'react';
import { render } from '@testing-library/react-native';
import OneScreen from './index';

describe('OneScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<OneScreen />);
    expect(getByText('One')).toBeTruthy();
  });
});
