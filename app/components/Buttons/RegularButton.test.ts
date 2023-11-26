import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RegularButton from './RegularButton';

describe('RegularButton Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<RegularButton onPress={() => {}}>Click me</RegularButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('fires onPress callback', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <RegularButton onPress={onPressMock}>Click me</RegularButton>,
    );

    fireEvent.press(getByText('Click me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies custom styles', () => {
    const { getByText } = render(
      <RegularButton onPress={() => {}} textStyle={{ fontWeight: 'bold' }}>
        Click me
      </RegularButton>,
    );

    const buttonText = getByText('Click me');
    expect(buttonText.props.style).toContainEqual({ fontWeight: 'bold' });
  });
});
