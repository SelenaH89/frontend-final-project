import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import ProfileModal from '../Modals/ProfileModal';
import { Colors } from '../styles';

const { primary, secondary, accent } = Colors;

interface AvatarProps {
  imgContainerStyle?: any;
}

const StyledView = styled.TouchableOpacity`
  background-color: ${primary};
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${secondary};
`;

const Avatar: React.FC<AvatarProps> = (props) => {
  // modal
  const [modalVisible, setModalVisible] = useState(false);
  const [headerText, setHeaderText] = useState<string | null>(null);

  const [loggingOut, setLoggingOut] = useState(false);

  const onLogout = async () => {
    setLoggingOut(true);

    setLoggingOut(false);
    setModalVisible(false);

    // move to login
  };

  const showProfileModal = (user: string) => {
    setHeaderText(user);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onAvatarPress = () => {
    showProfileModal('Jerry Walt');
  };

  return (
    <>
      <StyledView onPress={onAvatarPress} style={props.imgContainerStyle}>
        <MaterialCommunityIcons name="account" size={35} color={accent} />
      </StyledView>
      <ProfileModal
        modalVisible={modalVisible}
        headerText={headerText}
        buttonHandler={onLogout}
        loggingOut={loggingOut}
        hideModal={hideModal}
      />
    </>
  );
};

export default Avatar;
