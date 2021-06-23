import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../utils/constants';
import {useDispatch} from 'react-redux';
import {setFilterOptions} from '../redux/reducers/Filter';

function FilterOption(props) {
  const dispatch = useDispatch();
  const {countryName, selected, dataCode} = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>{countryName}</Text>
        <TouchableWithoutFeedback
          onPress={() => dispatch(setFilterOptions({dataCode}))}
          style={styles.toggle}>
          <Icon
            name={selected ? 'toggle-on' : 'toggle-off'}
            size={40}
            color={selected ? COLORS.PRIMARY : COLORS.SECONDARY}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    width: '90%',
    borderBottomWidth: 1,
    borderColor: COLORS.GREY_BORDER,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  toggle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default FilterOption;
