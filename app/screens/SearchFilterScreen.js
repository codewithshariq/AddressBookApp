import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FilterOption from '../components/FilterOption';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';

const selectFilterOptions = createSelector(
  state => state.filterOptions,
  filterOptions => filterOptions,
);

function SearchFilterScreen(props) {
  const filterOptions = useSelector(selectFilterOptions);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {"Select the countries to filter user's data"}
      </Text>
      {filterOptions.map((country, index) => {
        return <FilterOption {...country} key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    width: '80%',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 15,
  },
});

export default SearchFilterScreen;
