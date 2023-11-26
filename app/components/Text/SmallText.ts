import React, { ReactNode, TextProps } from 'react';
// styled components
import styled from 'styled-components/native';
import { Colors } from '../styles';

const { tertiary } = Colors;

interface SmallTextProps extends TextProps {
  children: ReactNode;
}

const StyledText = styled.Text`
  font-size: 13px;
  color: ${tertiary};
  text-align: left;
`;

const SmallText: React.FC<SmallTextProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default SmallText;
