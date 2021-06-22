import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {COLORS} from '../utils/constants';

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={props.handleSearch}
        status="info"
        placeholder="Search"
        style={styles.textInput}
        textStyle={{color: '#000'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 25,
    paddingHorizontal: 15,
    width: '70%',
    borderColor: COLORS.GREY_BORDER,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});

export default SearchBar;
