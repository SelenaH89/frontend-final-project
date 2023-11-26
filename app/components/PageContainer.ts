import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Colors } from './styles';

interface PageContainerProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: Colors.darkLight,
        ...props.style,
      }}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default PageContainer;
