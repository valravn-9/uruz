import React from 'react';
import { render } from '@testing-library/react-native';
import ThreeScreen from './index';

describe('ThreeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ThreeScreen />);
    expect(getByText('Three')).toBeTruthy();
  });
});
