import { Ionicons, Octicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardAvoidingWrapper from '../../components/Containers/KeyboardAvoidingWrapper';
import {
  ButtonText,
  Colors,
  ExtraText,
  ExtraView,
  InnerContainer,
  LeftIcon,
  Line,
  PageTitle,
  RightIcon,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  SubTitle,
  TextLink,
  TextLinkContent,
} from '../../components/styles';
import { login } from '../../features/authSlice';

const { darkLight, brand } = Colors;

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleLogin = async () => {
    if (email && password) {
      try {
        await dispatch(login({ email, password }));
        navigation.navigate('DashboardScreen'); // navigate to dashboard after successful login
      } catch (error) {
        Alert.alert('Login Error', error.message);
      }
    } else {
      Alert.alert('Login Error', 'Username and password cannot be empty');
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Inventory Manager</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <StyledFormArea>
            <MyTextInput
              label="Email Address"
              placeholder="andyj@gmail.com"
              placeholderTextColor={darkLight}
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              icon="mail"
            />
            <MyTextInput
              label="Password"
              placeholder="* * * * * * * *"
              placeholderTextColor={darkLight}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={hidePassword}
              icon="lock"
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />

            <StyledButton onPress={handleLogin}>
              <ButtonText>Login</ButtonText>
            </StyledButton>

            {authState.status === 'loading' && <Text>Loading...</Text>}
            {authState.error && <Text>Error: {authState.error}</Text>}

            <Line />

            <ExtraView>
              <ExtraText>Don't have an account already? </ExtraText>
              <TextLink
                onPress={() => navigation.navigate('RegistrationScreen')}
              >
                <TextLinkContent>Register</TextLinkContent>
              </TextLink>
            </ExtraView>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginScreen;
