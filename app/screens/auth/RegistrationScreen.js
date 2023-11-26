import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Alert, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardAvoidingWrapper from '../../components/Containers/KeyboardAvoidingWrapper';
import {
  ButtonText,
  Colors,
  ExtraText,
  ExtraView,
  InnerContainer,
  Line,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  SubTitle,
  TextLink,
  TextLinkContent,
} from '../../components/styles';
import { register } from '../../features/authSlice';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleRegister = async (values) => {
    try {
      await dispatch(register(values));
      navigation.navigate('LoginScreen'); // navigate to dashboard after successful registration
    } catch (error) {
      Alert.alert('Registration Error', error.message);
    }
  };

  //colors
  const { darkLight } = Colors;

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Inventory Manager</PageTitle>
          <SubTitle>Account Signup</SubTitle>

          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={handleRegister}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Full Name"
                  placeholder="Richard Barnes"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  icon="person"
                />
                <MyTextInput
                  label="Email Address"
                  placeholder="andyj@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  icon="mail"
                />

                <MyTextInput
                  label="Password"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  icon="lock"
                />
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Register</ButtonText>
                </StyledButton>

                {authState.status === 'loading' && <Text>Loading...</Text>}
                {authState.error && <Text>Error: {authState.error}</Text>}

                <Line />
                <ExtraView>
                  <ExtraText>Already have an account? </ExtraText>
                  <TextLink onPress={() => navigation.navigate('LoginScreen')}>
                    <TextLinkContent>Login</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};

export default RegisterScreen;
