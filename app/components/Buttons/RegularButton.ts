import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Colors } from '../styles';
import RegularText from '../Text/RegularText'; // Assuming this is the component

const { primary, accent } = Colors;

// Define the styled button component
const ButtonView = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${accent};
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 60px;
`;

// Define the type for RegularText
type RegularTextType = typeof RegularText;

// Define the props interface
interface RegularButtonProps {
  onPress: () => void;
  children: ReactNode;
  textStyle?: RegularTextType['props']['style']; // Use the style prop type from RegularText
}

// Use React.FC and specify the prop type
const RegularButton: React.FC<RegularButtonProps> = ({
  onPress,
  children,
  textStyle,
  ...props
}) => {
  return (
    <ButtonView onPress={onPress} {...props}>
      <RegularText style={{ color: primary, ...(textStyle || {}) }}>
        {children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;
