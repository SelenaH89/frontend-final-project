import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Colors } from '../styles';

const { success, fail } = Colors;

interface StyledTextProps {
  success?: boolean;
}

const StyledText =
  styled.Text <
  StyledTextProps >
  `
  font-size: 13px;
  color: ${(props) => (props.success ? success : fail)};
  text-align: center;
`;

interface MsgBoxProps extends StyledTextProps {
  children?: ReactNode;
}

const MsgBox: React.FC<MsgBoxProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default MsgBox;
