import { render } from '@testing-library/react-native';
import React from 'react';
import RegularText from './RegularText';

describe('RegularText', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<RegularText>Test Text</RegularText>);

    expect(getByText('Test Text')).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<RegularText>Test Text</RegularText>);

    expect(getByText('Test Text')).toBeTruthy();
  });

  it('renders children correctly with props', () => {
    const { getByText } = render(
      <RegularText color="red">Test Text</RegularText>,
    );

    expect(getByText('Test Text')).toBeTruthy();
  });
});
