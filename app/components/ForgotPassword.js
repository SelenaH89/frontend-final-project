import { Formik } from 'formik';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import RegularButton from '../components/Buttons/RegularButton';
import MainContainer from '../components/Containers/MainContainer';
import IconHeader from '../components/Icons/IconHeader';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import KeyboardAvoidingContainer from './Containers/KeyboardAvoidingWrapper';
import { Colors } from './styles';
import MsgBox from './Text/MsgBox';
import RegularText from './Text/RegularText';

const { primary } = Colors;

const ForgotPassword = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const moveTo = (screen, payload) => {
    navigation.navigate(screen, { ...payload });
  };

  const handleOnSubmit = async (credentials, setSubmitting) => {
    try {
      setMessage(null);

      // call backend

      // move to next page
      moveTo('ResetPassword');
      setSubmitting(false);
    } catch (error) {
      setMessage('Request failed: ' + error.message);
      setSubmitting(false);
    }
  };

  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <IconHeader name="key" style={{ marginBottom: 30 }} />
        <RegularText style={{ marginBottom: 25 }}>
          Provide the details below to begin the process{' '}
        </RegularText>

        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email === '') {
              setMessage('Please fill in all fields');
              setSubmitting(false);
            } else {
              handleOnSubmit(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <>
              <StyledTextInput
                label="Email Address"
                icon="email-variant"
                placeholder="walt14@gmail.com"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{ marginBottom: 25 }}
              />

              <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>
                {message || ' '}
              </MsgBox>
              {!isSubmitting && (
                <RegularButton onPress={handleSubmit}>Submit</RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator size="small" color={primary} />
                </RegularButton>
              )}
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
  );
};

export default ForgotPassword;
