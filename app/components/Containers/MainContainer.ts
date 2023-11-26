import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Colors } from '../styles';

const { primary } = Colors;

const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  background-color: ${primary};
`;

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default MainContainer;
