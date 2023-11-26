import React from 'react';
import renderer from 'react-test-renderer';
import MsgBox from './MsgBox';

describe('MsgBox component', () => {
  it('renders correctly with success color', () => {
    const tree = renderer
      .create(<MsgBox success>Success Message</MsgBox>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with fail color', () => {
    const tree = renderer.create(<MsgBox fail>Fail Message</MsgBox>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
