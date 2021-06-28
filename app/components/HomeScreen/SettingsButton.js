import React from 'react';
import {TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/constants';

function SettingsButton(props) {
  return (
    <TouchableWithoutFeedback
      onPress={props.naviagteToSettings}
      style={styles.container}>
      <Icon name="md-options-outline" size={35} color={COLORS.PRIMARY} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default SettingsButton;
