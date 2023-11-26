import React from 'react';
// styled components
import styled from 'styled-components/native';
import { Colors } from '../styles';

const { tertiary } = Colors;

const StyledText = styled.Text`
  font-size: 15px;
  color: ${tertiary};
  text-align: left;
`;

const RegularText = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default RegularText;
