import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import MessageModal from './MessageModal';

describe('MessageModal', () => {
  const mockButtonHandler = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <MessageModal
        modalVisible={true}
        buttonHandler={mockButtonHandler}
        type="success"
        headerText="Success"
        message="Operation successful"
        buttonText="Okay"
      />,
    );

    expect(getByText('Success')).toBeTruthy();
    expect(getByText('Operation successful')).toBeTruthy();
    expect(getByText('Okay')).toBeTruthy();
  });

  it('uses correct icon and color for success type', () => {
    const { getByTestId } = render(
      <MessageModal
        modalVisible={true}
        buttonHandler={mockButtonHandler}
        type="success"
        headerText="Success"
        message="Operation successful"
        buttonText="Okay"
      />,
    );

    const icon = getByTestId('icon');
    expect(icon.props.name).toBe('check-circle');
    expect(icon.props.color).toBe('#4caf50'); // Replace with your success color
  });

  it('uses correct icon and color for failure type', () => {
    const { getByTestId } = render(
      <MessageModal
        modalVisible={true}
        buttonHandler={mockButtonHandler}
        type="fail"
        headerText="Failure"
        message="Operation failed"
        buttonText="Okay"
      />,
    );

    const icon = getByTestId('icon');
    expect(icon.props.name).toBe('close-circle');
    expect(icon.props.color).toBe('#f44336'); // Replace with your fail color
  });

  it('calls buttonHandler when button is pressed', () => {
    const { getByText } = render(
      <MessageModal
        modalVisible={true}
        buttonHandler={mockButtonHandler}
        type="success"
        headerText="Success"
        message="Operation successful"
        buttonText="Okay"
      />,
    );

    fireEvent.press(getByText('Okay'));
    expect(mockButtonHandler).toHaveBeenCalled();
  });
});
