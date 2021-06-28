/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import Router from './app/router';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainScreen}>
        <Router />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
