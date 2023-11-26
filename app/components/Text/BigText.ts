import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Colors } from '../styles';

const { tertiary } = Colors;

const StyledText = styled.Text`
  font-size: 30px;
  color: ${tertiary};
  text-align: left;
`;

interface BigTextProps {
  children?: ReactNode;
  [key: string]: any; // for other props that might be passed
}

const BigText: React.FC<BigTextProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default BigText;
