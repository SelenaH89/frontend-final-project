import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Colors, ScreenHeight } from '../styles';

const { secondary, accent } = Colors;

interface IconHeaderProps {
  name: string;
  color?: string;
  style?: ViewStyle;
}

const IconBg = styled.View`
  background-color: ${secondary};
  width: ${ScreenHeight * 0.15}px;
  height: ${ScreenHeight * 0.15}px;
  border-radius: ${ScreenHeight * 0.2}px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const IconHeader: React.FC<IconHeaderProps> = ({ name, color, style }) => {
  return (
    <IconBg style={style}>
      <MaterialCommunityIcons
        name={name}
        size={ScreenHeight * 0.08}
        color={color ? color : accent}
      />
    </IconBg>
  );
};

export default IconHeader;
