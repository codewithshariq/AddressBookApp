import React from 'react';
import {
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {COLORS} from '../utils/constants';

function SearchBar(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TextInput
        style={styles.textInput}
        placeholder={'Search users here...'}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: '10%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.GREY_BORDER,
    borderRadius: 10,
  },
});

export default SearchBar;
