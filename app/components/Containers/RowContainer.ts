import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

interface RowContainerProps {
  children: ReactNode;
}

const RowContainer: React.FC<RowContainerProps> = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default RowContainer;
