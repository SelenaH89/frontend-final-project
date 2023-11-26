import React, { ReactNode } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS, SIZES } from './styles';

interface IconPack {
  name: string;
  size: number;
  style?: object;
}

interface InputProps {
  id: string;
  onInputChanged: (id: string, text: string) => void;
  style?: object;
  icon?: string;
  iconPack?: React.ComponentType<IconPack>;
  placeholder?: string;
  errorText?: string[];
}

const Input: React.FC<InputProps> = (props) => {
  const onChangeText = (text: string) => {
    props.onInputChanged(props.id, text);
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputContainer}>
        {props.icon && props.iconPack && (
          <props.iconPack name={props.icon} size={24} style={styles.icon} />
        )}
        <TextInput
          onChangeText={onChangeText}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.black}
        />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText[0]}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: COLORS.gray,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderRadius: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 5,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
    color: COLORS.primary,
  },
  input: {
    color: COLORS.primary,
    flex: 1,
    fontFamily: 'regular',
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default Input;
