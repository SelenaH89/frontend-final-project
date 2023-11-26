import React, { PressableProps, ReactNode } from 'react';
// styled components
import styled from 'styled-components/native';
import { Colors } from '../styles';
import SmallText from './SmallText';

const { accent } = Colors;

interface PressableTextProps extends PressableProps {
  children: ReactNode;
  onPress: () => void;
}

const StyledPressable = styled.Pressable`
  padding-vertical: 5px;
  align-self: center;
`;

const PressableText: React.FC<PressableTextProps> = (props) => {
  return (
    <StyledPressable onPress={props.onPress} {...props}>
      <SmallText style={{ color: accent }}>{props.children}</SmallText>
    </StyledPressable>
  );
};

export default PressableText;
