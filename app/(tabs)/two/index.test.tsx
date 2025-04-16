import React from 'react';
import { render } from '@testing-library/react-native';
import TwoScreen from './index';

describe('TwoScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TwoScreen />);
    expect(getByText('Two')).toBeTruthy();
  });
});
